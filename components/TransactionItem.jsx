export default function TransactionItem({ item }) {
  if (!item) {
    return (
      <div className="text-gray-500 text-center">
        Transaction data is unavailable.
      </div>
    );
  }

  const {
    chain = "Unknown Chain",
    type = "N/A",
    asset = "Unknown Asset",
    exchangeRate = "Unknown Rate",
    value = "N/A",
    pl = "N/A",
    plPercent = "N/A",
    portfolio = "N/A",
  } = item;

  const chainIcon = chain === "Ethereum" ? "Ξ" : "M";

  return (
    <div className="grid grid-cols-5 items-center gap-4 border-b border-gray-700 pb-3 mb-3 last:border-none last:mb-0">
      {/* Chain Icon and Type */}
      <div className="flex items-center gap-2">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
            chain === "Ethereum" ? "bg-purple-500" : "bg-pink-500"
          }`}
        >
          {chainIcon}
        </div>
        <span className="text-white">{type}</span>
      </div>

      {/* Asset and Exchange Rate */}
      <div>
        <p className="text-sm text-white">{asset}</p>
        <p className="text-gray-500 text-xs">{exchangeRate}</p>
      </div>

      {/* Value */}
      <div>
        <p className="text-white">{value}</p>
      </div>

      {/* Profit/Loss */}
      <div>
        <p className={`text-green-400 ${pl.startsWith("-") && "text-red-400"}`}>
          {pl}
        </p>
        <p className={`text-green-400 ${plPercent.startsWith("-") && "text-red-400"}`}>
          {plPercent}
        </p>
      </div>

      {/* Portfolio */}
      <div>
        <p className="flex items-center gap-2 text-white">
          {portfolio}
          <span
            className={`w-4 h-4 ${
              chain === "Ethereum" ? "bg-purple-500" : "bg-pink-500"
            } rounded-full`}
          ></span>
        </p>
      </div>
    </div>
  );
}
