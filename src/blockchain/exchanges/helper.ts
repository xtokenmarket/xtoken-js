import { BigNumber } from '@ethersproject/bignumber'
import { BaseProvider } from '@ethersproject/providers'
import { Abi, ADDRESSES, ETH, WETH } from '@xtoken/abis'
import { ethers } from 'ethers'
import { formatEther, parseEther } from 'ethers/lib/utils'

import { DEC_18 } from '../../constants'
import { ITokenSymbols } from '../../types/xToken'
import { getTokenSymbol } from '../utils'

import { getEthUsdcPrice } from './uniswap'

export const getBalances = async (
  symbol: ITokenSymbols,
  poolAddress: string,
  tokenPrice: number,
  provider: BaseProvider,
  chainId: number,
  underlyingPrice?: BigNumber,
  isWeth?: boolean,
  xTokenBalance = BigNumber.from('0'),
  ethBalance = BigNumber.from('0')
) => {
  // Addresses
  const xTokenAddress = ADDRESSES[symbol][chainId]

  // Contracts
  const xTokenContract = new ethers.Contract(xTokenAddress, Abi.ERC20, provider)

  // Ignore fetching xAsset balance in liquidity pool for xSNXa
  if (xTokenBalance.isZero()) {
    try {
      // Balances
      xTokenBalance = await xTokenContract.balanceOf(poolAddress)
    } catch (e) {
      console.error('Error while fetching user balance:', e)
    }
  }

  // ETH price in USD
  const ethUsdcPrice = await getEthUsdcPrice(provider)

  const tokenVal = xTokenBalance
    .mul(parseEther(tokenPrice.toString()))
    .div(DEC_18)

  // Ignore fetching ETH/WETH balance in liquidity pool for xSNXa
  if (ethBalance.isZero()) {
    if (isWeth) {
      const wethAddress = ADDRESSES[WETH][chainId]
      const wethContract = new ethers.Contract(wethAddress, Abi.ERC20, provider)
      ethBalance = await wethContract.balanceOf(poolAddress)
    } else {
      ethBalance = await provider.getBalance(poolAddress)
    }
  }

  const ethVal = ethBalance.mul(parseEther(ethUsdcPrice)).div(DEC_18)

  let underlying
  let underlyingVal = BigNumber.from('0')

  if (underlyingPrice) {
    const tokenSymbol = getTokenSymbol(symbol)
    const underlyingToken = tokenSymbol.toUpperCase()
    const underlyingAddress = ADDRESSES[tokenSymbol][chainId]
    const underlyingContract = new ethers.Contract(
      underlyingAddress,
      Abi.ERC20,
      provider
    )
    const underlyingBalance = await underlyingContract.balanceOf(poolAddress)

    underlyingVal = underlyingBalance.mul(underlyingPrice).div(DEC_18)

    underlying = {
      name: underlyingToken,
      amt: formatEther(underlyingBalance),
      val: formatEther(underlyingVal),
    }
  }

  const totalVal = ethVal.add(tokenVal).add(underlyingVal)

  return {
    totalVal: formatEther(totalVal),
    token: {
      name: symbol,
      amt: formatEther(xTokenBalance),
      val: formatEther(tokenVal),
    },
    underlying,
    eth: {
      name: ETH.toUpperCase(),
      amt: formatEther(ethBalance),
      val: formatEther(ethVal),
    },
  }
}
