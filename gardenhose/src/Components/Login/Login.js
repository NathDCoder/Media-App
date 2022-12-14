import React, {useState} from "react";
import { Link } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(email)
  }

  return (
  <>
    <main className="text-white relative z-30 flex justify-start">
    <form className="text-black form absolute text-center m-auto left-0 right-0" onSubmit={handleFormSubmit}>
    <label className="fields2" for="email ">email</label>
    <input className="fields text-black font-semibold" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="something@gmail.com" id="email" name="email" />
    <label className="fields2" for="password">password</label>
    <input className="fields text-black font-semibold" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
    <button type="submit" className="login2 absolute inline-block py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><Link to="/">Log In</Link></button>
    </form>
    <h3 className="inquiry absolute">Don't Have an Account?</h3>
    <button className="logreturn absolute inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button"><Link to="/signup">Sign Up!</Link></button>
    </main>
  </>
  )
}