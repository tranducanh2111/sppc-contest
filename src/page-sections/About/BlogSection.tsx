import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules'
// Component
import HeadingSection from '@/components/SectionHeader'
// Resources
import Blogs from '@/sample_data/blog.json'
import Blog from '@/components/Blog'

const BlogSection: React.FC = () => {
    return (
        <section>
            <HeadingSection
                headingText='Blog'
                paragraphText='Discover the latest insights, tips, and stories on our blog—your go-to destination for inspiration and knowledge in technology.'
                viewMoreLink='/'
                showFilterBar={false}
            />
            <div className="w-[90%] mx-auto sm:w-[100%] block">
                <Swiper
                    className="my-swiper"
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {Blogs.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <Blog imgSrc={blog.imgSrc} description={blog.description} url={blog.url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BlogSection