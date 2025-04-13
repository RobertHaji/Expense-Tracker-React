import { SearchBar } from "./SearchBar";
export function ExpenseTable({ expenses, searchTerm, onSearch }) {

    const filteredExpenses = expenses.filter(
      (expense) =>
        expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="flex-1 overflow-x-auto">
      <SearchBar />
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
                No expenses found
              </td>
            </tr>
          ) : (
            filteredExpenses.map((expense, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="p-2">{expense.title}</td>
                <td className="p-2">{expense.description}</td>
                <td className="p-2">{expense.category}</td>
                <td className="p-2">{expense.amount}</td>
                <td className="p-2">{expense.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
