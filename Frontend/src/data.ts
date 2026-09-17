// PULSE — NSE India mock data

export const INDICES = [
  { name: "NIFTY 50", value: "23,398.10", change: "-79.50", pct: "-0.34", up: false },
  { name: "SENSEX", value: "76,892.34", change: "+183.62", pct: "+0.24", up: true },
  { name: "NIFTY BANK", value: "49,318.45", change: "+118.20", pct: "+0.24", up: true },
  { name: "NIFTY IT", value: "33,218.75", change: "+36.50", pct: "+0.11", up: true },
  { name: "NIFTY AUTO", value: "21,456.80", change: "-142.30", pct: "-0.66", up: false },
  { name: "NIFTY PHARMA", value: "19,874.60", change: "+94.10", pct: "+0.48", up: true },
  { name: "NIFTY FMCG", value: "54,302.15", change: "-210.45", pct: "-0.39", up: false },
  { name: "NIFTY METAL", value: "8,934.20", change: "+62.80", pct: "+0.71", up: true },
  { name: "NIFTY MIDCAP 100", value: "51,234.90", change: "-98.60", pct: "-0.19", up: false },
  { name: "INDIA VIX", value: "14.82", change: "+0.34", pct: "+2.34", up: true },
  { name: "USD/INR", value: "83.74", change: "+0.12", pct: "+0.14", up: true },
  { name: "GOLD", value: "72,450", change: "+320", pct: "+0.44", up: true },
];

export const STOCKS = [
  { symbol: "RELIANCE", name: "Reliance Industries Ltd", sector: "Energy", price: 2847.50, change: 23.40, pct: 0.83, up: true, volume: "8.2M", mcap: "19.2L Cr", pe: 28.4, high52: 3217.90, low52: 2220.30 },
  { symbol: "TCS", name: "Tata Consultancy Services", sector: "IT", price: 3912.25, change: -18.75, pct: -0.48, up: false, volume: "2.1M", mcap: "14.1L Cr", pe: 32.1, high52: 4592.25, low52: 3311.00 },
  { symbol: "HDFCBANK", name: "HDFC Bank Ltd", sector: "Banking", price: 1648.80, change: 12.30, pct: 0.75, up: true, volume: "7.8M", mcap: "12.5L Cr", pe: 19.8, high52: 1794.00, low52: 1363.55 },
  { symbol: "INFY", name: "Infosys Ltd", sector: "IT", price: 1568.45, change: -8.20, pct: -0.52, up: false, volume: "4.3M", mcap: "6.5L Cr", pe: 25.6, high52: 1953.90, low52: 1358.35 },
  { symbol: "ICICIBANK", name: "ICICI Bank Ltd", sector: "Banking", price: 1102.60, change: 9.85, pct: 0.90, up: true, volume: "9.1M", mcap: "7.7L Cr", pe: 18.3, high52: 1196.00, low52: 899.30 },
  { symbol: "WIPRO", name: "Wipro Ltd", sector: "IT", price: 548.30, change: -3.15, pct: -0.57, up: false, volume: "3.2M", mcap: "2.9L Cr", pe: 22.4, high52: 640.10, low52: 430.20 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever Ltd", sector: "FMCG", price: 2312.40, change: -14.60, pct: -0.63, up: false, volume: "1.4M", mcap: "5.4L Cr", pe: 58.2, high52: 2786.50, low52: 2172.00 },
  { symbol: "ITC", name: "ITC Ltd", sector: "FMCG", price: 438.75, change: 2.85, pct: 0.65, up: true, volume: "11.3M", mcap: "5.5L Cr", pe: 27.1, high52: 507.90, low52: 398.25 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance Ltd", sector: "NBFC", price: 6842.10, change: 98.30, pct: 1.46, up: true, volume: "1.2M", mcap: "4.1L Cr", pe: 41.8, high52: 7830.00, low52: 6187.80 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", sector: "Banking", price: 1892.30, change: 17.40, pct: 0.93, up: true, volume: "2.7M", mcap: "3.8L Cr", pe: 21.4, high52: 2060.00, low52: 1543.85 },
  { symbol: "AXISBANK", name: "Axis Bank Ltd", sector: "Banking", price: 1134.55, change: -5.90, pct: -0.52, up: false, volume: "5.9M", mcap: "3.5L Cr", pe: 15.6, high52: 1339.65, low52: 995.65 },
  { symbol: "MARUTI", name: "Maruti Suzuki India", sector: "Auto", price: 11248.90, change: -78.40, pct: -0.69, up: false, volume: "0.6M", mcap: "3.4L Cr", pe: 26.8, high52: 13680.00, low52: 9793.05 },
  { symbol: "SUNPHARMA", name: "Sun Pharmaceutical", sector: "Pharma", price: 1678.30, change: 22.10, pct: 1.34, up: true, volume: "2.8M", mcap: "4.0L Cr", pe: 35.2, high52: 1960.35, low52: 1180.90 },
  { symbol: "TITAN", name: "Titan Company Ltd", sector: "Consumer", price: 3218.65, change: 34.80, pct: 1.09, up: true, volume: "1.1M", mcap: "2.9L Cr", pe: 86.4, high52: 3886.95, low52: 2823.00 },
  { symbol: "NESTLEIND", name: "Nestle India Ltd", sector: "FMCG", price: 2268.40, change: -18.30, pct: -0.80, up: false, volume: "0.4M", mcap: "2.2L Cr", pe: 72.1, high52: 2778.00, low52: 2127.95 },
];

export function generatePriceHistory(base: number, days = 180) {
  const data = [];
  let price = base * 0.85;
  const now = new Date();
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const volatility = 0.018;
    const drift = 0.0003;
    const change = price * (drift + volatility * (Math.random() - 0.48));
    price = Math.max(price + change, base * 0.5);
    const open = price;
    const high = price * (1 + Math.random() * 0.012);
    const low = price * (1 - Math.random() * 0.012);
    const close = low + Math.random() * (high - low);
    const volume = Math.floor(500000 + Math.random() * 4000000);
    data.push({
      date: date.toISOString().split("T")[0],
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume,
    });
    price = close;
  }
  return data;
}

