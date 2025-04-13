import { SearchBar } from "./SearchBar";
export function ExpenseTable() {
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
        <tbody></tbody>
      </table>
    </div>
  );
}
