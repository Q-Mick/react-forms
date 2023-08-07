import { useEffect, useState } from 'react';
import ProductList from './Components/ProductList';
import axios from 'axios';

interface User {
	id: number;
	name: string;
}

function App() {
	// const [category, setCategory] = useState('');
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState(''); // afterRender
	useEffect(() => {
		axios
			.get<User[]>('https://jsonplaceholder.typicode.com/uxsers')
			.then(res => setUsers(res.data))
			.catch(err => setError(err.message));
	}, []);

	return (
		<div>
			{error && <p className="text-danger">{error}</p>}
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
