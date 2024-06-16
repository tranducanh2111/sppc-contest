import React, { ReactNode } from 'react';

interface FormProps {
    title?: string;
    description?: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    children: ReactNode
}

const Form: React.FC<FormProps> = ({
    children
}: FormProps) => {
    return (
        <div className='bg-white overflow-hidden rounded-lg' >
            <div className='m-10'>
                {children}
            </div>

        </div>
    );
};

export default Form;
