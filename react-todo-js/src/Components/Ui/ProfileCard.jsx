

const ProfileCard = () => {
  return (
    <div class="m-10 max-w-xg">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img class="mx-auto h-auto w-full rounded-full" src="/img/profile.jpg"alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">정용준</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Front-End Developer.</h3>
    <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">안녕하세요 프론트엔드 개발자 정용준 입니다.<br/>"코드를 통해 아이디어를 현실로 만드는 일에 가치를 둡니다."</p>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Email</span>
        <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">wjddydwns159@gmail.com</span></span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Age</span>
        <span class="ml-auto">Feb 22, 2001 (만24세)</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Language</span>
        <span class="ml-auto">Korean, Japanase, English</span>
      </li>
    </ul>
  </div>
</div>

  )
}

export default ProfileCard