import { X_U3LP_A, X_U3LP_B, X_U3LP_C } from '@xtoken/abis'
import test from 'ava'
import { provider } from '../../constants.spec'
import { getExpectedQuantityOnBurnXU3LP } from './burn'
test('Calculate expected quantity of DAI on burn of xU3LPa', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_A,
    0,
    '1000',
    provider
  )
  console.log('Expected qty of DAI for 1000 xU3LPa:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate expected quantity of USDC on burn of xU3LPa', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_A,
    1,
    '1000',
    provider
  )
  console.log('Expected qty of USDC for 1000 xU3LPa:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate expected quantity of USDC on burn of xU3LPb', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_B,
    0,
    '1000',
    provider
  )
  console.log('Expected qty of USDC for 1000 xU3LPb:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate expected quantity of USDT on burn of xU3LPb', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_B,
    1,
    '1000',
    provider
  )
  console.log('Expected qty of USDT for 1000 xU3LPb:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate expected quantity of sUSD on burn of xU3LPc', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_C,
    0,
    '1000',
    provider
  )
  console.log('Expected qty of sUSD for 1000 xU3LPc:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate expected quantity of USDC on burn of xU3LPc', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_C,
    1,
    '1000',
    provider
  )
  console.log('Expected qty of USDC for 1000 xU3LPc:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
/*test('Calculate expected quantity of sETH on burn of xU3LPd', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_D,
    0,
    '1000',
    provider
  )
  console.log('Expected qty of sETH for 1000 xU3LPd:', expectedQty)
  t.true(Number(expectedQty) > 0)
})

test('Calculate expected quantity of WETH on burn of xU3LPd', async (t) => {
  const expectedQty = await getExpectedQuantityOnBurnXU3LP(
    X_U3LP_D,
    1,
    '1000',
    provider
  )
  console.log('Expected qty of WETH for 1000 xU3LPd:', expectedQty)
  t.true(Number(expectedQty) > 0)
})*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVybi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Jsb2NrY2hhaW4veHUzbHAvYnVybi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUMzRCxPQUFPLElBQUksTUFBTSxLQUFLLENBQUE7QUFFdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUV2RCxJQUFJLENBQUMsc0RBQXNELEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sV0FBVyxHQUFHLE1BQU0sOEJBQThCLENBQ3RELFFBQVEsRUFDUixDQUFDLEVBQ0QsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNoRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyx1REFBdUQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDeEUsTUFBTSxXQUFXLEdBQUcsTUFBTSw4QkFBOEIsQ0FDdEQsUUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUE7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLHVEQUF1RCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN4RSxNQUFNLFdBQVcsR0FBRyxNQUFNLDhCQUE4QixDQUN0RCxRQUFRLEVBQ1IsQ0FBQyxFQUNELE1BQU0sRUFDTixRQUFRLENBQ1QsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDakUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsdURBQXVELEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3hFLE1BQU0sV0FBVyxHQUFHLE1BQU0sOEJBQThCLENBQ3RELFFBQVEsRUFDUixDQUFDLEVBQ0QsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNqRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyx1REFBdUQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDeEUsTUFBTSxXQUFXLEdBQUcsTUFBTSw4QkFBOEIsQ0FDdEQsUUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUE7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLHVEQUF1RCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN4RSxNQUFNLFdBQVcsR0FBRyxNQUFNLDhCQUE4QixDQUN0RCxRQUFRLEVBQ1IsQ0FBQyxFQUNELE1BQU0sRUFDTixRQUFRLENBQ1QsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDakUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFDLENBQUE7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkkifQ==
