const CurrencyCard = ({ currency, balance, equivalent }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{currency}</h3>
          </div>
          <p className="text-sm text-gray-500">Saldo disponible</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-gray-900">{balance}</p>
          <p className="text-sm text-blue-600 font-medium mt-1">{equivalent}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;