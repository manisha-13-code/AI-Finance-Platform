import { getAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/Data/categories"
import AddTransactionForm from "../_components/transaction-format";


export default async function AddTransactionPage() {
  const accounts = await getAccounts();

  return (
    <div className="max-w-3xl mx-auto px-5 mt-20">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
      />
    </div>
  );
}