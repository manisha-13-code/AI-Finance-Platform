import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'


const DashboardLayout = () => {
  return (
    <div>
        <h1 className='text-6xl font-bold gradient-title ml-6'>Dashboard</h1>
        {/* purpose using suspense that if we are making api call that will show loading indicator */}
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
            <DashboardPage/>
        </Suspense>
    </div>
  )
}

export default DashboardLayout
