exports.id = 8740;
exports.ids = [8740];
exports.modules = {

/***/ 8740:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dX": function() { return /* binding */ Get; },
/* harmony export */   "SO": function() { return /* binding */ Post; },
/* harmony export */   "qb": function() { return /* binding */ Put; },
/* harmony export */   "HG": function() { return /* binding */ Delete; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3803);


const config = {
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    common: {// Authorization: 'AUTH_TOKEN_FROM_INSTANCE'
    } // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',

  }
};
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create(config);
instance.interceptors.request.use(config => {
  const token = utils__WEBPACK_IMPORTED_MODULE_1__/* .customCookie.get */ .S1.get('access_token');

  if (token) {
    config.headers.common['Authorization'] = token;
  }

  return config;
}, error => {
  return Promise.reject(error);
});
instance.interceptors.response.use(response => {
  return response;
}, error => {
  const status = error.response ? error.response.status : null;

  if (status === 419) {
    alert('로그인정보가 만료되었습니다.');
    utils__WEBPACK_IMPORTED_MODULE_1__/* .customCookie.remove */ .S1.remove('access_token');
    localStorage.removeItem('basket');
    localStorage.removeItem('guest');
    localStorage.removeItem('order');
    return location.href = '/auth/login';
  }

  return Promise.reject(error);
});

const responseBody = response => response.data;

const requests = {
  get: url => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
  delete: url => instance.delete(url).then(responseBody)
};
const Get = {
  products: category => requests.get(`/api/products/${category}`),
  getProductsA: category => requests.get(`/api/products/admin/${category}`),
  getProductDetail: (category, id) => requests.get(`/api/products/${category}/${id}`),
  UserInfo: id => requests.get(`/api/users/${id}`),
  getAllProduct: (type, page) => requests.get(`/api/products/list?type=${type}&page=${page}`),
  getHistory: (idx, page, limit) => requests.get(`/api/users/history/${idx}?page=${page}&limit=${limit}`),
  getUserHistoryDetail: (idx, orderNum) => requests.get(`/api/users/history/${idx}/${orderNum}`),
  getGuestHistoryDetail: idx => requests.get(`/api/users/history/guest-detail/${idx}`),
  getInterestProductList: (idx, page) => requests.get(`/api/users/interest-product/${idx}?page=${page}`),
  getPointInfo: idx => requests.get(`/api/users/point/${idx}/info`),
  getProductReview: (productId, page, limit, key, value) => requests.get(`/api/products/review/${productId}?page=${page}&limit=${limit}&key=${key}&value=${value}`),
  getPointList: (idx, page, limit) => requests.get(`/api/users/point/${idx}?page=${page}&limit=${limit}`),
  getNoticeList: (page, limit) => requests.get(`/api/board/notice?page=${page}&limit=${limit}`),
  getNoticeDetail: idx => requests.get(`/api/board/notice/${idx}`),
  getAdminSales: () => requests.get(`/api/admin/sales`),
  getAdminPoint: () => requests.get(`/api/admin/point`),
  getAdminStatistics: type => requests.get(`/api/admin/statistics?type=${type}`)
};
const Post = {
  createProduct: body => requests.post('/api/products', body),
  createProductImage: body => requests.post('/api/products/image', body),
  createCart: body => requests.post('/api/users/cart', body),
  login: body => requests.post('/api/users/login', body),
  findUserId: body => requests.post('/api/users/find-id', body),
  findUserPassword: body => requests.post('/api/users/find-password', body),
  guestLogin: body => requests.post('/api/users/guest-login', body),
  register: body => requests.post('/api/users/register', body),
  checkId: body => requests.post('/api/users/check', body),
  checkout: (userId, body) => requests.post(`/api/users/checkout/${userId}`, body),
  guestCheckout: body => requests.post(`/api/users/guest-checkout`, body),
  createReview: (idx, productId, body) => requests.post(`/api/products/review/${idx}/${productId}`, body),
  createNotice: body => requests.post('/api/board/notice', body)
};
const Put = {
  updateBasket: body => requests.put('/api/users/basket', body),
  updateInterestProduct: body => requests.put('/api/users/interest-product', body),
  updateUserBasketQty: (idx, productId, body) => requests.put(`/api/users/basket/${idx}/${productId}`, body),
  updateProductQty: (idx, body) => requests.put(`/api/products/qty/${idx}`, body),
  updateProductClose: body => requests.put('/api/products/close', body),
  updateProductColor: body => requests.put('/api/products/color', body),
  updateUserInfo: (idx, body) => requests.put(`/api/users/${idx}`, body),
  deleteManyNotice: body => requests.put(`/api/admin/notice`, body),
  updatePassword: body => requests.put('/api/users/find-password', body)
};
const Delete = {
  deleteBasket: (user, id) => requests.delete(`/api/users/basket/${user}/${id}`),
  deleteInterestProduct: (idx, ProductId) => requests.delete(`/api/users/interest-product/${idx}/${ProductId}`)
};

/***/ })

};
;