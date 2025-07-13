import { Route, Routes } from 'react-router'
import MainPage from '../page/MainPage/MainPage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element ={<MainPage />}/>
    </Routes>
  )
}

export default AppRouter