import React, {useState} from "react";


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(email)
  }

  return (
    <>
    <form onSubmit={handleFormSubmit}>
    <label for="email">email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="something@gmail.com" id="email" name="email" />
    <label for="password">password</label>
    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
    <button type="submit">Log In</button>
  </form>
  <button>Don't Have an Account? Signup Here!</button>
  </>
  )
}