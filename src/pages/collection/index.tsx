import React, { Fragment } from 'react'
import Head from 'next/head'
import Banner from 'public/testImage.jpg'
import HomeBanner from '@/page-sections/HomePage/HomeBanner'
import BookTest from 'public/Test.png'
import CambridgeIelts16 from 'public/cambridge16.png'
import Heading from '@/components/Heading'
import ExamListSection from '@/page-sections/ExamLibraryPage/ExamListSection'

const CourseLibrary: React.FC = ({ imageList, collectionList }:any) => {
  return (
    <Fragment>
      <Head>
        <title>IELTS PLATFORM</title>
      </Head>
      <div className="homepage relative bg-white">
        <HomeBanner imageList={imageList} />
        <div className='max-w-[1160px] flex flex-col mx-auto mt-[60px] mb-10 px-5'>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="introduction flex items-center w-[100%]">
                <Heading
                title="Exam library"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                titleClassName="text-h2 font-bold"
                descriptionClassName="my-[8px]"
                className="max-w-[432px]"
              />
            </div>
          </div>
          <ExamListSection collectionList={collectionList} />
        </div>
      </div>
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
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/1',
          imageSrc: CambridgeIelts16,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/2',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/3',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
      ],
    },
    {
      title: 'IELTS Mock Test 2023',
      tests: [
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/1',
          imageSrc: CambridgeIelts16,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/2',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/3',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
      ],
    },
    {
      title: 'IELTS Mock Test 2023',
      tests: [
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/1',
          imageSrc: CambridgeIelts16,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/2',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: '/collection/3',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
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
export default CourseLibrary
