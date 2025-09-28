import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        Next.js Project
                    </Link>
                    <nav className="flex space-x-6">
                        <Link 
                            href="/home" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About
                        </Link>
                        <Link 
                            href="/posts" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Posts
                        </Link>
                        <Link 
                            href="/users" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Users
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;