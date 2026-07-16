import Image from "next/image";
import React from "react";

const Writers = () => {
    return (
        <section className="bg-black px-4 pt-24 min-[768px]:pt-[140.1px] -mt-px">
            <div className="bg-[url('/assets/images/png/writersbg.png')] bg-center bg-cover max-w-304 mx-auto h-113 min-[768px]:pt-9">
                <div className="max-w-167 mx-auto flex flex-col justify-center items-center">
                    <div className="flex  gap-7 text-center">
                        <div>
                            <Image
                                className="w-[114.71px] h-[128.34px]"
                                width={114.71}
                                height={128.34}
                                src="/assets/images/png/writerfirst.png"
                                alt="Pini Reznik"
                            />
                            <h2 className="text-base font-normal text-white opacity-80 mt-2.5 leading-156 ">
                                Pini Reznik
                            </h2>
                        </div>
                        <div>
                            <Image
                                className="w-[114.71px] h-[128.34px]"
                                width={114.71}
                                height={128.34}
                                src="/assets/images/png/writersecond.png"
                                alt="Michael Müller"
                            />
                            <h2 className="text-base font-normal text-white opacity-80  mt-2.5 leading-156">
                                Pini Reznik
                            </h2>
                        </div>
                    </div>
                    <h1 className="font-normal lg:text-50 md:text-44 max-[440.1px]:max-w-[250.1px] text-40 tracking-[-2%] text-white sm:leading-130 leading-120 sm:mt-1.5 mt-6.75 text-center">
                        A Note From The   <span className="bg-[linear-gradient(90deg,#FFFFFF_44%,#B78DE0_100%)] bg-clip-text text-transparent">Writers</span>
                    </h1>
                    <p className="font-normal max-[440px]:hidden flex lg:text-base md:text-15 sm:text-sm opacity-80 text-white md:leading-157 leading-130 mt-6  text-center">
                        “Having navigated the Cloud Native wave, the shift to AI Native
                        feels familiar. We have seen firsthand
                    </p>
                    <p className="font-normal max-[440px]:hidden flex lg:text-base md:text-15 sm:text-sm opacity-80 text-white md:leading-157 leading-130 text-center">
                        the predictable patterns that
                        lead to costly mistakes and stalled projects.
                    </p>
                    <p className="font-normal max-[440px]:hidden flex lg:text-base md:text-15 sm:text-sm opacity-80 text-white md:leading-157 leading-130 text-center">

                        We created this
                        ecosystem to share those hard-won lessons. Whether you are reading
                        the book, using the patterns, or taking the assessment, our goal is
                        to give you a pragmatic playbook to make the right architectural
                        decisions.” Pini Reznik Michael Müller
                    </p>
                    <p className="font-normal max-[440px]:flex hidden max-[440px]:max-w-[364.1px]  lg:text-base mt-6 md:text-15 text-sm opacity-80 text-white md:leading-157 leading-130 text-center">

                        “Having navigated the Cloud Native wave, the shift to AI Native feels familiar. We have seen firsthand the predictable patterns that lead to costly mistakes and stalled projects. <br />We created this ecosystem to share those hard-won lessons. Whether you are reading the book, using the patterns, or taking the assessment, our goal is to give you a pragmatic playbook to make the right architectural decisions.”
                    </p>

                    <div className="sm:mt-2 mt-4 flex flex-row gap-2 items-center">
                        <h2 className="text-base font-medium leading-157 italic text-white">
                            Pini Reznik
                        </h2>
                        <span>
                            <svg
                                width="1"
                                height="21"
                                viewBox="0 0 1 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="0.5"
                                    y1="21"
                                    x2="0.499999"
                                    y2="2.18557e-08"
                                    stroke="url(#paint0_linear_258_427)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_258_427"
                                        x1="1.5"
                                        y1="-2.18557e-08"
                                        x2="1.5"
                                        y2="21"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" stop-opacity="0" />
                                        <stop offset="0.5" stop-color="white" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <h2 className="text-base font-medium leading-157 italic text-white">
                            Michael Müller
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Writers;