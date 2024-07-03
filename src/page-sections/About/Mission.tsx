import React from 'react'

const Mission: React.FC = () => {
    return (
        <section className="flex flex-col lg:grid lg:grid-cols-about-mission gap-x-[2.5rem] gap-y-[3rem]">
            <div className='flex flex-col gap-[1.5rem]'>
                <div className="flex flex-col gap-[0.75rem] justify-center">
                    <p className='text-body text-primary font-bold'>Let SPPC tell you a story</p>
                    <h2 className='text-h2'>Our Mission</h2>
                </div>
                <p className='text-body'>Welcome to SPPC, where we&apos;re dedicated to igniting the passion, honing the skills of student programmers worldwide. Our mission is simple yet profound: provide a platform where aspiring coders can unleash their creativity, tackle real-world problems, and cultivate the expertise needed to thrive in the evolving tech landscape.</p>
            </div>
            <div className='grid grid-cols-2 gap-[2rem]'>
                <article>
                    <figure className='text-primary text-h2 mb-[0.75rem] text-center'>70%</figure>
                    <p className='text-body text-center'>participant pursuing degrees in STEM</p>
                </article>
                <article>
                    <figure className='text-primary text-h2 mb-[0.75rem] text-center'>80%</figure>
                    <p className='text-body text-center'>participant learned new concepts during the contest</p>
                </article>
                <article>
                    <figure className='text-primary text-h2 mb-[0.75rem] text-center'>75%</figure>
                    <p className='text-body text-center'> participants show their intention to participate the future contest</p>
                </article>
                <article>
                    <figure className='text-primary text-h2 mb-[0.75rem] text-center'>70%</figure>
                    <p className='text-body text-center'>participants express satisfaction with the contest organization</p>
                </article>
            </div>
        </section>
    )
}

export default Mission