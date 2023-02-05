import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { AppPrimaryButton, AppPrimaryLoader } from "../../components";
import { addExpense } from "../../http-services/expenses";
import { schema } from "./dashboard.schema";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading state with false
  const { user } = useSelector((state) => state.user); // Destructure user from redux state

  // submit handler function
  const handleSubmit = (values, actions) => {
    const { setSubmitting, resetForm } = actions; // Destructure setSubmitting, resetForm from actions
    setIsLoading(true); // Set isLoading to true
    addExpense({
      values: { ...values, userId: user._id }, // call addExpense service with userId and values
      cbSuccess: (data) => {
        resetForm(); // Call resetForm function
        toast.success(data.message); // Show success message
        setSubmitting(false); // Set isSubmitting to false
        setIsLoading(false); // Set isLoading to false
      },
      cbFailure: (error) => {
        // Error handler
        toast.error(error); // Show error message
        setIsLoading(false); // Set isLoading to false
      },
    });
  };
  return (
    <div className='h-full flex items-center justify-center'>
      <div>
        <h1 className='mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono'>
          Expense FORM<span className='text-sm text-indigo-600'>form showcase</span>
        </h1>
        <Formik
          initialValues={{ date: "", itemName: "", price: "" }} // Initialize Formik with initial values
          validationSchema={schema} // Specify validationSchema
          onSubmit={(values, actions) => {
            // Submit handler
            handleSubmit(values, actions);
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
            <form
              onSubmit={handleSubmit}
              className='grid max-w-3xl gap-2 py-10 px-8 bg-white rounded-md border-t-4 border-indigo-600'
            >
              <div className='bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner'>
                <input
                  type='date'
                  name='date'
                  id='date'
                  onChange={handleChange}
                  value={values.date}
                  className='peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0'
                  placeholder='First name'
                />
                <label
                  htmlFor='date'
                  className='block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0'
                >
                  Today date
                </label>
                {errors.date && <p className='text-red-400 text-sm mt-0.5'>{errors.date}</p>}
              </div>
              <div className='grid'>
                <div className='bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner'>
                  <input
                    type='text'
                    name='itemName'
                    id='itemName'
                    onChange={handleChange}
                    value={values.itemName}
                    className='peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0'
                    placeholder='Item name'
                  />
                  <label
                    htmlFor='itemName'
                    className='block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0'
                  >
                    Item Name
                  </label>
                  {errors.itemName && <p className='text-red-400 text-sm mt-0.5'>{errors.itemName}</p>}
                </div>
              </div>
              <div className='grid'>
                <div className='bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner'>
                  <input
                    type='number'
                    name='price'
                    id='price'
                    onChange={handleChange}
                    value={values.price}
                    className='peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0' // Number input
                    placeholder='price'
                  />
                  <label
                    htmlFor='price'
                    className='block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0'
                  >
                    Price
                  </label>
                  {errors.price && <p className='text-red-400 text-sm mt-0.5'>{errors.price}</p>}
                </div>
              </div>
              <AppPrimaryButton type='submit' disabled={false}>
                {isLoading && <AppPrimaryLoader color={"white"} />}
                <span>submit</span>
              </AppPrimaryButton>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Dashboard;
