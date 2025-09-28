import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                // Limit to first 12 posts for better display
                setPosts(data.slice(0, 12));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
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
                                <p className="text-gray-600">Loading posts...</p>
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Posts</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Explore posts fetched from JSONPlaceholder API
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(post => (
                            <PostCard 
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                userId={post.userId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;