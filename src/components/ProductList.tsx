import { useState, useEffect } from 'react';
import type { Product } from '../types/Product';
import { getProducts, createProduct } from '../services/api';

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProductName, setNewProductName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProductName.trim()) return;

        try {
            setLoading(true);
            await createProduct({ name: newProductName });
            setNewProductName('');
            await fetchProducts();
            setError('');
        } catch (err) {
            setError('Failed to create product');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto' }} className="bg-white rounded-lg shadow-lg p-6">
            <h1 
            className="text-3xl font-bold text-gray-800 mb-8" 
            // style={{ marginLeft: '24px' }}
            >
                Products
            </h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                        placeholder="Enter product name"
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors duration-200"
                    >
                        Add Product
                    </button>
                </div>
            </form>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="text-center text-gray-600">Loading...</div>
            ) : (
                <ul className="space-y-3">
                    {products.length === 0 ? (
                        <li className="text-center text-gray-500">No products found</li>
                    ) : (
                        products.map((product) => (
                            <li
                                key={product.id}
                                className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {product.name}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}; 