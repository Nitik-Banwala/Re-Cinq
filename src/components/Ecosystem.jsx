import Image from 'next/image'
import React from 'react'
import { ECPOSYSTEM_DATA } from '@/utils/helper'
import Icons from './common/Icons'
import Button from './common/Button'


const Ecosystem = () => {
    return (
        <div className='bg-black -mt-1 px-4 pb-15 md:pb-[125.1px]'>
            <div className='max-w-[1287.1px] mx-auto w-full '>
                <div className="min-h-[172.1px] w-full bg-[url('/assets/images/png/ecosystembg.png')] flex-col flex items-center justify-center bg-center bg-cover bg-no-repeat">
                    <Image src={'/assets/images/png/inovation.png'} width={150} height={29} alt='inovation' />
                    <h2 className='max-w-150 text-white mt-3.25 text-40 md:text-50 text-center leading-130 '>Explore the Waves of Innovation <span className="bg-[linear-gradient(90deg,#FFFFFF_34%,#C5A5E6_100%)] bg-clip-text text-transparent">Ecosystem</span></h2>
                </div>
                <div className=' md:mt-15 mt-10 flex flex-row flex-wrap gap-5 justify-center'>
                    {ECPOSYSTEM_DATA.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className=' group relative!'>
                                    <div className="absolute hidden group-hover:flex duration-500 rounded-[20px] overflow-hidden">
                                        <Icons icon="elipsetwo" />
                                    </div>
                                    <div className='md:w-[413.1px] w-[350.1px] min-[405px]:w-[389.1px] flex justify-between flex-col p-5 h-auto min-[405px]:h-[350.1px] md:h-[388.1px] rounded-[20px] bg-white/3 border border-white/12'>
                                        <div className='mt-3 ml-3 w-fit relative z-10  '>
                                            <Icons icon={item.icon} />
                                        </div>
                                        <div className='w-7 absolute bg-transparent z-0 mt-4 ml-2 group-hover:shadow-[20px_20px_64px_20px_#8E2EE0]'></div>
                                        <div>
                                            <p className={`${index === 0 ? "mt-5" : "mt-9.5"} ml-3 text-white text-2xl md:text-28 leading-120 tracking-[-2%]`}>{item.title}</p>
                                            <p className='mt-4 ml-3 text-white/70 max-w-[350.1px] text-sm md:text-base leading-144 font-normal'>{item.description}</p>
                                            <Button variant="outline" className='w-full py-3.5 max-[767.1px]:max-w-[341.1px] mt-6.25'>
                                                {item.cta}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ecosystem
