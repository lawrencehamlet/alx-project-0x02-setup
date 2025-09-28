export interface PillProps {
    title: string;
}

export interface ButtonProps {
    title: string;
    styles?: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    userId: number;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
}
