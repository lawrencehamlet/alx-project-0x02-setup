import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

const Users: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex items-center justify-center min-h-96">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">Loading users...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex items-center justify-center min-h-96">
                            <div className="text-center">
                                <p className="text-red-600 mb-4">Error: {error}</p>
                                <button 
                                    onClick={() => window.location.reload()}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Users</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Meet our community members fetched from JSONPlaceholder API
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {users.map(user => (
                            <UserCard 
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                address={user.address}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;