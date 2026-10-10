import { Link, Route } from "react-router-dom";
import { Routes} from "react-router-dom";

export default function Admin(){
  return(
    <div className="w-full h-screen bg-red-900 flex">
      <div className="w-[300px] h-screen bg-blue-600 flex flex-col">
        <Link to ="/admin/products">Products</Link>
        <Link to ="/admin/orders">Orders</Link>
        <Link to ="/admin/users">Users</Link>
      </div>
      <div className="w-[calc(100%-300px)] h-screen bg-green-600 ">
        <Routes>
          <Route path = "/products" element = {<h1>Products</h1>} />
          <Route path = "/orders" element = {<h1>Orders</h1>} />
          <Route path = "/users" element = {<h1>Users</h1>} />
        </Routes>
      </div>
    </div>
  );
}