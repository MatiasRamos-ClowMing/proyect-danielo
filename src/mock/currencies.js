export const currencies = [
  // Criptomonedas
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    balance: "0.042 BTC",
    equivalent: "$1,200 USD",
    type: "crypto",
    color: "from-orange-100 to-orange-50",
    border: "border-orange-500"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    balance: "1.5 ETH",
    equivalent: "$2,800 USD",
    type: "crypto",
    color: "from-purple-100 to-purple-50",
    border: "border-purple-500"
  },
  // Divisas Fiat
  {
    id: 3,
    name: "Dólar Americano",
    symbol: "USD",
    balance: "$1,250.50",
    equivalent: "$25,100 MXN",
    type: "fiat",
    color: "from-green-100 to-green-50",
    border: "border-green-500"
  },
  {
    id: 4,
    name: "Peso Mexicano",
    symbol: "MXN",
    balance: "$25,300.75",
    equivalent: "$1,265 USD",
    type: "fiat",
    color: "from-blue-100 to-blue-50",
    border: "border-blue-500"
  },
  {
    id: 5,
    name: "Euro",
    symbol: "EUR",
    balance: "€850.20",
    equivalent: "$18,700 MXN",
    type: "fiat",
    color: "from-yellow-100 to-yellow-50",
    border: "border-yellow-500"
  },
  {
    id: 6,
    name: "Peso Argentino",
    symbol: "ARS",
    balance: "$120,000",
    equivalent: "$120 USD",
    type: "fiat",
    color: "from-red-100 to-red-50",
    border: "border-red-500"
  },
  {
    id: 7,
    name: "Real Brasileño",
    symbol: "BRL",
    balance: "R$3,500",
    equivalent: "$700 USD",
    type: "fiat",
    color: "from-lime-100 to-lime-50",
    border: "border-lime-500"
  },
   {
    id: 8,
    name: "Peso Uruguayo",
    symbol: "UYU",
    balance: "$5,000",
    equivalent: "$125 USD",
    type: "fiat",
    color: "from-cyan-100 to-cyan-50",
    border: "border-cyan-500"
  },
   {
    id: 9,
    name: "Peso Chileno",
    symbol: "CLP",
    balance: "$800,000",
    equivalent: "$1,000 USD",
    type: "fiat",
    color: "from-rose-100 to-rose-50",
    border: "border-rose-500"
  }
];

export const exchangeRates = {
  // Tasas de cambio simuladas (simplificadas)
  BTC: {
    USD: 25000,
    MXN: 500000,
    ARS: 28750000, // 25000 * 1150
    EUR: 23000,
    UYU: 980000,
    CLP: 20000000,
    BRL: 120000
  },
  ETH: {
    USD: 1800,
    MXN: 36000,
    ARS: 2070000, // 1800 * 1150
    EUR: 1650,
    UYU: 70000,
    CLP: 1400000,
    BRL: 8500
  },
  USD: {
    MXN: 20,
    ARS: 1150, // 1 USD = 1150 ARS
    EUR: 0.92,
    UYU: 39,
    CLP: 800,
    BRL: 5
  },
  MXN: {
    USD: 0.05,
    ARS: 57.5, // 20 * 1150 / 800 (aproximado)
    EUR: 0.046,
    UYU: 1.95,
    CLP: 40,
    BRL: 0.25
  },
  ARS: {
    USD: 1/1150, // 1 ARS = 1/1150 USD
    MXN: 1/57.5, // 1 ARS = 1/57.5 MXN (aproximado)
    EUR: 1/1250, // 1 ARS = 1/1250 EUR (aproximado)
    UYU: 1/24, // 1 ARS = 1/24 UYU (aproximado)
    CLP: 1, // 1 ARS = 1 CLP (aproximado)
    BRL: 1/230 // 1 ARS = 1/230 BRL (aproximado)
  },
  EUR: {
    USD: 1.08,
    MXN: 21.7,
    ARS: 1250, // 1.08 * 1150 (aproximado)
    UYU: 42.5,
    CLP: 870,
    BRL: 5.4
  },
  UYU: {
    USD: 0.025,
    MXN: 0.51,
    ARS: 24, // 0.025 * 1150 (aproximado)
    EUR: 0.023,
    CLP: 20.8,
    BRL: 0.128
  },
  CLP: {
    USD: 0.00125,
    MXN: 0.025,
    ARS: 1, // 0.00125 * 1150 (aproximado)
    EUR: 0.00115,
    UYU: 0.048,
    BRL: 0.00625
  },
  BRL: {
    USD: 0.2,
    MXN: 4,
    ARS: 230, // 0.2 * 1150 (aproximado)
    EUR: 0.185,
    UYU: 7.8,
    CLP: 160
  }
};



// DONE