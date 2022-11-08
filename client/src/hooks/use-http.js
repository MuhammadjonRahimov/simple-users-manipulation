import { useState } from 'react';
import toastHandler from '../utils/toastHandler';
import { useNavigate } from 'react-router-dom';

function useHttp(reqFunc) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const navigate = useNavigate();

	const send = async (reqData, showToast, navigateTo) => {
		try {
			setLoading(true);
			setError(null);
			const response = await reqFunc(reqData);
			setData(response);
			showToast && toastHandler(response.data.message, response.data.status);
			navigateTo && navigate(navigateTo);
			return response;
		} catch (error) {
			const statusCode = error.response.status;
			if (statusCode === 401 || statusCode === 403) {
				localStorage.clear();
				navigate('/login');
			}
			statusCode !== 401 && toastHandler(error.response.data.message, 'error');
			setError(error);
		} finally {
			setLoading(false);
		}
	}
	return { send, loading, error, data }
}
export default useHttp;