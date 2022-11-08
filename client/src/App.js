import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './context';
import { routes } from './utils/routes';

function App() {
	const { isAuth } = useContext(AuthContext);
	return (
		<>
			<ToastContainer />
			<Routes>
				{
					routes.map(route => {
						return <Route key={route.id} element={route.element} path={route.path} />
					})
				}
			</Routes>
		</>
	);
}
export default App;