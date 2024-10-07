import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import Navbar from '../shared/Navbar';
import { logoburguer } from '../../assets/logos';

interface LoginFormProps {
  user?: string;
  password?: string;
}

const LoginAdmin: React.FC<LoginFormProps> = ({ user = '', password = '' }) => {
  const [username, setUsername] = useState<string>(user);
  const [passwordValue, setPasswordValue] = useState<string>(password);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const loginAdmin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
        navigate('/dashboard');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <Navbar login={false} />
      <div className="flex justify-center items-center h-screen bg-orange-200">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
          <img className="w-80 mb-4" src={logoburguer} alt="Logo" />
          <input
            type="text"
            placeholder="Correo"
            className="w-full p-2 border rounded-md mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 border rounded-md mb-4"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          {errorMessage && (
            <div className="text-red-500 mb-4">
              {errorMessage}
            </div>
          )}
          <button
            className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            onClick={loginAdmin}
          >
            Enviar
          </button>
        </div>
      </div>

      {loggedInUser && (
        <div className="mt-4 text-center">
          <p className="text-lg">Bienvenido, {loggedInUser.email}</p>
        </div>
      )}
    </>
  );
};

export default LoginAdmin;
