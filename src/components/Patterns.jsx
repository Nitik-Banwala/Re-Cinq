import Image from 'next/image'
import React from 'react'

const Patterns = () => {
    return (
        <div className=' bg-black pb-25 min-[768px]:pb-[150.1px] sm:px-4 '>
            <div className='max-w-[1163.1px] gap-4 w-full flex min-[966px]:flex-row max-[641px]:text-start flex-col max-[966px]:text-center items-center justify-between mx-auto min-[440px]:mt-[-228.1px] mt-[-178.1px] min-[1025px]:mt-[-152.1px]'>
                <div className='flex sm:px-0 px-4 flex-col  max-[966px]:items-center max-[641px]:items-start '>
                    <Image
                        src={'/assets/images/png/waves.png'}
                        width={204}
                        height={29}
                        alt='waves' />
                    <p className='md:text-50 text-40 mt-3 md:mt-3.25 tracking-[-2%] leading-120 min-[440px]:max-w-150 max-w-[300.1px] min-[966px]:max-w-100 text-white '>Don't Predict the Future. Map It With   <span className="bg-[linear-gradient(90deg,#FFFFFF_4%,#A96DDE_100%)] bg-clip-text text-transparent">Patterns.</span></p>
                    <p className='md:mt-6.25 mt-5.75 min-[440px]:max-w-[467.1px] max-w-95 text-white/80 md:text-base text-sm leading-157'>Waves of Innovation is a living system of insights, rooted in historical evidence, built to help leaders understand how technology, human behavior, and organizational change evolve together.</p>
                    <p className='mt-5 text-white/80 max-w-md md:text-base text-sm leading-157'>Each Wave captures patterns, disruptions, and opportunities—giving you the clarity needed to plan, adapt, and make informed decisions in an environment that never stops moving.</p>
                </div>
                <Image src={'/assets/images/png/univerc.png' } width={600} height={480} alt='modals' className='min-[768px]:mt-0 mt-10 xl:max-w-[600.1px] min-[966px]:max-w-[550.1px]'/>
            </div>
        </div>
    )
}

export default Patterns
