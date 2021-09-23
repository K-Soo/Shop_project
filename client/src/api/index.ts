import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { PostType } from '../models/post.interface';
import { IProduct } from 'interfaces/IProduct';
import UserInfo from '../components/Forms/UserInfo';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   'Access-Control-Allow-Credentials': 'true',
  // },
};

const instance = axios.create(config);

const responseBody = (response: AxiosResponse) => response.data;



const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Get = {
  products: (category: string): Promise<IProduct> => requests.get(`/api/products/${category}`),
  UserInfo: (id: string): Promise<IProduct> => requests.get(`/api/users/${id}`),
  getProduct: (category: string, id: string): Promise<IProduct> => requests.get(`/api/products/${category}/${id}`),
  getAllProduct: (): Promise<IProduct> => requests.get(`/api/products/list`),
  getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
  createPost: (post: PostType): Promise<PostType> => requests.post('posts', post),
  updatePost: (post: PostType, id: number): Promise<PostType> => requests.put(`posts/${id}`, post),
  deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
  getHistory: (idx: string, page: number) => requests.get(`/api/users/history/${idx}/?page=${page}`),
  getHistoryDetail: (idx: string, orderNum: string) => requests.get(`/api/users/history/${idx}/${orderNum}`),
};

export const Post = {
  createProduct: (body: PostType): Promise<PostType> => requests.post('/api/products', body),
  createProductImage: (body: any) => requests.post('/api/products/image', body),
  createCart: (body: any) => requests.post('/api/users/cart', body),
  login: (body: any) => requests.post('/api/users/login', body),
  register: (body: any) => requests.post('/api/users/register', body),
  checkId: (body: { userId: string }) => requests.post('/api/users/check', body),
  checkout: (userId: string, body: any) => requests.post(`/api/users/checkout/${userId}`, body),
};

export const Put = {
  updateBasket: (body: any) => requests.put('/api/users/basket', body),
  updateBasketQty: (body: any) => requests.put('/api/users/basket', body),
};

export const Delete = {
  deleteBasket: (user: string, id: string) => requests.delete(`/api/users/basket/${user}/${id}`,),
};

