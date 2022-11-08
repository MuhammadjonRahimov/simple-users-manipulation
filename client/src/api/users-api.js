import http from '../utils/axios-instance';

export const getUsers = async () => {
	const response = await http({
		url: '/users'
	});
	return response.data.content;
}

export async function deleteUser(ids) {
	const response = await http({
		method: 'PUT',
		url: `/users/all`,
		data: ids
	});
	return response;
}

export async function changeStatus({ ids, status }) {
	const response = await http({
		method: 'PUT',
		url: `/users/status/all`,
		data: { ids, status }
	});
	return response;
}