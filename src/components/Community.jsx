import Image from "next/image";
import React from 'react'

const Community = () => {
  return (
    <div>
      <section className=" bg-black px-4 max-[440px]:pt-50 max-[440px]:mt-0 -mt-5">
            <div className="bg-[url('/assets/images/png/communitybg.webp')] px-3 bg-cover bg-center rounded-b-2xl md:min-h-161 min-h-111 max-[500px]:min-h-121 max-w-7xl mx-auto md:pt-60 sm:pt-30 pt-25">
                <div className="max-w-222 mx-auto flex flex-col justify-center items-center ">
                    <div >
                        <Image
                            className="max-w-27.75 h-7.25 cursor-pointer hover:scale-110 duration-300 transition-all"
                            width={111}
                            height={29}
                            src="/assets/images/png/works.png"
                            alt="button"
                        />
                    </div>

                    <h1 className="font-normal lg:text-50 md:text-44 text-40  tracking-[-2%] text-white sm:leading-130 leading-120 sm:mt-3.25 mt-3 text-center">
                        Ready to Navigate the Next <span className="bg-[linear-gradient(90deg,#FFFFFF_44%,#B46EFA_100%)] bg-clip-text text-transparent">Wave?</span> 
                    </h1>
                    <p className="font-normal lg:text-base md:text-15 sm:text-sm text-white md:leading-157 leading-120 sm:mt-5 mt-6 text-center">
                        Join a community built for technology leaders by hands-on
                        practitioners. Get direct access to our expert insights, monthly
                        reports, podcast, and the strategic tools we use to guide the
                        world’s leading companies.
                    </p>
                    <div className="bg-[url('/assets/images/png/community.png')] md:max-w-51 max-w-46.75 w-full opacity-80 flex items-center justify-center md:h-12.75 h-10.75 hover:scale-110 duration-300 transition-all cursor-pointer sm:mt-7.5 mt-6  bg-no-repeat bg-center bg-contain">
                        <h2 className="text-base font-normal leading-119 text-white">Join the Community</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Community
