import { useState } from "react";
export function AddExpense({ onAddExpense }) {

    // Form state for capturing input field
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

    
    // update form state on input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    
    // submit handler and pass form data and also reset the form
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default reload
    onAddExpense(form); //pass expense to parent
    setForm({ title: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-600">
      <h2 className="text-xl font-bold mb-2">Add Expense</h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter your expense details below
          </p>
          
          {/* form for adding the expenses */}
      <form onSubmit={handleSubmit} className="border p-2 rounded-xl w-full">
        <input
          className="border p-2 bg-white rounded-full ... mb-2"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Expense title"
          required
        />
        <input
          className="border p-2 bg-white rounded-full ... mb-2"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter expense description"
          required
        />
        <input
          className="border p-2 bg-white rounded-full ... mb-2"
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Enter expense category"
          required
        />
        <input
          className="border p-2 bg-white rounded-full ... mb-2"
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  required
        />
        <input
          className="border p-2 bg-white rounded-full ... mb-2"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
              />
              
              {/* submit button */}
        <button className="w-full bg-purple-700 text-white py-2 hover:bg-purple-800 rounded-3xl">
          Submit
        </button>
      </form>
    </div>
  );
}
