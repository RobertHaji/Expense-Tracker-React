import { SearchBar } from "./SearchBar";
export function ExpenseTable({ expenses, searchTerm, onSearch }) { //expenses, searchTerm and onSearch props passed to Expense table
// Filter expense based on description/tiltle matching the search
    const filteredExpenses = expenses.filter(
      (expense) =>
        expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="flex-1 overflow-x-auto">
      <SearchBar value={searchTerm} onChange={onSearch} />
      {/* Expense Table */}
      <table className="w-full table-auto border-collapse mt-3.5">
        <thead className="bg-black text-white rounded-lg">
          <tr>
            <th className="p-2 text-left">Expense</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-4">
                Oops! No expenses found
              </td>
            </tr>
          ) : (
            //   Loop through filtered expenses and render each row
            filteredExpenses.map((expense, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-300" : ""}>
                <td className="p-3">{expense.title}</td>
                <td className="p-3">{expense.description}</td>
                <td className="p-3">{expense.category}</td>
                <td className="p-3">{expense.amount}</td>
                <td className="p-3">{expense.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
