import React, { useState, useEffect } from 'react';

const DebitCardManager = ({ onBack, onAction }) => {
  const [cardState, setCardState] = useState({
    cardNumber: '4242 4242 4242 4242',
    maskedNumber: '•••• •••• •••• 4242',
    cardHolder: 'NOMBRE APELLIDO',
    expiryDate: '12/25',
    cvv: '123',
    balance: 2450.75,
    status: 'active', // active, locked, suspended
    dailyLimit: 5000,
    internationalPayments: false,
    contactlessPayments: true,
    transactionHistory: [
      { id: 1, type: 'purchase', merchant: 'Amazon', amount: -42.99, date: '2023-05-15', category: 'shopping', status: 'completed' },
      { id: 2, type: 'purchase', merchant: 'Starbucks', amount: -5.75, date: '2023-05-14', category: 'food', status: 'completed' },
      { id: 3, type: 'deposit', merchant: 'Transferencia', amount: 500.00, date: '2023-05-10', category: 'transfer', status: 'completed' }
    ]
  });

  const [viewMode, setViewMode] = useState('overview');
  const [showCVV, setShowCVV] = useState(false);
  const [showFullNumber, setShowFullNumber] = useState(false);
  const [newLimit, setNewLimit] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [showDetails, setShowDetails] = useState(false); // Declaración del estado showDetails

  const toggleCardStatus = () => {
    if (cardState.status === 'active') {
      setCardState({...cardState, status: 'locked'});
    } else {
      setCardState({...cardState, status: 'active'});
    }
  };

  const toggleSecret = (field) => {
    if (field === 'number') {
      setShowFullNumber(!showFullNumber);
    } else if (field === 'cvv') {
      setShowCVV(!showCVV);
    }
  };

  const updateDailyLimit = () => {
    if (securityCode !== '1234') {
      alert('Código de seguridad incorrecto');
      return;
    }
    
    const limit = parseFloat(newLimit);
    if (!isNaN(limit) && limit >= 0) {
      setCardState({
        ...cardState,
        dailyLimit: limit
      });
      setViewMode('overview');
      setNewLimit('');
      setSecurityCode('');
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(amount);
  };

  return (
    <div className="mb-8">
      {/* Tarjeta interactiva */}
      <div className="relative bg-gradient-to-br from-blue-700 to-purple-800 rounded-2xl p-6 text-white shadow-2xl h-56 overflow-hidden group">
        {/* Textura sutil */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-br from-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Logo y Chip */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Modolibre</p>
              <p className="text-xl font-bold tracking-wide">WALLET</p>
            </div>
            <div className="w-12 h-8 bg-gray-300 rounded-md shadow-inner"></div> {/* Chip */}
          </div>

          {/* Número de tarjeta */}
          <div className="mt-auto mb-4">
            <p className="text-sm opacity-80 mb-1">Número de tarjeta</p>
            <p 
              className="text-2xl tracking-wider font-mono cursor-pointer"
              onClick={() => toggleSecret('number')}
            >
              {showFullNumber ? cardState.cardNumber : cardState.maskedNumber}
            </p>
          </div>

          {/* Titular, Vencimiento, CVV y Marca */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm opacity-80 mb-1">Titular</p>
              <p className="font-medium text-lg">{cardState.cardHolder}</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80 mb-1">Vence</p>
              <p className="font-medium text-lg">{cardState.expiryDate}</p>
            </div>
            <div className="text-right">
               <p className="text-sm opacity-80 mb-1">CVV</p>
               <p 
                 className="font-medium text-lg cursor-pointer"
                 onClick={() => toggleSecret('cvv')}
               >
                 {showCVV ? cardState.cvv : '•••'}
               </p>
            </div>
            <div className="w-14 h-9 bg-white rounded flex items-center justify-center shadow-md">
              <span className="text-indigo-600 font-bold text-sm">VISA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        <button 
          onClick={() => onAction('payment')} // Enlazar al pago
          className="py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
           <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          Pagar
        </button>
        <button 
          onClick={toggleCardStatus}
          className={`py-2 rounded-lg transition flex items-center justify-center ${cardState.status === 'active' ? 'bg-red-100 text-red-800 hover:bg-red-200' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
        >
           <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-2 4h4m6-10V7a4 4 0 00-4-4H8a4 4 0 00-4 4v10a2 2 0 002 2h14a2 2 0 002-2v-7m-2 0h-6"></path></svg>
          {cardState.status === 'active' ? 'Bloquear' : 'Activar'}
        </button>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition flex items-center justify-center"
        >
           <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {showDetails ? 'Menos' : 'Más'}
        </button>
      </div>

      {/* Panel de detalles */}
      {showDetails && (
        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 text-center ${activeTab === 'transactions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('transactions')}
            >
              Movimientos
            </button>
            <button
              className={`flex-1 py-3 text-center ${activeTab === 'limits' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('limits')}
            >
              Límites
            </button>
            <button
              className={`flex-1 py-3 text-center ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('settings')}
            >
              Configuración
            </button>
          </div>
          
          {/* Contenido de tabs */}
          <div className="p-4">
            {activeTab === 'transactions' && (
              <div className="space-y-3">
                {cardState.transactionHistory.map(tx => (
                  <div key={tx.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        tx.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {tx.category === 'shopping' && '🛒'}
                        {tx.category === 'food' && '🍴'}
                        {tx.category === 'transfer' && '💸'}
                      </div>
                      <div>
                        <p className="font-medium">{tx.merchant}</p>
                        <p className="text-sm text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${
                      tx.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'limits' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Límite diario</p>
                    <p className="text-sm text-gray-500">Máximo de gasto en 24h</p>
                  </div>
                  <p className="font-bold">{formatCurrency(cardState.dailyLimit)}</p>
                </div>
                
                <button 
                  onClick={() => setViewMode('limits')} // Mantener en modo límites para el formulario
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Cambiar límite
                </button>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2">
                  <div>
                    <p className="font-medium">Notificaciones</p>
                    <p className="text-sm text-gray-500">Alertas por movimientos</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center p-2">
                  <div>
                    <p className="font-medium">Pagos internacionales</p>
                    <p className="text-sm text-gray-500">Habilitar compras en el exterior</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center p-2">
                  <div>
                    <p className="font-medium">Pagos sin contacto</p>
                    <p className="text-sm text-gray-500">Habilitar NFC</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DebitCardManager;



// DONE