import { useState } from "react";
import { sls } from "../../utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiBeaker } from "react-icons/hi2";
import { useSelector } from "react-redux";

export const headerData = [
  { id: 1, title: "home", pathName: "/", icon: "h-square" },
  { id: 2, title: "expense", pathName: "/expenses", icon: "snowflake-o" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = async () => {
    try {
      sls.remove("expense-token");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className='relative flex-initial'>
      <div className='bg-white'>
        <div className='2xl:container 2xl:mx-auto'>
          <nav>
            <div className='flex flex-row justify-between'>
              <Link to='/' className=' flex space-x-3 items-center lg:pl-7 sm:pl-6 py-6 pl-4 pr-8'>
                <HiBeaker className='w-9 h-9 md:w-12 md:h-12 text-indigo-600' />
                <h1 className='inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]'>
                  Rock<span className='font-[300]'>star</span>
                </h1>
              </Link>
              {/* For large (i.e. desktop and laptop sized screen) */}
              <div className='lg:flex hidden flex-auto justify-between flex-row px-7 border-l border-r border-gray-200 py-6'>
                <div>
                  <p className=' font-normal text-xs leading-3 text-gray-600'>Hi {user.username}</p>
                  <h3 className=' font-bold text-xl leading-5 text-gray-800 mt-2'>Welcome Back</h3>
                </div>
                <ul className='flex flex-row space-x-2'>
                  {headerData.map((item) => (
                    <li className='py-3' key={item.id}>
                      <Link
                        className={`px-4 py-3 rounded uppercase cursor-pointer hover:bg-gray-50 ${
                          location.pathname === item.pathName ? "bg-gray-100" : "bg-white"
                        }`}
                        to={item.pathName}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=' hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8'>
                <div className=' flex justify-center items-center flex-row'>
                  <img
                    className='w-10 h-10 '
                    src='https://i.ibb.co/QMddNDb/Ellipse-14.png'
                    alt='_individual'
                  />
                  <div className='ml-2'>
                    <p className='text-lg leading-4 font-semibold text-gray-800'>{user.username}</p>
                    <p className=' font-normal text-xs leading-3 text-gray-600 mt-1'>{user.email}</p>
                  </div>
                  <svg
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                    className={`${
                      showMenu ? "rotate-180" : ""
                    } cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`}
                    width={14}
                    height={8}
                    viewBox='0 0 14 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 1L7 7L13 1'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                {showMenu ? (
                  <div className='fixed right-4 w-56 mt-20 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hover:cursor-pointer z-50'>
                    <div
                      className='py-1'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='options-menu'
                    >
                      <Link
                        className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600'
                        role='menuitem'
                        to='/'
                      >
                        <span className='flex flex-col'>
                          <span>Profile</span>
                        </span>
                      </Link>
                      <div
                        className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600'
                        role='menuitem'
                        onClick={handleLogOut}
                      >
                        <span className='flex flex-col'>
                          <span>Log out</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* Burger Icon */}
              <div
                id='bgIcon'
                onClick={() => setShow(!show)}
                className='focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4'
              >
                <svg
                  className={`${show ? "hidden" : ""}`}
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className='transform duration-150'
                    d='M4 6H20'
                    stroke='#1F2937'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 12H20'
                    stroke='#1F2937'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    className=' transform duration-150'
                    d='M4 18H20'
                    stroke='#1F2937'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <svg
                  className={`${show ? "" : "hidden"} `}
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 6L6 18'
                    stroke='#1F2937'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 6L18 18'
                    stroke='#1F2937'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            {/* for medium-sized devices */}
            <div className='lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 '>
              <hr className=' w-full bg-gray-200 ' />
              <div className='lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4'>
                <div>
                  <p className=' font-normal text-xs leading-3 text-gray-600'>Hi {user.username}</p>
                  <h3 className=' font-bold text-xl leading-5 text-gray-800 mt-2'>Welcome Back</h3>
                </div>
                <ul className='flex flex-row space-x-3'>
                  {headerData.map((item) => (
                    <li
                      className={`px-4 py-3 rounded uppercase cursor-pointer hover:bg-gray-50 ${
                        location.pathname === item.pathName ? "bg-gray-100" : "bg-white"
                      }`}
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile and Small devices Navigation */}
      <div
        id='MobileNavigation'
        className={`${show ? "" : "hidden"} transform duration-150 sm:hidden h-full bg-white z-50`}
      >
        <div className=' flex flex-col justify-between h-auto '>
          <div className=' flex flex-col lg:px-7 sm:px-6 px-4'>
            <hr className=' w-full bg-gray-200 ' />
          </div>
          <ul className='flex flex-row space-x-3'>
            {headerData.map((item) => (
              <li
                className={`px-4 py-3 rounded uppercase cursor-pointer hover:bg-gray-50 ${
                  location.pathname === item.pathName ? "bg-gray-100" : "bg-white"
                }`}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
