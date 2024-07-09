import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NotFoundImage from 'public/404-illustration-1.svg';
import Button from '@/components/Button';

const Custom404 = () => {
  return (
    <section className="max-w-[1570px] mx-auto px-5 lg:flex items-center justify-center min-h-[80vh] gap-x-[3rem]">
        <figure className='w-[70%] mx-auto md:w-[60%] lg:w-[35%] mb-[4rem] lg:mb-0 h-full'>
          <Image src={NotFoundImage} alt="404 Not Found" className='w-full h-full object-cover' />
        </figure>
        <div className='flex flex-col items-center'>
          <h1 className="text-center text-3xl md:text-h2 font-bold text-gray-800 uppercase tracking-widest mb-[0.75rem]">AWWW...Don&apos;t cry.</h1>
          <p className="text-gray-600 text-xl md:text-h3 mb-[0.25rem] text-center">It&apos;s just a 404!</p>
          <p className="text-gray-600 text-xl md:text-h3 mb-[2.25rem] text-center">What you are looking for may have been misplaced in Long Term Memory...</p>
          <Link href="/">
            <Button title='To the Homepage, shall we?' className="bg-primary text-body text-white w-fit" style={{paddingTop: 16, paddingBottom: 16, paddingLeft: 32, paddingRight: 32}}/>
          </Link>
        </div>
    </section>
  );
};

export default Custom404;