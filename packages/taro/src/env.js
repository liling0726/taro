export const ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT'
}

export function getEnv () {
  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    return ENV_TYPE.WEAPP
  }
  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    return ENV_TYPE.SWAN
  }
  if (typeof my !== 'undefined' && my.getSystemInfo) {
    return ENV_TYPE.ALIPAY
  }
  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    return ENV_TYPE.TT
  }
  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    return ENV_TYPE.RN
  }
  if (typeof window !== 'undefined') {
    return ENV_TYPE.WEB
  }
  return 'Unknown environment'
}
