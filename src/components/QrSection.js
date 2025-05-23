import React, { useState, useEffect } from 'react';
import { startQrScanner } from '../utils/qrScanner';
import { currencies as allCurrencies } from '../mock/currencies';

const QrSection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [qrResult, setQrResult] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('BTC');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [currencyType, setCurrencyType] = useState('crypto');

  const cryptoCurrencies = allCurrencies.filter(c => c.type === 'crypto');
  const fiatCurrencies = allCurrencies.filter(c => c.type === 'fiat');
  const currentCurrencies = currencyType === 'crypto' ? cryptoCurrencies : fiatCurrencies;

  const handleScan = () => {
    setIsScanning(true);
    const scanner = startQrScanner(
      (result) => {
        setQrResult(result);
        setIsScanning(false);
      },
      (error) => {
        console.error('Error QR:', error);
        setIsScanning(false);
      }
    );
    scanner.start();
  };

  const closeModal = () => {
    setIsScanning(false);
    setQrResult(null);
    setSelectedCurrency('BTC');
    setPaymentAmount('');
  };

  useEffect(() => {
    if (paymentAmount && qrResult) {
      const amount = parseFloat(paymentAmount);
      if (!isNaN(amount)) {
        const rate = selectedCurrency === 'BTC' ? 0.00002 : 0.0015;
        setConvertedAmount((amount * rate).toFixed(8));
      }
    }
  }, [paymentAmount, selectedCurrency, qrResult]);

  return (
    <div className="mt-6">
      <button 
        onClick={handleScan}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
        Pagar con QR
      </button>

      {isScanning && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="relative pb-[100%] bg-black rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-2 border-white border-dashed rounded-lg w-64 h-64 flex items-center justify-center">
                  <span className="text-white">Vista de cámara QR</span>
                  <div className="absolute animate-pulse">
                    <div className="border-2 border-blue-500 w-48 h-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={closeModal}
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {qrResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Confirmar Pago</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección QR</label>
                <div className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {qrResult}
                </div>
              </div>

              <div className="flex border-b mb-4">
                <button
                  className={`flex-1 py-2 text-center font-medium ${currencyType === 'crypto' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setCurrencyType('crypto')}
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cripto
                  </div>
                </button>
                <button
                  className={`flex-1 py-2 text-center font-medium ${currencyType === 'fiat' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setCurrencyType('fiat')}
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Fiat
                  </div>
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Moneda de pago</label>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {currentCurrencies.map((currency) => (
                    <option key={currency.symbol} value={currency.symbol}>
                      {currency.name} ({currency.symbol}) - {currency.balance} disponible
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monto a enviar</label>
                <div className="relative">
                  <input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">
                    {selectedCurrency}
                  </span>
                </div>
                {convertedAmount && (
                  <p className="text-xs text-gray-500 mt-1">
                    ≈ {convertedAmount} {selectedCurrency === 'BTC' ? 'ETH' : 'BTC'}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button 
                onClick={closeModal}
                className="py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => {
                  console.log(`Pago confirmado: ${paymentAmount} ${selectedCurrency} a ${qrResult}`);
                  closeModal();
                }}
                className="py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={!paymentAmount}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QrSection;

// DONE