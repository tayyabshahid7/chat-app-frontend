import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {apiUrl} from "../../helper";
import {useNavigate} from 'react-router-dom';
import LogoutButton from "../LogoutButton";

const socket = io(apiUrl);

function Chat() {
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');

    useEffect(()=>{
        !isLoggedIn && navigate('/login');
    },[navigate,isLoggedIn])

    useEffect(() => {
        axios.get(`${apiUrl}/messages`, {
            headers: { 'Authorization': localStorage.getItem('token') }
        })
            .then(res => setMessages(res.data))
            .catch(err => console.error(err));

        socket.on('message', message => {
            setMessages(prevMessages => [message, ...prevMessages]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(content.length > 0){
            const token = localStorage.getItem('token');
            try {
                await axios.post(`${apiUrl}/messages`, { content }, {
                    headers: { 'Authorization': token }
                });
                setContent('');
            } catch (error) {
                console.error(error);
            }
        }

    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
          <div className="w-full flex justify-end">
              <LogoutButton />
          </div>

            <div className="w-full max-w-2xl">
                <div className="bg-white p-6 rounded shadow-md mb-4">
                    <form onSubmit={handleSubmit} className="flex">
                        <input
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded mr-2"
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded px-7">Send</button>
                    </form>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                    {messages.map((message, index) => (
                        <div key={index} className="mb-2">
                            <strong>{message.username}:</strong> {message.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chat;
