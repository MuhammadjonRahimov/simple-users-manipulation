import http from '../utils/axios-instance';
import toastHandler from '../utils/toastHandler';

export async function login(data) {
	const response = await http({ url: `/auth/login`, method: 'POST', data });
	return response;
}