import styles from './Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import Button from '../UI/button/Button';
import { AuthContext } from '../../context';


function Navbar() {
	const navigate = useNavigate();
	const { restart } = useContext(AuthContext);

	function logOut() {
		restart();
		navigate('/');
	}

	return (
		<nav className={styles.menu}>
			<div className={styles['menu__row']}>
				<Link to='/' className={styles['menu__logo']}>
					<img src="/users-icon.svg" alt="logo" />
				</Link>
				<Button onClick={logOut}>
					Log out
				</Button>
			</div >
		</nav>
	)
}
export default Navbar;