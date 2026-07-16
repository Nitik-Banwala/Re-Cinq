import React from 'react'
import { MAEQUEE_DATA } from '@/utils/helper'
import Image from 'next/image'
import Icons from './Icons'
const Marquee = () => {
    return (
        <div className='bg-black md:pt-6 -mt-px'>
            <div className='max-w-362 mx-auto w-full flex items-center flex-col '>
                <h2 className='text-white/80 text-xl md:text-2xl tracking-[-2%] leading-121 max-[440px]:max-w-[340.1px] px-4 md:text-start text-center'>Trusted by hundreds of technology leaders from companies like</h2>
                <div className='w-full overflow-hidden'>
                    <div className=' absolute -mt-40 left-0 h-40 z-20'>
                        <Icons icon={'elipsethree'} />
                    </div>
                    <div className=' sm:flex hidden absolute -mt-40 left-0 h-40 z-20'>
                        <Icons icon={'elipsethree'} />
                    </div>
                    <div className=' absolute -mt-40 right-0 h-40 z-20'>
                        <Icons icon={'elipsefour'} />
                    </div>
                    <div className='sm:flex hidden  absolute -mt-40 right-0 h-40 z-20'>
                        <Icons icon={'elipsefour'} />
                    </div>
                    <div className=' absolute w-full h-40 z-20 bg-black/35'>

                    </div>
                    <div className='md:flex flex-row items-center hidden relative z-10 animate-marquee w-full gap-25 mt-9 md:mt-10'>
                        {[...MAEQUEE_DATA, ...MAEQUEE_DATA].map((item, index) => {
                            return (
                                <div key={index} className='shrink-0'>
                                    <Image
                                        src={item}
                                        width={78}
                                        height={73}
                                        alt="slider"
                                        className={` ${index % MAEQUEE_DATA.length === 0 ? "w-[218.1px] h-auto": index % MAEQUEE_DATA.length === 1 ? "w-[78.1px] h-auto": index % MAEQUEE_DATA.length === 2     ? "w-[135.1px] h-auto"   : "w-[200.1px] h-auto" }`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-row items-center md:hidden relative z-10 animate-marquee w-full gap-8 mt-9 '>
                        {[...MAEQUEE_DATA, ...MAEQUEE_DATA].map((item, index) => {
                            return (
                                <div key={index} className='shrink-0'>
                                    <Image
                                        src={item}
                                        width={65}
                                        height={35}
                                        alt="slider"
                                        className={` ${index % MAEQUEE_DATA.length === 0 ? "w-[110.1px] h-auto": index % MAEQUEE_DATA.length === 1 ? "w-[35.1px] h-auto": index % MAEQUEE_DATA.length === 2     ? "w-[65.1px] h-auto"   : "w-[100.1px] h-auto" }`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
