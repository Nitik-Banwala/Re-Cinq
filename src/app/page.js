import Marquee from '@/components/common/Marquee'
import Community from '@/components/Community'
import Ecosystem from '@/components/Ecosystem'
import Foundation from '@/components/Foundation'
import Hero from '@/components/Hero'
import Patterns from '@/components/Patterns'
import Writers from '@/components/Writers'

import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <Patterns/>
            <Ecosystem/>
            <Marquee/>
            <Foundation/>
            <Writers/>
           <Community/>
        </div>
    )
}

export default page
