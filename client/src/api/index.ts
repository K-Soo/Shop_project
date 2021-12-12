import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IProduct } from 'interfaces/IProduct';
import { customCookie } from 'utils';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    common: {
      // Authorization: 'AUTH_TOKEN_FROM_INSTANCE'
    }
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
  },
};

const instance = axios.create(config);

instance.interceptors.request.use((config) => {
  const token = customCookie.get('access_token');
  if (token) {
    config.headers.common['Authorization'] = token;
  }
  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use((response) => {
  return response;
},
  (error) => {
  const status = error.response ? error.response.status : null;
  if(status === 419){
    alert('로그인정보가 만료되었습니다.');
    customCookie.remove('access_token');
    localStorage.removeItem('basket');
    localStorage.removeItem('guest');
    localStorage.removeItem('order');
    return location.href = '/auth/login';
}
    return Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse) => response.data;


const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Get = {
  products: (category: string): Promise<IProduct[]> => requests.get(`/api/products/${category}`),
  getProductsA: (category: string): Promise<IProduct[]> => requests.get(`/api/products/admin/${category}`),
  getProductDetail: (category: string, id: string): Promise<IProduct> => requests.get(`/api/products/${category}/${id}`),
  UserInfo: (id: string): Promise<IProduct> => requests.get(`/api/users/${id}`),
  getAllProduct: (type?: string, page?: number): Promise<IProduct[]> => requests.get(`/api/products/list?type=${type}&page=${page}`),
  getHistory: (idx: string, page: number, limit: number) => requests.get(`/api/users/history/${idx}?page=${page}&limit=${limit}`),
  getUserHistoryDetail: (idx: string, orderNum: string) => requests.get(`/api/users/history/${idx}/${orderNum}`),
  getGuestHistoryDetail: (idx: string) => requests.get(`/api/users/history/guest-detail/${idx}`),
  getInterestProductList: (idx: string, page: number) => requests.get(`/api/users/interest-product/${idx}?page=${page}`),
  getPointInfo: (idx: string) => requests.get(`/api/users/point/${idx}/info`),
  getProductReview: (productId: string, page: number, limit: number, key: string, value: number) => requests.get(`/api/products/review/${productId}?page=${page}&limit=${limit}&key=${key}&value=${value}`),
  getPointList: (idx: string, page: number, limit: number) => requests.get(`/api/users/point/${idx}?page=${page}&limit=${limit}`),
  getNoticeList: (page: number, limit: number) => requests.get(`/api/board/notice?page=${page}&limit=${limit}`),
  getNoticeDetail: (idx: string) => requests.get(`/api/board/notice/${idx}`),
  getAdminSales: () => requests.get(`/api/admin/sales`),
  getAdminPoint: () => requests.get(`/api/admin/point`),
  getAdminStatistics: (type: string) => requests.get(`/api/admin/statistics?type=${type}`),
};

export const Post = {
  createProduct: (body: IProduct): Promise<IProduct> => requests.post('/api/products', body),
  createProductImage: (body: any) => requests.post('/api/products/image', body),
  createCart: (body: any) => requests.post('/api/users/cart', body),
  login: (body: any) => requests.post('/api/users/login', body),
  findUserId: (body: any) => requests.post('/api/users/find-id', body),
  findUserPassword: (body: any) => requests.post('/api/users/find-password', body),
  guestLogin: (body: any) => requests.post('/api/users/guest-login', body),
  register: (body: any) => requests.post('/api/users/register', body),
  checkId: (body: { userId: string }) => requests.post('/api/users/check', body),
  checkout: (userId: string, body: any) => requests.post(`/api/users/checkout/${userId}`, body),
  guestCheckout: (body: any) => requests.post(`/api/users/guest-checkout`, body),
  createReview: (idx: string, productId: string, body: any) => requests.post(`/api/products/review/${idx}/${productId}`, body),
  createNotice: (body: any) => requests.post('/api/board/notice', body),
};

export const Put = {
  updateBasket: (body: any) => requests.put('/api/users/basket', body),
  updateInterestProduct: (body: any) => requests.put('/api/users/interest-product', body),
  updateUserBasketQty: (idx: string, productId: string, body: any) => requests.put(`/api/users/basket/${idx}/${productId}`, body),
  updateProductQty: (idx: string, body: any) => requests.put(`/api/products/qty/${idx}`, body),
  updateProductClose: (body: any) => requests.put('/api/products/close', body),
  updateProductColor: (body: any) => requests.put('/api/products/color', body),
  updateUserInfo: (idx: string, body: any) => requests.put(`/api/users/${idx}`, body),
  deleteManyNotice: (body: any) => requests.put(`/api/admin/notice`, body),
  updatePassword: (body: any) => requests.put('/api/users/find-password', body),
};

export const Delete = {
  deleteBasket: (user: string, id: string) => requests.delete(`/api/users/basket/${user}/${id}`,),
  deleteInterestProduct: (idx: string, ProductId: string) => requests.delete(`/api/users/interest-product/${idx}/${ProductId}`,),
};

