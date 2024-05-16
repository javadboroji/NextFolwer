"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import '@/app/Components/SliderFullWidth/style.css'
function SliderFullWidth({data}) {
  return (
    <Swiper dir={'rtl'} navigation={true} modules={[Navigation]} className="mySwiper swiper-full  mb-3">
        {data?.map((slide)=>  
         <SwiperSlide key={slide.id}> 
          <div className='slider-box'>
            <Image src={slide.src} loading='eager'   quality={50} alt={'slider'} className='filter slider-filter'/>
            <div className='absolute p-5 z-10 jb-top-center' style={{right:'8rem'}}>
              <p className='text-stone-100   p-2 lg:p-5 text-2xl lg:text-4xl lg:font-semibold text-anmation-global'> {slide.title}</p>
              <p className='text-stone-50   p-2 p-lg-3  text-1xl text-anmation-global'> {slide.subTitle}</p>
              <button className=' banner-slider-btn relative py-5 my-4 px-12 lg:py-6 lg:px-24 mx-2 text-sm lg:text-1xl lg:font-bold rounded-xl text-stone-100 btn-golbal'>
                <span className={'absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10'}>مشاهده</span>
              </button>
            </div>
          </div>
        </SwiperSlide>)
     }
     
    </Swiper>
  )
}

export default SliderFullWidth