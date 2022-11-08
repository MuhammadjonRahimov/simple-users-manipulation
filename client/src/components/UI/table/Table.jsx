import styles from './Table.module.scss';

import { TransitionGroup, CSSTransition } from "react-transition-group";

let statusColor;

function Table({ cols, data = [] }) {

	const bodyContent = data.map((d, i) =>
		<CSSTransition
			key={i}
			timeout={200}
			className="item"
		>
			<tr>
				<td datalabel="#">{i + 1}</td>
				{
					cols.map((col) => {
						let content;
						if (typeof col.accessor === 'string') {
							content = d[col.accessor];
							if (content === 'active') {
								statusColor = 'status-green'
							} else if (content === 'blocked') {
								statusColor = 'status-red';
							}
						} else if (col.accessor instanceof Function) {
							content = col.accessor(d);
						}
						return <td
							className={col.header === 'Status' ? styles[statusColor] : ''}
							key={col.header}
							datalabel={`${typeof col.header === 'string' ? col.header : ''}`}
						>
							{col.header === 'Status' ? content.toUpperCase() : content}
						</td>
					})
				}
			</tr>
		</CSSTransition>
	)
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>#</th>
					{cols.map((col) => {
						if (col.header instanceof Function) {
							return <th key={Date.now()}>{col.header()}</th>
						} else {
							return <th key={col.header}>{col.header}</th>
						}
					}
					)}
				</tr>
			</thead>
			<TransitionGroup component="tbody">
				{bodyContent}
			</TransitionGroup>
		</table>
	)
}
export default Table;