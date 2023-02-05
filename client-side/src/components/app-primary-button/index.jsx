const PrimaryButton = ({ type, children, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex items-center justify-center space-x-3 transition-all duration-300 px-2 w-full font-medium py-3 ${
        disabled ? "cursor-not-allowed bg-indigo-800" : "bg-indigo-600"
      } text-white text-sm rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
