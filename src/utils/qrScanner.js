export const startQrScanner = (onSuccess, onError) => {
  // En un entorno real usaríamos la Web QR API o una librería como Instascan
  return {
    start: () => {
      console.log('Iniciando cámara QR...');
      // Simulamos éxito después de 2 segundos
      setTimeout(() => {
        onSuccess('bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.01');
      }, 2000);
    },
    stop: () => {
      console.log('Deteniendo cámara QR');
    }
  };
};