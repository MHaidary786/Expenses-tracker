import React from 'react'

export default function LoginPage() {
  return (
    <div>
<h1 className='title-1'>Expenses Tracker</h1>
<h2 className='title-2'>Sign in</h2>

      <form>
            
      <div className="sm:col-span-3">
              <label htmlFor="user-name" className="block text-6x font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  autoComplete="given-name"
                  className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-6x font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="given-name"
                  className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <a className='passlink' href="#">Forgot your Password?</a>

            <br />
            <br />
          
       <div className="btns">
       <button 
       type="submit"
       className='create'
       >Create Account</button>
       <button 
       type="submit"
       className='login'
       >Login</button>
       </div>
          


        </form>
    </div>
  )
}
