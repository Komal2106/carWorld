import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);

  return (
   <>
     <div className="flex h-screen items-center justify-center ">
     <div id="" className="">
            <div className="modal-box border-[2px] px-5 py-5 w-[400px] md:w-[600px] rounded shadow-lg  dark:text-white dark:bg-slate-700 ">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Signup</h3>
                <div>

                    <p className='mt-5 ml-1'>Name</p>
                    <label className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                    <input type="text" className="grow" placeholder="Enter your Full Name"
                    {...register('name', { required: true })}/>
                    </label>
                     {errors.name && <span className="text-red-500 ">This field is required</span>}
                    <br/>
           
                    

                    <p className='mt-5 ml-1'>Email</p>
                    <label className="input input-bordered flex items-center gap-2 mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                    <input type="email" className="grow" placeholder="Enter your Email" 
                    {...register('email', { required: true })}/>                    
                    </label>
                    {errors.email && <span className="text-red-500 ">This field is required</span>}
                    <br/>
                   

                    <p className='mt-5  ml-1'>Password</p>
                    <label className="input input-bordered flex items-center gap-2 mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                    <input type="text" className="grow"   placeholder="Enter your Password" 
                    {...register('password', { required: true })}/>

                    
                    </label>
                    {errors.password && <span className="text-red-500 ">This field is required</span>}
                    <br/>
                   

                </div>

                <div className="flex flex-row justify-between mt-5">
                    <button className="bg-red-400 rounded-md px-3 py-1 hover:bg-red-500 hover:text-white hover:text-semibold">
                        Signup
                    </button>
                    <p className="ml-10">
                        Have Account? 
                        {/* <span className="underline px-2 text-red-400 hover:pointer">
                            <a >
                                Login  
                            </a>
                            
                        </span>
                        <Login/> */}

                        <button className="underline px-2 text-red-400 hover:cursor-pointer"
                        onClick={(()=>
                            document.getElementById("my_modal_3").showModal()
                        )}>
                            Login
                        </button>{" "}
                        <Login/>

                        {/* <button 
                        className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-500 duration-300 cursor-pointer "
                        onClick={()=>document.getElementById("my_modal_3").showModal()
                        }>
                        Login
                        </button>
                        <Login/> */}
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
   </>
  )
}

export default Signup










// import React from 'react'
// import { Link } from 'react-router-dom';
// import Login from './Login';

// function Signup() {
//   return (
//    <>
//      <div className="flex h-screen items-center justify-center ">
//      <div id="" className="">
//             <div className="modal-box border-[2px] px-5 py-5 w-[400px] md:w-[600px] rounded shadow-lg  dark:text-white dark:bg-slate-700 ">
//                 <form method="dialog">
//                     {/* if there is a button in form, it will close the modal */}
//                     <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//                 </form>
//                 <h3 className="font-bold text-lg">Signup</h3>
//                 <div>

//                     <p className='mt-5 ml-1'>Name</p>
//                     <label className="input input-bordered flex items-center gap-2 mt-2">
//                             <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                             d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                             <path
//                             d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                         </svg>
//                     <input type="text" className="grow" placeholder="Enter your Full Name" required/>
//                     </label>

//                     <p className='mt-5 ml-1'>Email</p>
//                     <label className="input input-bordered flex items-center gap-2 mt-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                             d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                             <path
//                             d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                         </svg>
//                     <input type="email" className="grow" placeholder="Enter your Email" required/>
//                     </label>
//                     <p className='mt-5  ml-1'>Password</p>
//                     <label className="input input-bordered flex items-center gap-2 mt-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                             fillRule="evenodd"
//                             d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                             clipRule="evenodd" />
//                         </svg>
//                     <input type="text" className="grow"  placeholder="Enter your Password" required/>
//                     </label>

//                 </div>

//                 <div className="flex flex-row justify-between mt-5">
//                     <button className="bg-red-400 rounded-md px-3 py-1 hover:bg-red-500 hover:text-white hover:text-semibold">
//                         Signup
//                     </button>
//                     <p className="ml-10">
//                         Have Account? 
//                         {/* <span className="underline px-2 text-red-400 hover:pointer">
//                             <a >
//                                 Login  
//                             </a>
                            
//                         </span>
//                         <Login/> */}

//                         <button className="underline px-2 text-red-400 hover:cursor-pointer"
//                         onClick={(()=>
//                             document.getElementById("my_modal_3").showModal()
//                         )}>
//                             Login
//                         </button>{" "}
//                         <Login/>

//                         {/* <button 
//                         className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-500 duration-300 cursor-pointer "
//                         onClick={()=>document.getElementById("my_modal_3").showModal()
//                         }>
//                         Login
//                         </button>
//                         <Login/> */}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//    </>
//   )
// }

// export default Signup