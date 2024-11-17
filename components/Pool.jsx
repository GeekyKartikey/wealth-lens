export default function Pool({ pool }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
        {/* Pool Details */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Pool</p>
          <p className="font-bold text-white">{pool.name}</p>
        </div>
  
        {/* Deposits */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Deposit</p>
          {pool.deposit.map((token, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-white">{token.usdValue}</span>
              <span className="text-gray-400">
                {token.amount} {token.token}
              </span>
            </div>
          ))}
        </div>
  
        {/* USD Value */}
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-400">USD Value</p>
          <p className="font-bold text-white">{pool.usdValue}</p>
        </div>
      </div>
    );
  }
  