export const FEATURES_LIST = [
  "RSI_14", "MACD_Signal", "BB_Upper", "BB_Lower", "EMA_20", "EMA_50",
  "SMA_200", "Volume_Ratio", "ATR_14", "OBV", "ADX_14", "Stoch_K",
  "Stoch_D", "Williams_R", "CCI_20", "ROC_10", "MOM_10", "VWAP",
  "Price_Change_1D", "Price_Change_5D",
];

export const DYNAMIC_FEATURES = [
  { rank: 1, feature: "RSI_14", importance: 0.187, frequency: 94, category: "Momentum" },
  { rank: 2, feature: "MACD_Signal", importance: 0.162, frequency: 91, category: "Trend" },
  { rank: 3, feature: "Volume_Ratio", importance: 0.148, frequency: 88, category: "Volume" },
  { rank: 4, feature: "EMA_20", importance: 0.131, frequency: 86, category: "Trend" },
  { rank: 5, feature: "BB_Upper", importance: 0.118, frequency: 79, category: "Volatility" },
  { rank: 6, feature: "ATR_14", importance: 0.097, frequency: 71, category: "Volatility" },
  { rank: 7, feature: "Price_Change_5D", importance: 0.089, frequency: 68, category: "Price" },
  { rank: 8, feature: "OBV", importance: 0.068, frequency: 54, category: "Volume" },
];

export const REGIME_DATA = [
  { period: "Jan 2021", regime: "Bull", accuracy: 78.4, trades: 312 },
  { period: "Apr 2021", regime: "Bear", accuracy: 71.2, trades: 289 },
  { period: "Jul 2021", regime: "Bull", accuracy: 82.1, trades: 334 },
  { period: "Oct 2021", regime: "Sideways", accuracy: 68.9, trades: 298 },
  { period: "Jan 2022", regime: "Bear", accuracy: 73.6, trades: 276 },
  { period: "Apr 2022", regime: "Bear", accuracy: 76.1, trades: 301 },
  { period: "Jul 2022", regime: "Recovery", accuracy: 74.8, trades: 318 },
  { period: "Oct 2022", regime: "Bull", accuracy: 80.3, trades: 341 },
  { period: "Jan 2023", regime: "Bull", accuracy: 79.7, trades: 328 },
  { period: "Apr 2023", regime: "Sideways", accuracy: 69.4, trades: 295 },
  { period: "Jul 2023", regime: "Bull", accuracy: 83.2, trades: 352 },
  { period: "Oct 2023", regime: "Volatile", accuracy: 72.5, trades: 287 },
];

