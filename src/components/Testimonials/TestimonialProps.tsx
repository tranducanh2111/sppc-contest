import { StaticImageData } from 'next/image';

export interface TestimonialProps {
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
}