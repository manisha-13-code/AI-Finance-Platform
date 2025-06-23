import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container mx-auto my-32 p-5'>
      {children}
    </div>
  )
}

export default MainLayout
