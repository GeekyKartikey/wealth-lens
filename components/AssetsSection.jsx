"use client";

export default function AssetsSection({ assets }) {
    return (
      <div className="bg-gray-900 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Assets $3.543</h3>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            See More Assets
          </button>
        </div>
        <table className="w-full text-left text-gray-400">
          <thead>
            <tr>
              <th className="pb-2">Name</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">24h Change</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Total</th>
              <th className="pb-2">Avg Buy</th>
              <th className="pb-2">All Time</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr
                key={index}
                className={`border-b border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }`}
              >
                <td className="py-2">{asset.name}</td>
                <td className="py-2">{asset.amount}</td>
                <td
                  className={`py-2 ${
                    asset.change > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {asset.change > 0 ? `▲ ${asset.change}%` : `▼ ${Math.abs(asset.change)}%`}
                </td>
                <td className="py-2">{asset.price}</td>
                <td className="py-2">{asset.total}</td>
                <td className="py-2">{asset.avgBuy}</td>
                <td
                  className={`py-2 ${
                    asset.allTime > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {asset.allTime > 0 ? `▲ $${asset.allTime}` : `▼ $${Math.abs(asset.allTime)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  