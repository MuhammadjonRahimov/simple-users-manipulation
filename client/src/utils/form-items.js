export const reg_inputs = [
	{
		name: 'name',
		type: 'text',
		placeholder: "Your Name",
		validation: {
			required: 'The filed must be filled',
			minLength: {
				value: 2,
				message: `Firstname should be at least 2 characters`,
			},
		},
	},
	{
		eye: true,
		name: 'password',
		type: 'password',
		placeholder: "Password",
		validation: {
			required: 'The filed must be filled',
			minLength: {
				value: 6,
				message: 'Password should include at least 6 characters',
			},
		},
	},
	{
		name: 'email',
		type: 'email',
		placeholder: "Your email",
		validation: {
			required: 'the field must be filled',
			minLength: {
				value: '8',
				message: 'Email shoud be at least 8 characters'
			}
		}
	},
]

export const log_inputs = [
	{
		name: 'email',
		type: 'email',
		placeholder: "Your Emaiil",
		validation: {
			required: 'the field must be filled',
			minLength: {
				value: '8',
				message: 'Email shoud be at least 8 characters'
			}
		}
	},
	{
		eye: true,
		name: 'password',
		type: 'password',
		placeholder: "Password",
		validation: {
			required: 'The filed must be filled',
			minLength: {
				value: 6,
				message: 'Password should include at least 6 characters',
			},
		},
	},
]