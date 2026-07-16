import Image from 'next/image'
import React from 'react'
import Button from './common/Button'

const Hero = () => {
    return (
        <div>
            <div className="bg-[url('/assets/images/png/herobg.png')] px-4 bg-center bg-cover bg-no-repeat w-full md:min-h-[874.1px] min-h-[874.1px] min-[468px]:min-h-[824.1px] lg:min-h-[924.1px]">
                <div className='max-w-[654.1px] w-full mx-auto flex items-center flex-col justify-center'>
                    <div className='md:mt-[191.1px] mt-[160.1px] flex items-center flex-col justify-center'>
                        <Image src={'/assets/images/png/hub2.png'} width={191} height={29} alt='hub' />
                        <h1 className='mt-3.5 md:text-65 text-50 min-[440px]:flex hidden text-white text-center leading-126'> The Community for the AI <br /> Native Era</h1>
                        <h1 className='mt-3.5 md:text-65 text-50 min-[440px]:hidden flex text-white text-center leading-126'> The Community for the AI <br /> Native Era</h1>
                        <p className='md:mt-4.5 mt-4 text-sm md:text-base font-normal leading-157 text-center max-[440px]:max-w-[346.1px] text-white'>Join leaders navigating the shift from Cloud Native to AI Native. Access the shared language, historical context, and patterns to lead with certainty.</p>
                        <div className='mt-7.25 flex flex-row gap-3.25 md:gap-4'>
                            <Button className='md:px-10.5 px-4 min-[405px]:px-6.5 py-2.5 md:py-3.5'>
                                Explore the Book
                            </Button>
                            <Button variant="outline" className='md:px-9 py-2.5 md:py-3.5 px-4 min-[405px]:px-6.5'>
                                Explore the Patterns
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