export const RESEARCH_METRICS = {
  baseline_srp: { accuracy: 71.3, f1: 0.682, precision: 0.694, recall: 0.671 },
  pulse_dynamic: { accuracy: 79.8, f1: 0.791, precision: 0.804, recall: 0.779 },
  improvement: { accuracy: 8.5, f1: 0.109, precision: 0.110, recall: 0.108 },
};

export const PER_STOCK_RESEARCH = [
  { symbol: "RELIANCE", srp_acc: 70.2, pulse_acc: 80.1, diff: 9.9, srp_f1: 0.672, pulse_f1: 0.793 },
  { symbol: "TCS", srp_acc: 72.8, pulse_acc: 81.4, diff: 8.6, srp_f1: 0.701, pulse_f1: 0.806 },
  { symbol: "HDFCBANK", srp_acc: 69.4, pulse_acc: 77.9, diff: 8.5, srp_f1: 0.665, pulse_f1: 0.772 },
  { symbol: "INFY", srp_acc: 71.1, pulse_acc: 79.6, diff: 8.5, srp_f1: 0.684, pulse_f1: 0.788 },
  { symbol: "ICICIBANK", srp_acc: 68.7, pulse_acc: 78.3, diff: 9.6, srp_f1: 0.659, pulse_f1: 0.776 },
  { symbol: "WIPRO", srp_acc: 73.6, pulse_acc: 82.1, diff: 8.5, srp_f1: 0.714, pulse_f1: 0.814 },
  { symbol: "HINDUNILVR", srp_acc: 70.9, pulse_acc: 79.2, diff: 8.3, srp_f1: 0.681, pulse_f1: 0.784 },
  { symbol: "ITC", srp_acc: 74.2, pulse_acc: 83.0, diff: 8.8, srp_f1: 0.723, pulse_f1: 0.823 },
  { symbol: "BAJFINANCE", srp_acc: 67.8, pulse_acc: 76.9, diff: 9.1, srp_f1: 0.648, pulse_f1: 0.762 },
  { symbol: "SUNPHARMA", srp_acc: 72.1, pulse_acc: 80.7, diff: 8.6, srp_f1: 0.694, pulse_f1: 0.799 },
];

export const YEAR_WISE = [
  { year: "2020", srp_acc: 68.4, pulse_acc: 76.8, diff: 8.4 },
  { year: "2021", srp_acc: 70.1, pulse_acc: 78.9, diff: 8.8 },
  { year: "2022", srp_acc: 72.8, pulse_acc: 81.3, diff: 8.5 },
  { year: "2023", srp_acc: 74.2, pulse_acc: 83.1, diff: 8.9 },
  { year: "2024", srp_acc: 73.6, pulse_acc: 82.4, diff: 8.8 },
];

export const SECTORS = [
  { name: "Banking", change: 0.47, stocks: 8 },
  { name: "IT", change: -0.31, stocks: 6 },
  { name: "Energy", change: 0.83, stocks: 4 },
  { name: "Auto", change: -0.72, stocks: 5 },
  { name: "Pharma", change: 1.12, stocks: 7 },
  { name: "FMCG", change: -0.44, stocks: 9 },
  { name: "Metal", change: 0.68, stocks: 5 },
  { name: "NBFC", change: 1.24, stocks: 4 },
  { name: "Infra", change: -0.18, stocks: 6 },
  { name: "Realty", change: 2.14, stocks: 3 },
];

export const MODEL_STATS = {
  totalStocks: 15,
  avgAccuracy: 79.8,
  totalPredictions: 47832,
  activeDays: 1248,
  f1Score: 0.791,
  buySignals: 24187,
  sellSignals: 23645,
  lastUpdated: "13 Sep 2026, 15:30 IST",
};
