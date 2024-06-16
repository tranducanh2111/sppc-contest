import React, { Fragment } from 'react'
import Head from 'next/head'
import Banner from 'public/testImage.jpg'
import HomeBanner from '@/page-sections/HomePage/HomeBanner'
import ArticlesSection from '@/page-sections/HomePage/ArticlesSection'
import BookTestImage from 'public/Test.png'
import BookTest from '@/page-sections/BookPage/BookTest'

const BookLibrary: React.FC = ({ imageList }: any) => {
  return (
    <Fragment>
      <Head>
        <title>IELTS PLATFORM</title>
      </Head>
      <main className="bookPage relative bg-white space-y-[40px]">
        <HomeBanner imageList={imageList}/>
        <section className='flex justify-center w-full px-[20px] space-y-[20px] sm:space-y-[40px]'>
          <BookTest/>
        </section>
      </main>
    </Fragment>
  )
}
export const getStaticProps = async () => {
  const imageList = [Banner, Banner, Banner, Banner]
  const collectionList = [
    {
      title: 'IELTS Mock Test 2023',
      tests: [
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/1',
          imageSrc: BookTestImage,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/2',
          imageSrc: BookTestImage,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/3',
          imageSrc: BookTestImage,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
      ],
    },
    {
      title: 'TOEFL Mock Test 2022',
      tests: [
        {
          title: 'TOEFL Mock Test 2022',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'TOEFL Mock Test 2022',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'TOEFL Mock Test 2022',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
      ],
    },
    {
      title: 'TOEIC Mock Test 2021',
      tests: [
        {
          title: 'TOEIC Mock Test 2021',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'TOEIC Mock Test 2021',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'TOEIC Mock Test 2021',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
      ],
    },
    {
      title: 'SAT Mock Test 2020',
      tests: [
        {
          title: 'SAT Mock Test 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'SAT Mock Test 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
        {
          title: 'SAT Mock Test 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTestImage,
        },
      ],
    },
  ]
  return {
    props: {
      imageList,
      collectionList,
    },
    revalidate: 1, // revalidate every hour
  }
}
export default BookLibrary
