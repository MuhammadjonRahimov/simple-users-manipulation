import useId from "../hooks/useId";

import NotFound from "../components/NotFound";
import Login from "../pages/authentification/Login";
import Registration from "../pages/authentification/Registration";
import Users from "../pages/users/Users";

export const routes = [
	{ id: useId, element: <Login />, path: "/", },
	{ id: useId, element: <Login />, path: "/login" },
	{ id: useId, element: <Registration />, path: "/registration" },
	{ id: useId, element: <Users />, path: "/users" },
	{ id: useId, element: <NotFound />, path: "*" },
];