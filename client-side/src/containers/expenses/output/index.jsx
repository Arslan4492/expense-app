import React from "react";
import { useSelector } from "react-redux";

const Output = () => {
  const { budget, expenses } = useSelector((state) => state.expense);
  const calculateBalance = () => {
    let balance = 0;
    if (budget && expenses) {
      balance = budget - expenses;
    }
    return balance;
  };
  return (
    <div className='bg-[#587ef4] text-white rounded shadow p-4 h-full'>
      <div>
        <h3 className='text-white font-bold text-xl'>Total Budget</h3>
        <span id='amount'>{budget ? budget : 0}</span>
      </div>
      <div>
        <p className='text-white font-bold text-xl'>Expenses</p>
        <span id='expenditure-value'>{expenses ? expenses : 0}</span>
      </div>
      <div>
        <p className='text-white font-bold text-xl'>Balance</p>
        <span id='balance-amount'>{calculateBalance()}</span>
      </div>
    </div>
  );
};

export default Output;
