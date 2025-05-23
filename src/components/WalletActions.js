import React from 'react';

const WalletActions = ({ onAction }) => {
  return (
    <div className="grid grid-cols-4 gap-5 my-8">
      <button 
        onClick={() => onAction('send')}
        className="flex flex-col items-center p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-blue-100"
      >
        <div className="bg-blue-500 p-4 rounded-full mb-3 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
        <span className="font-bold text-blue-700">Enviar</span>
      </button>

      <button 
        onClick={() => onAction('receive')}
        className="flex flex-col items-center p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-green-100"
      >
        <div className="bg-green-500 p-4 rounded-full mb-3 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <span className="font-bold text-green-700">Recibir</span>
      </button>

      <button 
        onClick={() => onAction('transfer')}
        className="flex flex-col items-center p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-purple-100"
      >
        <div className="bg-purple-500 p-4 rounded-full mb-3 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        </div>
        <span className="font-bold text-purple-700">Transferir</span>
      </button>

      <button 
        onClick={() => onAction('services')}
        className="flex flex-col items-center p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-yellow-100"
      >
        <div className="bg-yellow-500 p-4 rounded-full mb-3 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <span className="font-bold text-yellow-700">Servicios</span>
      </button>
    </div>
  );
};

export default WalletActions;

// DONE