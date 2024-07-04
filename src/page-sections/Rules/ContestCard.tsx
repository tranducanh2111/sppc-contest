import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import GroupOfPeopleImage from 'public/group_of_people.png';

const ContestCard = () => {
    return (
        <section className='flex flex-col lg:grid lg:grid-cols-5 shadow-lg rounded-[12px]'>
            <figure className='col-span-2 h-full'>
                <Image src={GroupOfPeopleImage} alt={"Group of People"} loading="lazy" className='object-cover w-full h-full rounded-l-[12px] rounded-r-[12px] lg:rounded-r-none' />
            </figure>
            <article className='col-span-3 flex flex-wrap flex-col items-center my-auto gap-y-[2rem] py-[1.5rem] lg:py-0'>
                <div className='w-[80%] flex flex-col gap-y-[12px]'>
                    <h3 className='text-h3 text-center'>Let's explore your talent!</h3>
                    <p className='text-body text-center'>Take the first step towards coding greatness and sign up now!</p>
                </div>
                <div className='flex flex-wrap gap-x-[3rem]'>
                    <Button title='Sign Up' className='bg-secondary text-white border border-solid border-primary'/>
                    <Button title='Form a team' className='border-primary border border-solid text-primary' />
                </div>
            </article>
        </section>
    );
};

export default ContestCard;