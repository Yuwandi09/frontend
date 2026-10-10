import { useState } from 'react';

export default function Login(){
  return(
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}