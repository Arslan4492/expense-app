import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { sls } from "../../utils";
import { HiBeaker } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import {
  AppCheckbox,
  AppInput,
  AppPrimaryButton,
  AppPrimaryLoader,
  AppSecondaryButton,
} from "../../components";
import { schema } from "./login.schema";
import { userLogin } from "../../http-services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/user";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, setSubmitting) => {
    setIsLoading(true);
    userLogin({
      values,
      cbSuccess: (data) => {
        if (data.token) {
          sls.encode("expense-token", data.token);
          dispatch(setUser(sls.decodeToken(data.token)));
        }
        navigate("/");
        toast.success(data.message);
        setSubmitting(false);
        setIsLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setSubmitting(false);
        setIsLoading(false);
      },
    });
  };

  return (
    <div className='flex text-gray-800 p-4 md:py-6 md:px-32 lg:p-0'>
      <div className='flex flex-col-reverse lg:flex-row w-screen lg:min-h-screen border shadow-sm rounded-lg overflow-hidden lg:border-none lg:shadow-none lg:rounded-none lg:overflow-auto'>
        <div className='flex flex-col justify-between text-white lg:min-h-screen w-full lg:w-7/12 xl:w-3/5 bg-[#111827]'>
          <img className='w-8/12 h-auto' src='/images/auth-5.png' alt='' />

          <div className='space-y-8 p-9 mb-20'>
            <Link to='/' className='flex items-center space-x-3'>
              <HiBeaker className='w-9 h-9 md:w-12 md:h-12 text-indigo-600' />
              <div>
                <p className='inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]'>
                  Rock<span className='font-[300]'>star</span>
                </p>
                <div className='flex items-center space-x-0.5 leading-[0.5rem]'>
                  <span className='text-[0.62rem] font-bold text-indigo-600 uppercase leading-[0.5rem]'>
                    React
                  </span>
                  <hr className='w-5 border-sky-600' />
                </div>
              </div>
            </Link>

            <div className='space-y-4'>
              <h1 className='text-2xl lg:text-4xl font-semibold'>
                Welcome back to <br /> our community
              </h1>

              <p className='font-medium'>
                Discover how to manage Two-Factor Authentication in{" "}
                <br className='hidden lg:inline-block xl:hidden' /> Joomla. The two-factor{" "}
                <br className='hidden xl:inline-block' /> authentication in Joomla is a very{" "}
                <br className='hidden lg:inline-block xl:hidden' /> popular security practice.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center lg:min-h-screen p-6 md:p-10 lg:p-8 xl:p-10 w-full lg:w-5/12 xl:w-2/5'>
          <h3 className='text-center text-xl font-semibold text-gray-900'>Login to Account</h3>
          <p className='text-center text-sm mt-2 mb-10'>
            Please sign-in to your account and start the adventure.
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values, setSubmitting);
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
              <form className='space-y-5' onSubmit={handleSubmit}>
                <div>
                  <AppInput
                    label={"Email"}
                    id='email'
                    type='email'
                    placeholder='Enter email'
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <div>
                  <AppInput
                    label={"Password"}
                    id='password'
                    type='password'
                    placeholder='Enter password'
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                  />
                </div>

                <div className='flex items-center justify-between'>
                  <AppCheckbox id='remember' label='Remember Me' />

                  <Link
                    className='transition-all duration-300 text-sm text-indigo-600 hover:text-indigo-700'
                    to='/forgot-password'
                  >
                    Forgot Password?
                  </Link>
                </div>

                <AppPrimaryButton type='submit' disabled={false}>
                  {isLoading && <AppPrimaryLoader color={"white"} />}
                  <span>Login to account</span>
                </AppPrimaryButton>

                <div className='flex items-center justify-center space-x-3'>
                  <hr className='w-12' />
                  <span className='font-bold uppercase text-xs text-gray-400'>Or</span>
                  <hr className='w-12' />
                </div>

                <div className='flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold'>
                  <AppSecondaryButton>
                    <FcGoogle className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5' />

                    <span className='text-[0.7rem] md:text-xs lg:text-[0.7rem] xl:text-sm'>
                      Continue with Google
                    </span>
                  </AppSecondaryButton>

                  <AppSecondaryButton>
                    <RiFacebookCircleFill className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600' />

                    <span className='text-[0.7rem] md:text-xs lg:text-[0.7rem] xl:text-sm'>
                      Continue with Facebook
                    </span>
                  </AppSecondaryButton>
                </div>

                <p className='text-sm text-center'>
                  Don't have an account?{" "}
                  <Link
                    className='transition-all duration-300 text-sm text-indigo-600 hover:text-indigo-700'
                    to='/register'
                  >
                    Register
                  </Link>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
