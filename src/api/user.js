import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/api/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/api/getUserInfo',
    method: 'post',
    data: { token: token }
  })
}

export function logout(token) {
  return request({
    url: '/admin/api/logout',
    method: 'post',
    data: { token: token }
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/admin/api/getUserInfo',
//     method: 'get',
//     params: { token }
//   })
// }

