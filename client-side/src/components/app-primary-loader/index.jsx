const AppPrimaryLoader = ({ size = null, color = null, className = "" }) => {
  let newSize = "h-5 w-5";
  let newColor = "text-white";

  switch (color) {
    case "yellow":
      newColor = "text-yellow-500";
      break;
    case "orange":
      newColor = "text-orange-500";
      break;
    case "green":
      newColor = "text-green-500";
      break;
    case "blue":
      newColor = "text-blue-500";
      break;
    case "indigo":
      newColor = "text-indigo-500";
      break;
    case "pink":
      newColor = "text-pink-500";
      break;
    case "purple":
      newColor = "text-purple-500";
      break;
    case "red":
      newColor = "text-red-500";
      break;
    case "black":
      newColor = "text-gray-700";
      break;
    case "white":
      newColor = "text-white";
      break;
    default:
      newColor = "text-gray-700";
      break;
  }

  switch (size) {
    case "sm":
      newSize = "h-4 w-4";
      break;
    case "md":
      newSize = "h-5 w-5";
      break;
    case "lg":
      newSize = "h-8 w-8";
      break;
    case "xl":
      newSize = "h-10 w-10";
      break;
    case "2xl":
      newSize = "h-12 w-12";
      break;
    case "3xl":
      newSize = "h-16 w-16";
      break;
    default:
      break;
  }

  return (
    <svg
      className={`animate-spin ${newColor} ${newSize} ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  );
};

export default AppPrimaryLoader;
