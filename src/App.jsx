import { AddExpense } from "./Components/AddExpense";
import { ExpenseTable } from "./Components/ExpenseTable";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  
  return (
    <>
      <main className="min-h-screen flex p-5 gap-4">
        <div className="w-[10%] bg-purple-950"></div>
        <div className="flex flex-col gap-6 w-full">
          <header>
            <h1 className="font-bold font-serif text-4xl mb-1">
              Expense Tracker
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Start taking control of your finances and life. Record, categorize
              and analyze your spending
            </p>
          </header>
          <div className="flex gap-2">
            <AddExpense onAddExpense={handleAddExpense} />
            <ExpenseTable
              expenses={expenses}
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
