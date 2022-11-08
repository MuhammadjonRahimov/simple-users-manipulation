import styles from './Auth.module.scss';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerHandler } from '../../api/registration-api';
import useHttp from '../../hooks/use-http';
import { reg_inputs } from '../../utils/form-items';

import Button from '../../components/UI/button/Button';

function Registration() {
	const { send } = useHttp(registerHandler);
	const [hidden, setHidden] = useState(true);

	async function submit(data,) {
		await send(data, true, '/login');
	}
	const { register, handleSubmit, formState: { errors, isValid } } = useForm({
		mode: "onChange",
	});
	return (
		<div className={styles.window}>
			<div className={`container ${styles['window__row']}`}>
				<form
					onSubmit={handleSubmit(submit)}
					className={styles['window__form']}
				>
					{reg_inputs.map(input =>
						<label key={input.name}>
							<p>{input.name}</p>
							<div className={styles['input-wrapper']}>
								<input
									{...register(
										input.name,
										input.validation
									)}
									placeholder={input.placeholder}
									type={(input.type !== 'password' && input.type) || hidden ? input.type : 'text'}
								/>
								{input.eye && <div onClick={() => setHidden(!hidden)}>
									{
										hidden ?
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={13} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9FA2B4" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
											</svg>
											:
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={13} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9FA2B4" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
												<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
									}
								</div>
								}
							</div>
							{errors[input.name] && <p>{errors[input.name].message}</p>}
						</label>
					)}
					<Button type='submit' disabled={!isValid}>Register</Button>
				</form>
				<div className={styles['link-wrapper']}>
					<span>
						Already have an account ?
					</span>
					<Link className={styles.link} to="/login">Sign in</Link>
				</div>
			</div>
		</div>
	)
}
export default Registration;