import { AddExpense } from "./Components/AddExpense"; //component to add a new expense
import { ExpenseTable } from "./Components/ExpenseTable"; //component to display expense table
import { useState } from "react"; //manage state
function App() {
  const [expenses, setExpenses] = useState([]); //state to store all the expenses
  const [searchTerm, setSearchTerm] = useState(""); //state to store search input

  //Function adding new expense to the list
  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]); //Append new expense in existing list
  };

  // Function to remove expenses from the list

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <main className="min-h-screen flex p-0 gap-4 border-50 border-purple-900">
        <div className="w-[10%] bg-purple-900"></div>
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

          {/* Add expense form and expense table */}
          <div className="flex gap-2">
            <AddExpense onAddExpense={handleAddExpense} />
            {/*onAddExpense prop allowing AddExpense form to send data back up to the App component to update the expense list. */}
            <ExpenseTable
              expenses={expenses}
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
              onDeleteExpense={handleDeleteExpense}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
