import { useState } from "react";
export function AddExpense(addExpense) {


    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-600">
        <h2 className="text-xl font-bold mb-2">Add Expense</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter your expense details below
        </p>
        <form action="" className="border p-2 rounded-xl w-full">
          <input
            className="border p-2 bg-white rounded-full ... mb-2"
            type="text"
            placeholder="Expense title"
          />
          <input
            className="border p-2 bg-white rounded-full ... mb-2"
            type="text"
            placeholder="Enter expense description"
          />
          <input
            className="border p-2 bg-white rounded-full ... mb-2"
            type="text"
            placeholder="Enter expense category"
          />
          <input
            className="border p-2 bg-white rounded-full ... mb-2"
            type="number"
            placeholder="Enter amount"
          />
          <input className="border p-2 bg-white rounded-full ..." type="date" />
          <button className="w-full bg-purple-700 text-white py-2 hover:bg-purple-800 rounded-md ...">
            Submit
          </button>
        </form>
      </div>
    );
}