import React from 'react'
import Contact from './Contact'
import ProfileCard from './ProfileCard'

const Hero = () => {
  return (
        <section>
  <div class="max-w-screen-xs px-4 py-12 sm:px-6 lg:px-12 border-b-2 ">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div class="max-w-lg md:max-w-none">
          <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl">
           Ohla ! I'm yongjoon <br/>I'm a Front-End Dev
          </h2>

          <p class="mt-4 text-gray-700">
소프트웨어 및 인공지능, 컴퓨터 공학을 전공하며 다양한 사이드 프로젝트를 통해 경험을 쌓았습니다.

Next.js와 React.js를 활용한 웹사이트 구축 역량을 보유하고 있으며, 프론트엔드 개발자로서 사용자 경험(UX)을 개선하는 데 큰 관심이 있습니다.

          </p>
          <Contact/>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <ProfileCard/>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero