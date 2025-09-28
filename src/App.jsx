import React, { useState } from "react";
import { validaCPF } from "./utils/cpfValidator";
import { FaCheckCircle, FaTimesCircle, FaIdCard } from "react-icons/fa";

function App() {
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleCpfChange = (e) => {
    const formattedCpf = formatCpf(e.target.value);
    setCpf(formattedCpf);
    if (message) {
      setMessage("");
      setIsValid(null);
    }
  };

  const formatCpf = (value) => {
    const numericValue = value.replace(/\D/g, "");
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
    const validationResult = validaCPF(cpf);
    setIsValid(validationResult);
    setMessage(validationResult ? "CPF válido" : "CPF inválido");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleValidate();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-400">Validador de CPF</h1>
          <p className="text-gray-400 mt-2">Verifique a validade de um número de CPF</p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaIdCard className="text-gray-400" />
          </div>
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
            onKeyPress={handleKeyPress}
            placeholder="000.000.000-00"
            maxLength="14"
            className="w-full pl-10 p-3 text-center bg-gray-700 rounded-md border-2 border-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
        </div>

        <button onClick={handleValidate} className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1">
          Validar
        </button>

        {message && (
          <div className={`mt-6 flex items-center justify-center p-4 rounded-lg ${isValid ? "bg-green-900/50" : "bg-red-900/50"}`}>
            {isValid ? <FaCheckCircle className="text-green-400 mr-3 text-2xl" /> : <FaTimesCircle className="text-red-400 mr-3 text-2xl" />}
            <p className={`text-lg font-semibold ${isValid ? "text-green-300" : "text-red-300"}`}>{message}</p>
          </div>
        )}
      </div>
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>
          Developed by{" "}
          <a className="text-center mt-4 text-orange-500" href="https://github.com/Camiloruas" target="_blank">
            Camilo Ruas
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
