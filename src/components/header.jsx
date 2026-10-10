import { Link } from "react-router-dom";

export default function Header(){
  return(
    <div className = "header">
      <h1 className="bg-red-500">header</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
  
}