import axios, { AxiosResponse } from 'axios';
import { PostType } from '../models/post.interface';
import { IProduct } from 'interfaces/IProduct';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 15000,
});
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Get = {
  products: (category: string): Promise<IProduct> => requests.get(`/api/products/${category}`),
  getProduct: (category: string, id: string): Promise<IProduct> => requests.get(`/api/products/${category}/${id}`),
  getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
  createPost: (post: PostType): Promise<PostType> => requests.post('posts', post),
  updatePost: (post: PostType, id: number): Promise<PostType> => requests.put(`posts/${id}`, post),
  deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};

export const Post = {
  createProduct: (body: PostType): Promise<PostType> => requests.post('/api/products', body),
  createProductImage: (body: any) => requests.post('/api/products/image', body),
};


