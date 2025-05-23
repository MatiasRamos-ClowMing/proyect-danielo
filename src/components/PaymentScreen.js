import React from 'react';

const PaymentScreen = ({ onBack }) => { // Recibe una prop para volver
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Realizar Pago</h1>
      {/* Contenido de pago */}
      <p>Aquí iría el formulario para realizar pagos.</p>
      <button onClick={onBack} className="mt-4 py-2 px-4 bg-blue-600 text-white rounded">Volver</button>
    </div>
  );
};

export default PaymentScreen;