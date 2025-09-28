import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">About Page</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Learn more about this Next.js project and its implementation of modern web development practices.
                    </p>
                    
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Button Examples</h2>
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-gray-700">Different Sizes:</span>
                                <Button 
                                    title="Small Button" 
                                    size="small"
                                    shape="rounded-md"
                                />
                                <Button 
                                    title="Medium Button" 
                                    size="medium"
                                    shape="rounded-md"
                                />
                                <Button 
                                    title="Large Button" 
                                    size="large"
                                    shape="rounded-md"
                                />
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-gray-700">Different Shapes:</span>
                                <Button 
                                    title="Small Rounded" 
                                    size="medium"
                                    shape="rounded-sm"
                                />
                                <Button 
                                    title="Medium Rounded" 
                                    size="medium"
                                    shape="rounded-md"
                                />
                                <Button 
                                    title="Full Rounded" 
                                    size="medium"
                                    shape="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Features</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Next.js with TypeScript for type-safe development</li>
                            <li>• Tailwind CSS for utility-first styling</li>
                            <li>• Reusable components with proper prop interfaces</li>
                            <li>• Responsive design and modern UI patterns</li>
                            <li>• Modal components and form handling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;