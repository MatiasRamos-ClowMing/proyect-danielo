import React, { useState } from 'react';
import WalletHeader from './components/WalletHeader';
import CurrencyCard from './components/CurrencyCard';
import QrSection from './components/QrSection';
import CurrencyConverter from './components/CurrencyConverter';
import WalletActions from './components/WalletActions';
import BalanceSummary from './components/BalanceSummary';
import ServicePayment from './components/ServicePayment';
import DebitCardManager from './components/DebitCardManager';
import PaymentScreen from './components/PaymentScreen';
import CardSettings from './components/CardSettings';
import { currencies } from './mock/currencies';

const App = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  const [actionModal, setActionModal] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleAction = (action) => {
    if (action === 'services') {
      setCurrentPage('services');
    } else if (action === 'payment') {
      setCurrentPage('payment');
    } else if (action === 'card-settings') {
      setCurrentPage('card-settings');
    } else {
      setActionModal(action);
    }
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicePayment onBack={handleBack} />;
      case 'payment':
        return <PaymentScreen onBack={handleBack} />;
      case 'card-settings':
        return <CardSettings onBack={handleBack} />;
      case 'home':
      default:
        return (
          <>
            <div className="flex mb-8 bg-white rounded-full p-1 shadow-inner">
              <button
                className={`flex-1 py-3 text-center font-bold rounded-full transition-all duration-300 ${
                  activeTab === 'wallet' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('wallet')}
              >
                Billetera
              </button>
              <button
                className={`flex-1 py-3 text-center font-bold rounded-full transition-all duration-300 ${
                  activeTab === 'convert' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('convert')}
              >
                Convertir
              </button>
            </div>

            {activeTab === 'wallet' ? (
              <div className="space-y-6">
                <BalanceSummary />
                <DebitCardManager onBack={handleBack} />
                <WalletActions onAction={handleAction} />
                <div className="space-y-4">
                  {currencies.map((currency) => (
                    <CurrencyCard
                      key={currency.id}
                      currency={`${currency.name} (${currency.symbol})`}
                      balance={currency.balance}
                      equivalent={currency.equivalent}
                    />
                  ))}
                </div>
                <QrSection />
              </div>
            ) : (
              <CurrencyConverter />
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <WalletHeader />
      <main className="container mx-auto p-6 max-w-md">
        {renderPage()}
      </main>

      {actionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">
              {actionModal === 'send' && 'Enviar criptomonedas'}
              {actionModal === 'receive' && 'Recibir fondos'}
              {actionModal === 'transfer' && 'Transferir entre cuentas'}
            </h3>
            
            <p className="text-gray-600 text-sm mb-5">
              {actionModal === 'send' && 'Ingresa la dirección de destino y el monto a enviar'}
              {actionModal === 'receive' && 'Comparte esta dirección para recibir pagos'}
              {actionModal === 'transfer' && 'Selecciona las cuentas y el monto a transferir'}
            </p>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setActionModal(null)}
                className="flex-1 py-2.5 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setActionModal(null)}
                className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
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

export default App;