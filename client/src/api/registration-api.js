import http from '../utils/axios-instance';

export async function registerHandler(data) {
	const response = await http({ url: '/auth/register', data: data, method: 'POST' });
	return response;
}