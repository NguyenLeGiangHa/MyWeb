// data
import Link from 'next/link';
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/C06_1.png',
          link:'https://webex-chap06-1-8dfw.onrender.com/'
        },
        {
          title: 'title',
          path: '/C06_2.png',
          link:'https://webex-chap06-2.onrender.com/'
        },
        {
          title: 'title',
          path: '/C07_1&2.png',
          link:'https://webex-chap07-1and2.onrender.com/'
        },
        {
          title: 'title',
          path: '/C07_3.png',
          link:'https://webex-chap07-3-kjo2.onrender.com/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

//import swiper react components
import {Swiper, SwiperSlide} from "swiper/react";
//import swiper styles

//next image
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper';
//icons
import {BsArrowRight} from 'react-icons/bs';

const WorkSlider = () => {
  return (
        <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='h-[280px] sm:h-[480px]'
        >
          {workSlider.slides.map((slide, index) => {
            return (
                <SwiperSlide key={index}>
                    <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                      {slide.images.map((image, index) => {
                        return (
                            <Link className='relative rounded-lg overflow-hidden flex items-center
                            justify-center group'
                            key={index}>
                              href={image.link}
                              passHref={true}
                          <div className='flex items-center justify-center relative overflow-hidden group'>
                          {/*  images*/}
                            <Image
                            src={image.path}
                            width={500}
                            height={300}
                            alt=''
                            />
                          {/* overlay gradient*/}
                            <div className='absolute inset-0 bg-gradient-to-l
                            from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                            group-hover:opacity-80 transition-all duration-700'>
                            {/* title */}
                              <div className='absolute bottom-0 translate-y-full
                              group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                              transition-all duration-300'>
                                <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                {/*  title part 1*/}
                                  <div className='delay-100'>

                                  </div>
                                  {/*  title part 2*/}
                                  <div className='translate-y-[500%] group-hover:translate-y-0
                                  transition-all duration-300 delay-150'>PROJECT</div>
                                  {/* icon*/}
                                  <div className='text-xl translate-y-[500%]
                                  group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                    <BsArrowRight />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        );
                      })}
                    </div>
                </SwiperSlide>
            );
          })}
        </Swiper>
  );
};

export default WorkSlider;
