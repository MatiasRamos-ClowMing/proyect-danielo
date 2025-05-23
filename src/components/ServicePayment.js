import React, { useState } from 'react';

const ServicePayment = ({ onBack }) => { // Recibe una prop para volver
  const [selectedService, setSelectedService] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const services = [
    { id: 'edelap', name: 'EDELAP (Luz)', icon: '⚡' },
    { id: 'aysa', name: 'AYSA (Agua)', icon: '💧' },
    { id: 'metrogas', name: 'Metrogas', icon: '🔥' },
    { id: 'telecom', name: 'Telecom', icon: '📱' },
    { id: 'movistar', name: 'Movistar', icon: '📶' },
    { id: 'arba', name: 'ARBA', icon: '🏛️' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pago realizado:', { selectedService, accountNumber, amount });
    // Lógica para procesar el pago
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <span className="mr-2">🇦🇷</span> Pagar Servicios Argentina
        </h3>
      </div>
      
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Servicio</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Seleccionar servicio</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.icon} {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de cliente/CUIT
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Ej: 123456789"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Monto a pagar (ARS)</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-8 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-bold shadow-md"
          >
            Pagar Servicio
          </button>
        </form>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Pagos recientes</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">EDELAP</p>
                <p className="text-xs text-gray-500">Ayer</p>
              </div>
              <p className="font-bold text-blue-600">$1,250.00</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">AYSA</p>
                <p className="text-xs text-gray-500">Hace 3 días</p>
              </div>
              <p className="font-bold text-blue-600">$850.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePayment;