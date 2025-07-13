import React from 'react'
import Side_menu from '../Components/Ui/Side_menu'

const AppLayout = ({children}) => {
  return (
    <div className='flex justify-between '>
      <Side_menu/>
      {children}
    </div>
  )
}

export default AppLayout