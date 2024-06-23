import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

// Resources

const ContactCard = () => {
    return (
        <section className='flex flex-col md:grid md:grid-cols-2 w-full rounded-[1rem] bg-primary'>
            <img src='/contact-image.png' alt="Contact Us Image" className='object-cover h-full w-full rounded-t-[1rem] md:rounded-[1rem]'/>
            <div className='flex flex-col justify-center items-center flex-wrap gap-[2rem] px-[2pc] py-[2pc]'>
                <span className='flex flex-col justify-center items-center gap-[0.5rem]'>
                    <h2 className="text-h2 text-white">Contact Us</h2>
                    <p className='text-body text-white text-center'>If you have any questions, or require assistance, our friendly team is here to help. Your satisfaction is our priority, and we look forward to assisting you with any inquiries you may have.</p>
                </span>
                <Link href="" className='w-full'>
                    <Button title='Make an inquiry' className='w-full h-auto text-white border border-solid border-white' style={{paddingTop: 12, paddingBottom: 12}}/>
                </Link>
            </div>
        </section>
    );
};

export default ContactCard;