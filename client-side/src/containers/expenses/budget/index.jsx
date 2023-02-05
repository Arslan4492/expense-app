import { memo } from "react";
import { Formik } from "formik";
import { schema } from "./budget.schema";
import { useDispatch } from "react-redux";
import { setBudget } from "../../../store/slices/expense";

const Budget = () => {
  const dispatch = useDispatch();

  const handleAmount = (values, actions) => {
    const { resetForm, setSubmitting } = actions;
    dispatch(setBudget(values.total_amount));
    resetForm();
    setSubmitting(false);
  };
  return (
    <div className='bg-white p-4 rounded shadow'>
      <h3 className='text-[#363d55] font-bold mb-3 text-xl'>Budget</h3>
      <Formik
        initialValues={{ total_amount: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          handleAmount(values, actions);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              className='block w-full py-2 px-1 border border-[#d0d0d0] rounded text-[#414a67] outline-none font-normal mb-3'
              type='number'
              id='total-amount'
              placeholder='Enter Total Amount'
              name='total_amount'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.total_amount}
            />
            {errors.total_amount && touched.total_amount && (
              <p className='w-full border-l-4 border-red-600 border-solid text-red-600 text-xs my-2 py-1 pl-2 flex-space justify-between items-center'>
                {errors.total_amount}
              </p>
            )}
            <button
              className='text-base mt-3 bg-[#587ef4] border-none outline-none text-white py-3 px-5 rounded'
              disabled={isSubmitting}
              type='submit'
            >
              Set Budget
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(Budget);
