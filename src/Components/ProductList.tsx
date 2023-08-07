import React, { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
	const [product, setProducts] = useState<string[]>([]);

	useEffect(() => {
		console.log('fetching products in ', category);
		setProducts(['clothing', 'Household']);
	}, [category]);

	return <div>ProductList</div>;
};

export default ProductList;
