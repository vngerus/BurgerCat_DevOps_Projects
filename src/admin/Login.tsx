import React, { useState } from 'react';



interface LoginFormProps {
user?: string
password?: string
}

const LoginAdmin = ({}: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">   
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Enviar
        </button>
      </div>
    </div>
  );
};


export default LoginAdmin;