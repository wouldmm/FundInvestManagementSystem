import request from '@/utils/request'

export function getRecommends() {
    return request({
      url: 'api/funds/recommendfunds/',
      method: 'get'
    })
  }

export function getfundsnetvalueone(params) {
    return request({
      url: 'api/funds/fundsnetvalue/',
      method: 'get',
      params
    })
  }

export function getfundsnetvalueall(params) {
  return request({
    url: 'api/funds/fundsnetvalue/',
    method: 'get',
    params
  })
}  

export function getfundsmain(main_code) {
  return request({
    url: 'api/funds/fundmain/'+main_code+'/',
    method: 'get',
  })
}
export function getprotfoliostock(params) {
  return request({
    url: 'api/funds/ProtfolioStock/',
    method: 'get',
    params
  })
}
export function getprotfoliobond(params) {
  return request({
    url: 'api/funds/ProtfolioBond/',
    method: 'get',
    params
  })
}
export function getfundprotfolio(params) {
  return request({
    url: 'api/funds/FundProtfolio/',
    method: 'get',
    params
  })
}

export function getfundsnetvaluelist(params) {
  return request({
    url: 'api/funds/fundsnetvaluelist/',
    method: 'get',
    params
  })
}
  
  
export function getuserfavfundslist(params) {
  return request({
    url: 'api/funds/UserfundsListViewSet/',
    method: 'get',
    params
  })
}  

export function createuserfavfund(data) {
  return request({
    url: 'api/funds/UserfundsViewSet/',
    method: 'post',
    data
  })
}

export function deleteuserfavfund(id) {
  return request({
    url: 'api/funds/UserfundsViewSet/'+id+'/',
    method: 'delete',
  })
}  

export function getuserfavfund(params) {
  return request({
    url: 'api/funds/UserfundsViewSet/',
    method: 'get',
    params
  })
}  