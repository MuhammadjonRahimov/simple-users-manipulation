import styles from './Button.module.scss';


function Button({ children, mode = 'blue', ...props }) {
	return (
		<>
			<button
				type={props.type || 'button'}
				{...props}
				className={`${styles.btn} ${styles[mode]}`}
			>
				{children}
			</button>
		</>
	)
}

export default Button;