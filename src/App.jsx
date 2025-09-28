import React, { useState } from 'react';
import { validaCPF } from './utils/cpfValidator';

function App() {
  const [cpf, setCpf] = useState('');
  const [message, setMessage] = useState('');

  const handleCpfChange = (e) => {
    const formattedCpf = formatCpf(e.target.value);
    setCpf(formattedCpf);
  };

  const formatCpf = (value) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 3) {
      return numericValue;
    } else if (numericValue.length <= 6) {
      return `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
    } else if (numericValue.length <= 9) {
      return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6)}`;
    } else {
      return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6, 9)}-${numericValue.slice(9, 11)}`;
    }
  };

  const handleValidate = () => {
    if (validaCPF(cpf)) {
      setMessage('CPF válido');
    } else {
      setMessage('CPF inválido');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Validador de CPF</h1>
        <input
          type="text"
          value={cpf}
          onChange={handleCpfChange}
          placeholder="Digite o CPF"
          maxLength="14"
          className="w-full p-3 text-center bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleValidate}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
        >
          Validar
        </button>
        {message && (
          <p className={`mt-6 text-lg font-semibold ${message === 'CPF válido' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
