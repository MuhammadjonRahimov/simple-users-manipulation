import Navbar from "../navbar/Navbar"

const Layout = params => {
	return <>
		<Navbar />
		{params.children}
	</>
}
export default Layout