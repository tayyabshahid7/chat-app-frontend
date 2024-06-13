import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {apiUrl} from "../../helper";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiUrl}/register`, { username, password });
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-4 text-xl">Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <div className="flex justify-end mt-2">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded px-10">Register</button>
                </div>

                <p className="mt-2 text-sm">
                    Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
