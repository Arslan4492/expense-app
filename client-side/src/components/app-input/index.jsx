import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const AppInput = ({
  id = "",
  type = "text",
  label = "",
  required = true,
  placeholder = "",
  value = "",
  disabled = false,
  error = null,
  onChange = () => {},
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <label htmlFor={id} className='text-sm text-gray-700 font-semibold'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      <div className='relative'>
        <input
          id={id}
          type={type === "password" ? (show ? "text" : "password") : type}
          className={`transition-all duration-300 border ${
            disabled ? "bg-gray-100" : ""
          } mt-2 py-2.5 px-4 w-full ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20"
          } rounded-md text-sm placeholder-gray-400 focus:ring ${type === "password" ? " pr-10" : ""}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />

        {type === "password" && (
          <>
            {show ? (
              <HiEye
                onClick={() => setShow(!show)}
                className='cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute'
              />
            ) : (
              <HiEyeSlash
                onClick={() => setShow(!show)}
                className='cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute'
              />
            )}
          </>
        )}

        {error && <p className='text-red-400 text-sm mt-0.5'>{error}</p>}
      </div>
    </>
  );
};

export default AppInput;
