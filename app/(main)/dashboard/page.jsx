import CreateAccountDrawer from '@/components/create-account-drawer'
import { CardContent, Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { getAccounts } from '@/actions/dashboard'
import AccountCard from './_components/account-card'
import React from 'react'
import { getCurrentBudget } from '@/actions/budget'
import BudgetProgress from './_components/budget-progress'

async function DashboardPage() {
     const [accounts] = await Promise.all([
    getAccounts(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

    
  return (
   <div className='px-5 space-y-8'>
    {/* Budget Progress */}
     <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />


    {/* Overview */}
    
    {/* Amount grid */}
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
