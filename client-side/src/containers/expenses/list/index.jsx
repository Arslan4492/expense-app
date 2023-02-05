import { memo } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchById, sumNumbers } from "../../../utils";
import { setExpense } from "../../../store/slices/expense";

const List = () => {
  const { user } = useSelector((state) => state.user);
  const { isLoading, error, data } = useQuery(["expenseList", user._id], () => fetchById(user._id));
  const dispatch = useDispatch();

  if (error)
    return (
      <p className='font-bold text-[#363d55] col-span-3 text-lg capitalize my-4'>
        'An error has occurred: ' + {error.message}
      </p>
    );
  if (data) {
    let expense = data.data.allExpense;
    dispatch(setExpense(sumNumbers(expense)));
  }

  return (
    <div className='bg-white py-8 px-5 shadow rounded'>
      <h3 className='text-[#363d55] font-bold text-xl'>Expense List</h3>
      {isLoading && <p className='font-bold text-[#363d55] col-span-3 text-lg capitalize my-4'>Loading...</p>}
      {data
        ? data.data.allExpense.map((item) => (
            <div className='list-container' id='list' key={item._id}>
              <div className='grid grid-cols-7 w-full border-l-4 border-[#587ef4] border-solid my-2 py-1 pl-2 flex-space justify-between items-center'>
                <p className='font-bold text-[#363d55] col-span-3 text-lg capitalize'>{item.itemName}</p>
                <p className='text-[#414a67] col-span-2 text-base'>{item.price}</p>
                <i
                  className='fa fa-pencil-square-o col-span-1 cursor-pointer text-[#587ef4] fa-lg'
                  aria-hidden='true'
                ></i>
                <i
                  className='fa fa-trash col-span-1  cursor-pointer text-[#587ef4] fa-lg'
                  aria-hidden='true'
                ></i>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default memo(List);
