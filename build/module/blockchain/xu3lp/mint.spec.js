import { X_U3LP_A, X_U3LP_B, X_U3LP_C } from '@xtoken/abis'
import test from 'ava'
import { provider } from '../../constants.spec'
import { getExpectedQuantityOnMintXU3LP } from './mint'
test('Calculate xU3LPa expected quantity on mint with DAI', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_A,
    0,
    '1000',
    provider
  )
  console.log('Expected xU3LPa qty for 1000 DAI:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate xU3LPa expected quantity on mint with USDC', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_A,
    1,
    '1000',
    provider
  )
  console.log('Expected xU3LPa qty for 1000 USDC:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate xU3LPb expected quantity on mint with USDC', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_B,
    0,
    '1000',
    provider
  )
  console.log('Expected xU3LPb qty for 1000 USDC:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate xU3LPb expected quantity on mint with USDT', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_B,
    1,
    '1000',
    provider
  )
  console.log('Expected xU3LPb qty for 1000 USDT:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate xU3LPc expected quantity on mint with sUSD', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_C,
    0,
    '1000',
    provider
  )
  console.log('Expected xU3LPc qty for 1000 sUSD:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
test('Calculate xU3LPc expected quantity on mint with USDC', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_C,
    1,
    '1000',
    provider
  )
  console.log('Expected xU3LPc qty for 1000 USDC:', expectedQty)
  t.true(Number(expectedQty) > 0)
})
/*test('Calculate xU3LPd expected quantity on mint with sETH', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_D,
    0,
    '1000',
    provider
  )
  console.log('Expected xU3LPd qty for 1000 sETH:', expectedQty)
  t.true(Number(expectedQty) > 0)
})

test('Calculate xU3LPd expected quantity on mint with WETH', async (t) => {
  const expectedQty = await getExpectedQuantityOnMintXU3LP(
    X_U3LP_D,
    1,
    '1000',
    provider
  )
  console.log('Expected xU3LPd qty for 1000 WETH:', expectedQty)
  t.true(Number(expectedQty) > 0)
})*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Jsb2NrY2hhaW4veHUzbHAvbWludC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUMzRCxPQUFPLElBQUksTUFBTSxLQUFLLENBQUE7QUFFdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUV2RCxJQUFJLENBQUMscURBQXFELEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3RFLE1BQU0sV0FBVyxHQUFHLE1BQU0sOEJBQThCLENBQ3RELFFBQVEsRUFDUixDQUFDLEVBQ0QsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSw4QkFBOEIsQ0FDdEQsUUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUE7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLHNEQUFzRCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN2RSxNQUFNLFdBQVcsR0FBRyxNQUFNLDhCQUE4QixDQUN0RCxRQUFRLEVBQ1IsQ0FBQyxFQUNELE1BQU0sRUFDTixRQUFRLENBQ1QsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDOUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsc0RBQXNELEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sV0FBVyxHQUFHLE1BQU0sOEJBQThCLENBQ3RELFFBQVEsRUFDUixDQUFDLEVBQ0QsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSw4QkFBOEIsQ0FDdEQsUUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUE7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLHNEQUFzRCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN2RSxNQUFNLFdBQVcsR0FBRyxNQUFNLDhCQUE4QixDQUN0RCxRQUFRLEVBQ1IsQ0FBQyxFQUNELE1BQU0sRUFDTixRQUFRLENBQ1QsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDOUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFDLENBQUE7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkkifQ==
