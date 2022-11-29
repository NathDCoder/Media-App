import React from 'react'


export default function Login() {
  return (
    <form>
      <label for 'email'> Email </label>
      <input type = 'email' placeholder = 'Enter Email' id = 'email' />
      <label for 'password'> Password </label>
      <input type = 'password' placeholder = '' id = 'password' />
      <button> Log in </button>
    </form>
  )
}
