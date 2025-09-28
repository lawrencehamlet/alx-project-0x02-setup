import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
    id: number;
    title: string;
    content: string;
}

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const handleAddPost = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now(),
            title,
            content
        };
        setPosts([...posts, newPost]);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Add New Post
                        </button>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8">
                        Welcome to the home page! This is where you'll find the main content of our application.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Card 
                            title="Next.js Features" 
                            content="Discover the powerful features of Next.js including server-side rendering, static site generation, and API routes." 
                        />
                        <Card 
                            title="TypeScript Integration" 
                            content="Learn how TypeScript enhances your development experience with type safety and better tooling support." 
                        />
                        <Card 
                            title="Tailwind CSS Styling" 
                            content="Explore utility-first CSS framework that makes styling fast and maintainable with responsive design." 
                        />
                    </div>

                    {posts.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Posts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.map(post => (
                                    <Card 
                                        key={post.id}
                                        title={post.title}
                                        content={post.content}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <PostModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPost}
            />
        </>
    );
};

export default Home;