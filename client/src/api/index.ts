import axios, { AxiosResponse } from 'axios';
import { PostType } from '../models/post.interface';

const url = process.env.REACT_APP_SERVER_URL
console.log('url: ', url);

const instance = axios.create({
	// baseURL: process.env.REACT_APP_SERVER_URL,
	baseURL: 'http://localhost:8000',
	timeout: 15000,
});
console.log(process.env.REACT_APP_SERVER_URL);
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Get = {
	products: () => requests.get('/api/category/list'),
	getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	createPost: (post: PostType): Promise<PostType> =>
		requests.post('posts', post),
	updatePost: (post: PostType, id: number): Promise<PostType> =>
		requests.put(`posts/${id}`, post),
	deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};


const test = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com/',
	timeout: 15000,
});


const test_requests = {
	get: (url: string) => test.get(url).then(responseBody),
	post: (url: string, body: {}) => test.post(url, body).then(responseBody),
	put: (url: string, body: {}) => test.put(url, body).then(responseBody),
	delete: (url: string) => test.delete(url).then(responseBody),
};


export const Post = {
	getPosts: (): Promise<PostType[]> => test_requests.get('posts'),
	getAPost: (id: number): Promise<PostType> => test_requests.get(`posts/${id}`),
	createPost: (post: PostType): Promise<PostType> =>
		test_requests.post('posts', post),
	updatePost: (post: PostType, id: number): Promise<PostType> =>
		test_requests.put(`posts/${id}`, post),
	deletePost: (id: number): Promise<void> => test_requests.delete(`posts/${id}`),
};