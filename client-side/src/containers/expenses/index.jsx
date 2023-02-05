import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getAllExpense } from "../../http-services/expenses";
import Budget from "./budget";
import List from "./list";
import Output from "./output";

const Expenses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [expenseList, setExpenseList] = useState([]);
  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  // const handleSubmit = () => {
  //   getAllExpense({
  //     id: user._id,
  //     cbSuccess: ({ allExpense }) => {
  //       setExpenseList(allExpense);
  //     },
  //     cbFailure: (error) => {
  //       toast.error(error);
  //     },
  //   });
  // };
  return (
    <div className='flex items-center justify-center'>
      <div className='w-11/12 max-w-3xl flex flex-col'>
        <div className='grid grid-cols-2 my-4 gap-8'>
          <Budget />
          <Output />
        </div>
        <List />
      </div>
    </div>
  );
};

export default Expenses;
