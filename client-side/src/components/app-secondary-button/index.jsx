const AppSecondaryButton = ({ type = "button", disabled = false, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className='transition-all duration-300 px-2 border py-3 rounded-md border-gray-300 w-full flex justify-center items-center space-x-2 hover:bg-gray-300'
    >
      {children}
    </button>
  );
};

export default AppSecondaryButton;
