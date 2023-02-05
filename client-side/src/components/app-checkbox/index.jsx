const AppCheckbox = ({ id = "", label = "" }) => {
  return (
    <label htmlFor={id} className='space-x-2 inline-block mr-2'>
      <input
        id={id}
        className='rounded border border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 active:text-indigo-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50'
        type='checkbox'
      />
      <span className='text-sm cursor-pointer'>{label}</span>
    </label>
  );
};

export default AppCheckbox;
