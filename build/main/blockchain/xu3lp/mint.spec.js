'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const abis_1 = require('@xtoken/abis')
const ava_1 = __importDefault(require('ava'))
const constants_spec_1 = require('../../constants.spec')
const mint_1 = require('./mint')
ava_1.default(
  'Calculate xU3LPa expected quantity on mint with DAI',
  async (t) => {
    const expectedQty = await mint_1.getExpectedQuantityOnMintXU3LP(
      abis_1.X_U3LP_A,
      0,
      '1000',
      constants_spec_1.provider
    )
    console.log('Expected xU3LPa qty for 1000 DAI:', expectedQty)
    t.true(Number(expectedQty) > 0)
  }
)
ava_1.default(
  'Calculate xU3LPa expected quantity on mint with USDC',
  async (t) => {
    const expectedQty = await mint_1.getExpectedQuantityOnMintXU3LP(
      abis_1.X_U3LP_A,
      1,
      '1000',
      constants_spec_1.provider
    )
    console.log('Expected xU3LPa qty for 1000 USDC:', expectedQty)
    t.true(Number(expectedQty) > 0)
  }
)
ava_1.default(
  'Calculate xU3LPb expected quantity on mint with USDC',
  async (t) => {
    const expectedQty = await mint_1.getExpectedQuantityOnMintXU3LP(
      abis_1.X_U3LP_B,
      0,
      '1000',
      constants_spec_1.provider
    )
    console.log('Expected xU3LPb qty for 1000 USDC:', expectedQty)
    t.true(Number(expectedQty) > 0)
  }
)
ava_1.default(
  'Calculate xU3LPb expected quantity on mint with USDT',
  async (t) => {
    const expectedQty = await mint_1.getExpectedQuantityOnMintXU3LP(
      abis_1.X_U3LP_B,
      1,
      '1000',
      constants_spec_1.provider
    )
    console.log('Expected xU3LPb qty for 1000 USDT:', expectedQty)
    t.true(Number(expectedQty) > 0)
  }
)
ava_1.default(
  'Calculate xU3LPc expected quantity on mint with sUSD',
  async (t) => {
    const expectedQty = await mint_1.getExpectedQuantityOnMintXU3LP(
      abis_1.X_U3LP_C,
      0,
      '1000',
      constants_spec_1.provider
    )
    console.log('Expected xU3LPc qty for 1000 sUSD:', expectedQty)
    t.true(Number(expectedQty) > 0)
  }
)
ava_1.default(
  'Calculate xU3LPc expected quantity on mint with USDC',
  async (t) => {
    const expectedQty = await mint_1.getExpectedQuantityOnMintXU3LP(
      abis_1.X_U3LP_C,
      1,
      '1000',
      constants_spec_1.provider
    )
    console.log('Expected xU3LPc qty for 1000 USDC:', expectedQty)
    t.true(Number(expectedQty) > 0)
  }
)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Jsb2NrY2hhaW4veHUzbHAvbWludC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQTJEO0FBQzNELDhDQUFzQjtBQUV0Qix5REFBK0M7QUFFL0MsaUNBQXVEO0FBRXZELGFBQUksQ0FBQyxxREFBcUQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQ0FBOEIsQ0FDdEQsZUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04seUJBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQ0FBOEIsQ0FDdEQsZUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04seUJBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQ0FBOEIsQ0FDdEQsZUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04seUJBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQ0FBOEIsQ0FDdEQsZUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04seUJBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQ0FBOEIsQ0FDdEQsZUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04seUJBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQUksQ0FBQyxzREFBc0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQ0FBOEIsQ0FDdEQsZUFBUSxFQUNSLENBQUMsRUFDRCxNQUFNLEVBQ04seUJBQVEsQ0FDVCxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSSJ9
