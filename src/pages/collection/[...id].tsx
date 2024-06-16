import React from 'react'
import { GetStaticPropsContext } from 'next'
import Heading from '@/components/Heading'
import TestImage from 'public/testImage.jpg'
import Banner from '@/components/Banner'
import Button from '@/components/Button'
import ArrowRight from 'public/rightarrow.svg'
import BookTest from 'public/Test.png'
import PrimaryCard from '../../components/PrimaryCard'
import { CardProps } from '@/components/Card'
import Card from '@/components/Card'
import Link from 'next/link'
const Test: React.FC = ({ id }: any) => {
  const sections: CardProps[] = [
    {
      title: 'Listening',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: BookTest,
      url: '/collection/1/1',
    },
    {
      title: 'Reading',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: BookTest,
      url: '/collection/1/2',
    },
    {
      title: 'Writing',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: BookTest,
      url: '/collection/1/3',
    },
    {
      title: 'Speaking',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: BookTest,
      url: '/collection/1/4',
    },
  ]
  const collectionList = [
    {
      title: 'IELTS Mock Test 2023',
      tests: [
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
      ],
    },
  ]

  return id?.length === 1 ? (
    <div className="Test Detail bg-white">
      <Banner imageUrl={TestImage} />
      <div className="mx-auto pb-[40px] px-[10px] sm:px-[120px] sm:pt-[80px]">
        <Heading
          title={`Test ${id}`}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          titleClassName="text-h2 font-bold"
          className="max-w-[432px]"
        />
        <div className="section mx-auto my-[40px] grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-0 md:flex items-center justify-between flex-wrap justify-items-between py-[12px]">
          {sections.map((section, index) => (
            <Card key={index} {...section} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between bg-primary px-[24px] py-[32px] rounded-[12px]">
          <div className="other_courses">
            <Heading
              title="Courses"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              titleClassName="text-h2 font-bold"
              className="max-w-[432px] text-white"
            />
          </div>
          <div className="view_more_button ml-auto">
            <Link href={'/collection'}>
              <Button
                title="View More"
                bgColor="[#FF7F4D]"
                icon={ArrowRight}
                classNameIcon="mr-[8px]"
                className="flex items-center text-white px-[15px] py-[4px]"
              />
            </Link>
          </div>
        </div>
        <div className="my-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
          {collectionList[0].tests.map((test, index) => (
            <PrimaryCard key={index} {...test} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[1200px] bg-white">{id && id[1]}</div>
  )
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  return {
    props: {
      id: params?.id,
    },
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: ['1'] } },
      { params: { id: ['2'] } },
      { params: { id: ['3'] } },
    ],
    fallback: true,
  }
}
export default Test
