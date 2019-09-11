import requset from '@/utils/requset'

export default class Api {
  static login (data) {
    return requset({
      url: '/api/login',
      method: 'post',
      data
    })
  }
}
