export default function TransactionItem({ item }) {
    return (
      <div className="grid grid-cols-5 items-center gap-4 border-b border-gray-700 pb-3 mb-3 last:border-none last:mb-0">
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
              item.chain === "Ethereum" ? "bg-purple-500" : "bg-pink-500"
            }`}
          >
            {item.chain === "Ethereum" ? <span>Ξ</span> : <span>M</span>}
          </div>
          <span className="text-white">{item.type}</span>
        </div>
        <div>
          <p className="text-sm text-white">{item.asset}</p>
          <p className="text-gray-500 text-xs">{item.exchangeRate}</p>
        </div>
        <div>
          <p className="text-white">{item.value}</p>
        </div>
        <div>
          <p className="text-green-400">{item.pl}</p>
          <p className="text-green-400">{item.plPercent}</p>
        </div>
        <div>
          <p className="flex items-center gap-2 text-white">
            {item.portfolio}
            <span
              className={`w-4 h-4 ${
                item.chain === "Ethereum" ? "bg-purple-500" : "bg-pink-500"
              } rounded-full`}
            ></span>
          </p>
        </div>
      </div>
    );
  }
  