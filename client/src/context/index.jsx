import { useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';

export const AuthContext = createContext();

const token = localStorage.getItem("token") || "";
const user = localStorage.getItem("user") || null;

const defaultState = {
	jwt: token,
	user: user,
	isAuth: token ? true : false,
}

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, defaultState);

	function setNewState(item) {
		dispatch({ type: "LOGIN", item });
	}

	function restart() {
		dispatch({ type: "RESET" });
	}

	const context = {
		token: state.token,
		user: state.user,
		isAuth: state.isAuth,
		setNewState,
		restart,
	}

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthProvider;