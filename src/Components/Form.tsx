import React, { FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
const Form = () => {
	// const nameRef = useRef<HTMLInputElement>(null);
	// const ageRef = useRef<HTMLInputElement>(null);
	// const person = { name: '', age: 0 };
	const { register } = useForm();

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					{...register('name')}
					id='name'
					type='text'
					className='form-control'
				/>
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
