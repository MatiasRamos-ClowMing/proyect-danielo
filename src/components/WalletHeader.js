import React from 'react';

const WalletHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full mr-2">M</span>
          odolibre Wallet
        </h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-xl hover:bg-opacity-30 transition-all duration-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Perfil
          </button>
        </div>
      </div>
    </header>
  );
};

export default WalletHeader;