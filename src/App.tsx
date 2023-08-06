import { useState } from 'react';
import ExpenseList from './Expense-Tracker/Components/ExpenseList';
import ExpenseFilter from './Expense-Tracker/Components/ExpenseFilter';
import ExpenseForm from './Expense-Tracker/Components/ExpenseForm';
import categories from './Expense-Tracker/categories';

function App() {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [expenses, setExpenses] = useState([
		{ id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
		{ id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
		{ id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
		{ id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
	]);

	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;
	return (
		<div>
			<div className="div mb-5">
				<ExpenseForm
					onSubmit={(expense) =>
						setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
					}
				/>
			</div>
			<ExpenseFilter
				onSelectCategory={(category) => setSelectedCategory(category)}
			/>
			<ExpenseList
				expenses={visibleExpenses}
				onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
			/>
		</div>
	);
}

export default App;
