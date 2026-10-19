import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(){

        try{
          const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
            email: email,
            password: password
          });
        console.log(response.data);
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        
        //window.location.href = "/admin/";
        if(response.data.role == "admin"){
          navigate("/admin/");
        }else{
          navigate("/");
        }

      }catch(err){
          //console.log(err.response.data.message);
          toast.error(err.response.data.message);
      }
  }

  return(
    <div className="w-full h-screen bg-[url('/login.jpg')] bg-cover bg-center flex ">

      <div className="w-[50%] h-screen  "></div>

      <div className="w-[50%]  items-center justify-center flex">

        <div className="w-[500px] h-[600px] flex flex-col items-center justify-center backdrop-blur-sm rounded-[20px] shadow-xl ">

            <input onChange={
                  (e) => {
                    setEmail(e.target.value);
                  }
                } 

                value={email}

                className=" border shadow justify-center items-center w-[45%] h-[40px] my-[10px] text-white" placeholder='username'/>
            
            <input onChange={(e) => {
                    setPassword(e.target.value);
                  }} 

                  value={password}

                  className="border shadow justify-center items-center w-[45%] h-[40px] my-[10px] text-white " type= "password" placeholder='password'/>
            
            <button onClick={handleLogin} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-[10px] py-2 px-4 rounded">
                    Login
            </button>

        </div>
      </div> 
    </div>
  )
}