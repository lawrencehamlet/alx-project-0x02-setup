import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
    title, 
    styles = '', 
    size = 'medium', 
    shape = 'rounded-md' 
}) => {
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    const baseClasses = 'bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors';
    const sizeClass = sizeClasses[size];
    const combinedClasses = `${baseClasses} ${sizeClass} ${shape} ${styles}`;

    return (
        <button className={combinedClasses}>
            {title}
        </button>
    );
};

export default Button;
