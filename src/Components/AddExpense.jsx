
export function AddExpense() {


    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-600">
        <h2 className="text-xl font-bold mb-2">Add Expense</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter your expense details below
        </p>
        <input
          className="w-full mb-2 p-2 border rounded-md ..."
          type="text"
          placeholder="Expense title"
        />
        <input
          className="w-full mb-2 p-2 border rounded-md ..."
          type="text"
          placeholder="Enter expense description"
        />
        <input
          className="w-full mb-2 p-2 border rounded-md ..."
          type="text"
          placeholder="Enter expense category"
        />
        <input
          className="w-full mb-2 p-2 border rounded-md ..."
          type="number"
          placeholder="Enter amount"
        />
        <input className="w-full mb-4 p-2 border rounded" type="date" />
        <button className="w-full bg-purple-700 text-white py-2 hover:bg-purple-800 rounded-md ...">
          Submit
        </button>
      </div>
    );
}