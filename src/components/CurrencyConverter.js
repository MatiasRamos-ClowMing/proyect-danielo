import React, { useState, useEffect } from 'react';
import { currencies as allCurrencies, exchangeRates } from '../mock/currencies';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('MXN');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Obtener todas las monedas disponibles
  const availableCurrencies = allCurrencies.map(c => ({
    symbol: c.symbol,
    name: c.name,
    type: c.type
  }));

  // Simular conversión
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount)) {
        // Lógica de conversión simulada
        // En una app real, usarías tasas de cambio en tiempo real
        let rate = 0;
        if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
          rate = exchangeRates[fromCurrency][toCurrency];
        } else if (exchangeRates[toCurrency] && exchangeRates[toCurrency][fromCurrency]) {
          rate = 1 / exchangeRates[toCurrency][fromCurrency];
        } else {
          // Conversión cruzada simple (ej: BTC a USD, luego USD a MXN)
          // Esto es una simplificación, las tasas reales son más complejas
          if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency]['USD'] && exchangeRates['USD'] && exchangeRates['USD'][toCurrency]) {
             rate = exchangeRates[fromCurrency]['USD'] * exchangeRates['USD'][toCurrency];
          } else if (exchangeRates[toCurrency] && exchangeRates[toCurrency]['USD'] && exchangeRates['USD'] && exchangeRates['USD'][fromCurrency]) {
             rate = 1 / (exchangeRates[toCurrency]['USD'] * exchangeRates['USD'][fromCurrency]);
          } else {
             rate = 0; // No hay tasa de conversión simulada
          }
        }

        if (rate > 0) {
          setConvertedAmount((numAmount * rate).toFixed(2)); // Redondear a 2 decimales para fiat
        } else {
          setConvertedAmount('N/A');
        }
      } else {
        setConvertedAmount('');
      }
    } else {
      setConvertedAmount('');
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <h3 className="font-bold mb-3 text-lg">Conversor de Divisas</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">De</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            >
              {availableCurrencies.map(currency => (
                <option key={currency.symbol} value={currency.symbol}>
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">A</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            >
               {availableCurrencies.map(currency => (
                <option key={currency.symbol} value={currency.symbol}>
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {convertedAmount && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-blue-800 font-medium text-center">
            {amount} {fromCurrency} ≈ {convertedAmount} {toCurrency}
          </div>
        )}

        <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
          Convertir
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;