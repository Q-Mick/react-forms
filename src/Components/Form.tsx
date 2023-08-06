import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
	name: string;
	age: number;
}

const Form = () => {
	// const nameRef = useRef<HTMLInputElement>(null);
	// const ageRef = useRef<HTMLInputElement>(null);
	// const person = { name: '', age: 0 };
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FieldValues) => console.log(data);
	return (
		<form onSubmit={handleSubmit((data) => console.log(data))}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					{...register('name', { required: true, minLength: 3 })}
					id='name'
					type='text'
					className='form-control'
				/>
				{errors.name?.type === 'required' && (
					<p className='text-danger'>The name field is required.</p>
				)}
				{errors.name?.type === 'minLength' && (
					<p className='text-danger'>The name must be 3 characters minimum.</p>
				)}
			</div>
			<div className='mb-3'>
				<label htmlFor='age' className='form-label'>
					Age
				</label>
				<input
					{...register('age')}
					id='age'
					type='number'
					className='form-control'
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				submit
			</button>
		</form>
	);
};

export default Form;
