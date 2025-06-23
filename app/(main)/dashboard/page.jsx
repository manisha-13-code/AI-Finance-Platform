import CreateAccountDrawer from '@/components/create-account-drawer'
import { CardContent, Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { getAccounts } from '@/actions/dashboard'
import AccountCard from './_components/account-card'
import React from 'react'

async function DashboardPage() {
    const accounts = await getAccounts()
  return (
   <div className='px-5'>
    {/* Budget Progress */}
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <CreateAccountDrawer>
            <Card className='hover:shadow-md transition-shadow cursor-pointer border-dashed'>
                <CardContent className='flex flex-col items-center justify-center text-text-muted-foreground h-full pt-5'>
                    <Plus className='h-10 w-10 mb-2'/>
                    <p className='text-sm font-medium'>Add new Account</p>
                </CardContent>
            </Card>
        </CreateAccountDrawer>

       {accounts.length > 0 &&
          accounts?.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
    </div> 
    {/* Overview */}
   </div>
  )
}

export default DashboardPage
