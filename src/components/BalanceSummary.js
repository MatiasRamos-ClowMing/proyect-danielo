import React, { useRef, useState } from 'react';
import { currencies } from '../mock/currencies';

const BalanceSummary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth / 1.2;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 1.2;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Tus Saldos</h2>
        <div className="flex space-x-2">
          {currencies.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Ir a tarjeta ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {currencies.map((currency, index) => (
          <div
            key={currency.id}
            className="flex-shrink-0 w-4/5 snap-start bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{currency.name}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Saldo disponible</p>
              <p className="text-2xl font-bold text-gray-900">{currency.balance}</p>
              <p className="text-sm text-blue-600 font-medium">{currency.equivalent}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BalanceSummary;