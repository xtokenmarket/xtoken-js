import { BaseProvider } from '@ethersproject/providers'
import { Contract } from 'ethers'
import { formatBytes32String, formatEther } from 'ethers/lib/utils'

import { DEC_18, DEFAULT_PRICES } from '../../constants'
import { ExchangeRates, TradeAccounting, XSNX } from '../../types'
import { ITokenPrices } from '../../types/xToken'
import { formatNumber } from '../../utils'
import { getTokenBalance } from '../utils'

/**
 * @example
 * ```typescript
 * import { ethers } from 'ethers'
 * import { Abi, ADDRESSES, EXCHANGE_RATES, TRADE_ACCOUNTING, SNX, X_SNX_A, X_SNX_A_ADMIN } from '@xtoken/abis'
 * import { getXSnxPrices } from '@xtoken/js'
 *
 * const provider = new ethers.providers.InfuraProvider('homestead', <INFURA_API_KEY>)
 * const network = await provider.getNetwork()
 * const { chainId } = network
 *
 * const xsnxContract = new ethers.Contract(ADDRESSES[X_SNX_A][chainId], Abi.xSNX, provider)
 * const snxContract = new ethers.Contract(ADDRESSES[SNX][chainId], Abi.Synthetix, provider)
 * const exchangeRatesContract = new ethers.Contract(ADDRESSES[EXCHANGE_RATES][chainId], Abi.ExchangeRates, provider)
 * const tradeAccountingContract = new ethers.Contract(ADDRESSES[TRADE_ACCOUNTING][chainId], Abi.TradeAccounting, provider)
 *
 * const { priceEth, priceUsd } = await getXSnxPrices(
 *   xsnxContract,
 *   ADDRESSES[X_SNX_A_ADMIN][chainId],
 *   tradeAccountingContract,
 *   exchangeRatesContract,
 *   snxContract,
 *   provider
 * )
 * ```
 *
 * @param {XSNX} xsnxContract xSNXa token contract
 * @param {string} xsnxAdminAddress XSNX contract admin address
 * @param {TradeAccounting} tradeAccountingContract Trade accounting contract
 * @param {ExchangeRates} exchangeRatesContract Exchange rates contract
 * @param {Contract} snxContract SNX contract
 * @param {BaseProvider} provider Ether.js Provider
 * @returns A promise of the token prices in ETH/USD along with AUM
 */
export const getXSnxPrices = async (
  xsnxContract: XSNX,
  xsnxAdminAddress: string,
  tradeAccountingContract: TradeAccounting,
  exchangeRatesContract: ExchangeRates,
  snxContract: Contract,
  provider: BaseProvider
): Promise<ITokenPrices> => {
  try {
    const [
      { rate: snxUsdPrice },
      { rate: ethUsdPrice },
      contractDebtValue,
    ] = await Promise.all([
      exchangeRatesContract.rateAndUpdatedTime(formatBytes32String('SNX')),
      exchangeRatesContract.rateAndUpdatedTime(formatBytes32String('sETH')),
      snxContract.debtBalanceOf(xsnxAdminAddress, formatBytes32String('sUSD')),
    ])
    const weiPerOneSnx = snxUsdPrice.mul(DEC_18).div(ethUsdPrice)

    const [
      snxBalanceBefore,
      setHoldings,
      ethBal,
      totalSupply,
      snxBalanceOwned,
    ] = await Promise.all([
      tradeAccountingContract.getSnxBalance(),
      tradeAccountingContract.getSetHoldingsValueInWei(),
      tradeAccountingContract.getEthBalance(),
      xsnxContract.totalSupply(),
      getTokenBalance(snxContract.address, xsnxAdminAddress, provider),
    ])
    const nonSnxAssetValue = setHoldings.add(ethBal)

    const [issueTokenPriceInEth, redeemTokenPriceEth] = await Promise.all([
      tradeAccountingContract.calculateIssueTokenPrice(
        weiPerOneSnx,
        snxBalanceBefore,
        nonSnxAssetValue,
        totalSupply
      ),
      tradeAccountingContract.calculateRedeemTokenPrice(
        totalSupply,
        snxBalanceOwned,
        contractDebtValue
      ),
    ])

    const priceUsd = issueTokenPriceInEth.mul(ethUsdPrice).div(DEC_18)
    const sellPriceUsd = redeemTokenPriceEth.mul(ethUsdPrice).div(DEC_18)
    const aum = totalSupply.mul(priceUsd).div(DEC_18)

    return {
      aum: formatNumber(formatEther(aum), 0),
      priceEth: formatNumber(formatEther(issueTokenPriceInEth)),
      priceUsd: formatNumber(formatEther(priceUsd)),
      sellPriceEth: formatNumber(formatEther(redeemTokenPriceEth)),
      sellPriceUsd: formatNumber(formatEther(sellPriceUsd)),
    }
  } catch (e) {
    console.error('Error while fetching token price:', e)
    return DEFAULT_PRICES
  }
}
