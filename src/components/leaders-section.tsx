"use client"


import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Image from 'next/image';


const Leaders = [
    {
        name: 'Mohamad Hagras',
        image: '',
        season: ''
    },
    {
        name: 'Ahmad Gamal',
        image: '',
        season: ''
    },
    {
        name: 'Abd Alhameed Mohamad',
        image: '',
        season: ''
    },
    {
        name: 'Hasan Badr',
        image: '',
        season: ''
    },
    {
        name: 'Ameen Ali',
        image: '',
        season: ''
    },
    {
        name: 'Osama Aaon',
        image: '',
        season: ''
    },
    {
        name: 'Mohamad Elshennawy',
        image: '',
        season: ''
    },
    {
        name: 'Mohamad Ayman',
        image: '/mohamad_ayman.jpg',
        season: ''
    },
    {
        name: 'Ahmad Hussien',
        image: '',
        season: ''
    },
    {
        name: 'Khaled Mahmoud',
        image: '',
        season: ''
    },
    {
        name: 'Mostafa Mahmoud',
        image: '/mostafa_mahmoud.jpg',
        season: ''
    },
    {
        name: 'Hussien Nofal',
        image: '/hussien.jpg',
        season: ''
    },
    {
        name: 'Yousef Eltarawy',
        image: '/tarawy.jpg',
        season: ''
    },
    {
        name: 'Ahmad Ali',
        image: '/ahmad_ali.jpg',
        season: 'Current'
    }
]


export default function LeadersSection() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
        
    }, [])

    return(
        <div className="text-center py-10">
            <h2 className='text-3xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6'> <strong className="text-[#d87016]">ESME</strong>aders Over The Years. </h2>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-11/12"
                centeredSlides={true}
                slidesPerView={windowWidth > 500 ? 3 : 1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {Leaders.map((leader, i) => (
                    <SwiperSlide key={i} className='rounded-xl overflow-hidden mb-10'>
                        <div className='flex flex-col' style={{maxHeight: '500px'}}>
                            <div className='w-full flex items-center justify-center' style={{maxHeight: '400px'}}>
                                <Image width={300} height={400} className='w-full h-full object-contain' src={leader.image || '/leader_placeholder.webp'} alt="" ></Image>
                            </div>
                            <div className='bg-slate-950 dark:bg-[#d87016] w-full flex flex-col items-center pb-3 rounded-b-xl gap-2 justify-center font-bold'>
                                <h1 className="text-[#d87016] dark:text-slate-950 text-xl md:text-2xl italic">Mr/ {leader.name} </h1>
                                <h2 className="text-white text-lg md:text-xl"> {leader.season} </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}