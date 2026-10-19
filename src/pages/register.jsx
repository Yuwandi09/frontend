
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleRegister() {

        try {
            const response = await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/users/",
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            );

            console.log(response.data);

            toast.success(response.data.message);

            navigate("/login");

        } catch (err) {
            toast.error(
                err.response?.data?.message || "Registration failed"
            );
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-cover bg-center flex">

            <div className="w-[50%] h-screen"></div>

            <div className="w-[50%] items-center justify-center flex">

                <div className="w-[500px] h-[600px] flex flex-col items-center justify-center backdrop-blur-sm rounded-[20px] shadow-xl">

                    <h1 className="text-white text-3xl font-bold my-[20px]">
                        Register
                    </h1>

                    <input
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        value={firstName}
                        className="border shadow justify-center items-center w-[45%] h-[40px] my-[10px] text-white"
                        placeholder="First Name"
                    />

                    <input
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        value={lastName}
                        className="border shadow justify-center items-center w-[45%] h-[40px] my-[10px] text-white"
                        placeholder="Last Name"
                    />

                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        className="border shadow justify-center items-center w-[45%] h-[40px] my-[10px] text-white"
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        className="border shadow justify-center items-center w-[45%] h-[40px] my-[10px] text-white"
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        onClick={handleRegister}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-[10px] py-2 px-4 rounded"
                    >
                        Register
                    </button>

                    <p className="text-white my-[10px]">
                        Already have an account?
                    </p>

                    <button
                        onClick={() => navigate("/login")}
                        className="text-blue-300 hover:text-blue-500 underline"
                    >
                        Login here
                    </button>

                </div>
            </div>

        </div>
    );
}
