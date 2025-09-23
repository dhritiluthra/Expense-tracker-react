import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses }) {
  console.log("Rendering ExpenseForm");
  const [newExpense, setNewExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title." },
      { minLength: 5, message: "Title cannot be more than 5 characters." },
    ],
    category: [{ required: true, message: "Please enter category." }],
    amount: [
      { required: true, message: "Please enter amount." },
      { numeric: true, message: "Only numbers are allowed." },
    ],
    email: [
      { required: true, message: "Please enter email." },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email.",
      },
    ],
  };

  const [errorMsg, setErrorMsg] = useState("");

  const handleOnChange = (e) => {
    setNewExpense((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });

    setErrorMsg({});
  };

  const validate = (formData) => {
    const errors = {};

    Object.entries(formData).forEach(([key, val]) => {
      console.log(key); // key = "title" | "category" | "amount"
      validationConfig[key].some((rule) => {
        if (rule.required && !val.trim()) {
          errors[key] = rule.message;
          return true;
        }
        if (rule.minLength && val.length > rule.minLength) {
          errors[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(val)) {
          console.log(rule.pattern, typeof rule.pattern);
          errors[key] = rule.message;
          return true;
        }
        if (rule.numeric && isNaN(val)) {
          console.log(rule.pattern, typeof rule.pattern);
          errors[key] = rule.message;
          return true;
        }
      });
    });

    setErrorMsg(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAdded = { ...newExpense, id: crypto.randomUUID() };

    if (Object.keys(validate(newExpense)).length === 0) {
      //=> no errors
      setExpenses((prevState) => {
        return [...prevState, newAdded];
      });
      //reset the controlled inputs
      setNewExpense({
        title: "",
        category: "",
        amount: "",
        email: "",
      });
    }
  };

  return (
    <main>
      <h1>Track Your Expense</h1>

      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          name="title"
          value={newExpense.title}
          onChange={handleOnChange}
          error={errorMsg.title}
        />
        <Select
          label={"Category"}
          id={"category"}
          name={"category"}
          onChange={handleOnChange}
          value={newExpense.category}
          error={errorMsg.category}
          options={["Grocery", "Clothes", "Medicine", "Education", "Bills"]}
          placeholder={"Select a Category"}
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={newExpense.amount}
          onChange={handleOnChange}
          error={errorMsg.amount}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          value={newExpense.email}
          onChange={handleOnChange}
          error={errorMsg.email}
        />
        <button className="add-btn button">Add</button>
      </form>
    </main>
  );
}
