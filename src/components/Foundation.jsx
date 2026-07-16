import Image from 'next/image'
import React from 'react'
import Button from './common/Button'

const Foundation = () => {
    return (
        <div>
            <div className=" bg-black -mt-px sm:px-4 ">
                <div className="bg-[url('/assets/images/png/writersbg.png')] max-w-[1280.1px] w-full mx-auto pt-15 sm:pt-30 md:pt-40 lg:pt-51.25 bg-center bg-no-repeat bg-cover ">
                    <div className='flex w-full items-center lg:flex-row flex-col max-[1025px]:justify-between gap-4 min-[1050px]:gap-10 min-[1103px]:gap-21'>
                        <Image src={'/assets/images/png/books.png'}
                            width={575}
                            height={539}
                            alt='books' className='min-[1060px]:max-w-[575.1px] max-w-[575.1px] lg:max-w-[535.1px] w-full ' />
                        <div className='flex flex-col sm:px-0 px-4 sm:items-center sm:text-center lg:text-start lg:items-start'>
                            <div className="min-[470px]:flex hidden bg-[url('/assets/images/png/innovationbutton.png')] bg-no-repeat bg-cover bg-center w-[443.1px] min-h-7.5 flex-row items-center justify-center ">
                                <p className='text-white text-xs min-[1060px]:text-sm font-normal leading-144'>From Cloud Native to AI Native: Catching the next wave of innovation</p>
                            </div>
                            <Image src={'/assets/images/png/smallinovation.png'}
                            width={310}
                            height={52}
                            alt='inovation' className='min-[470px]:hidden flex'/>
                            <h2 className='lg:max-w-[504.1px] w-full max-[440px]:max-w-[340.1px] text-40 md:text-50 text-white leading-120 mt-3.25'>The Foundation of Our  <span className="bg-[linear-gradient(90deg,#FFFFFF_44%,#B78DE0_100%)] bg-clip-text text-transparent">Community</span> </h2>
                            <p className='lg:max-w-[504.1px] max-w-200 max-[440px]:max-w-[380.1px] text-white/80 mt-6.25 text-sm md:text-base font-normal leading-156'>Our book is the intellectual core that unifies this entire community. It provides the foundational frameworks and shared language that connect our podcast insights, transformation patterns, and strategic assessments into a single, cohesive system for mastering the AI Native wave. We recommend every leader start here.</p>
                            <div className='mt-10 flex flex-row gap-4'>
                                <Button className='md:px-10.5 px-4 min-[405px]:px-6.5 py-2.5 md:py-3.5'>
                                    Explore the Book
                                </Button>
                                <Button variant="outline" className='md:px-10.5 px-4 min-[405px]:px-6.5 py-2.5 md:py-3.5'>
                                    Explore the Patterns
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foundation
