import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Navbar from '../shared/Navbar';




interface LoginFormProps {
  user?: string;
  password?: string;
}

const LoginAdmin: React.FC<LoginFormProps> = ({ user, password }) => {
  const [username, setUsername] = useState<string>(user || '');
  const [passwordValue, setPasswordValue] = useState<string>(password || '');
  const navigate = useNavigate();


const loginAdmin = () =>{
  const auth = getAuth();
signInWithEmailAndPassword(auth, username, passwordValue)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/dashboard')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 

}

  return (
    <>
    <Navbar login={false}/>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-md mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md mb-4"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loginAdmin}>
          Enviar
        </button>
      </div>
    </div>
    </>
  );
};

export default LoginAdmin;

