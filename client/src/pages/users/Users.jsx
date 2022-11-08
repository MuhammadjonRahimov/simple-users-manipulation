import styles from './Users.module.scss';

import { useEffect, useState } from 'react';
import { FaUnlock, FaTrash } from 'react-icons/fa';

import { getUsers, deleteUser, changeStatus } from '../../api/users-api';
import useHttp from '../../hooks/use-http';

import Layout from '../../components/UI/Layout';
import Table from '../../components/UI/table/Table';
import Button from '../../components/UI/button/Button';
import Spinner from '../../components/UI/Spinner';

function Users() {
	const [selectedUsers, setSelectedUsers] = useState([]);

	const { send, loading, data: users } = useHttp(getUsers);
	const { send: changeStatusHandler } = useHttp(changeStatus);
	const { send: deleteHandler } = useHttp(deleteUser);

	const isActionsActive = selectedUsers.length === 0;

	useEffect(() => {
		send();
	}, []);

	const selectUserHandler = (id) => {
		setSelectedUsers(prev => {
			if (!prev.includes(id)) return [...prev, id];
			return prev.filter(userId => userId !== id);
		});
	}

	const actionHandler = async (type) => {
		if (type === 'block') {
			await changeStatusHandler({ ids: selectedUsers, status: 'blocked' }, true);
		} else if (type === 'unblock') {
			await changeStatusHandler({ ids: selectedUsers, status: 'active' }, true);
		} else if (type === 'delete') {
			await deleteHandler(selectedUsers, true);
		}
		await send();
		setSelectedUsers([]);
	}

	function selectAllUsersHandler() {
		const ids = users.map(user => user.id);
		if (selectedUsers.length === users.length) {
			setSelectedUsers([]);
		} else if (selectedUsers.length >= 0) {
			setSelectedUsers(ids);
		}
	}

	const cols = [
		{ header: 'Name', accessor: 'name' },
		{ header: 'Email', accessor: 'email' },
		{ header: 'Last login time', accessor: (e) => new Date(e.lastLoginTime).toLocaleDateString() },
		{ header: 'Registration time', accessor: (e) => new Date(e.createdAt).toLocaleDateString() },
		{ header: 'Status', accessor: 'status' },
		{
			header: () => <input type="checkbox" checked={selectedUsers.length === users.length &&
				users.length !== 0} onChange={selectAllUsersHandler} />,
			accessor: (e) => <div><input checked={selectedUsers.includes(e.id)}
				type="checkbox"
				onChange={selectUserHandler.bind(null, e.id)} /></div>
		},
	]

	return (
		<Layout>
			<section className={styles.section}>
				{loading && <Spinner />}
				{!loading && users && <div className={styles['section__row']}>
					<div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
						<Button mode="red" disabled={isActionsActive} onClick={actionHandler.bind(null, 'block')}>
							Block
						</Button>
						<Button disabled={isActionsActive} onClick={actionHandler.bind(null, 'unblock')}>
							<FaUnlock />
						</Button>
						<Button disabled={isActionsActive} onClick={actionHandler.bind(null, 'delete')}>
							<FaTrash />
						</Button>
					</div>
					<div className={styles['section__form']}>
						<Table
							cols={cols}
							data={users}
						/>
					</div>
				</div>
				}
			</section>
		</Layout>
	)
}
export default Users;