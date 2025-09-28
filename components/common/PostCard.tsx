import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900 capitalize">
                    {title}
                </h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Post #{id}
                </span>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
                {content}
            </p>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                    By User {userId}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default PostCard;