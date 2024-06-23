import React from 'react';
import Button from '@/components/Button';

const Register = () => {
    return (
        <section className='max-w-[35rem] mx-auto flex flex-col items-center gap-[2rem]'>
            <div className="flex flex-col justify-center items-center gap-[0.75rem]">
                <h2 className="text-h2 text-primary">Register Now!</h2>
                <p className="text-body text-center">Join the ranks of aspiring programmers and unleash your potential in our exhilarating coding contest!</p>
            </div>
            <Button title='Register' className='bg-primary text-white'/>
        </section>
    );
};

export default Register;