import TransactionItem from "./TransactionItem";

const transactions = [
  {
    date: "November 17, 2024",
    items: [
      {
        type: "Received",
        asset: "21,562,911.07 MTOPIA",
        value: "$8,368.13",
        pl: "+$515.14",
        plPercent: "+6.16%",
        portfolio: "Ethereum Wallet",
        symbol: "MTO",
        chain: "Ethereum",
        exchangeRate: "1 MTO = $0.0003881",
      },
      {
        type: "Received",
        asset: "0.11 USDC",
        value: "$0.11",
        pl: "$0",
        plPercent: "+0.03%",
        portfolio: "Polygon Wallet",
        symbol: "USDC",
        chain: "Polygon",
        exchangeRate: "1 USDC = $0.9997",
      },
    ],
  },
];

export default function TransactionList() {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-medium text-white mb-2">
            {transaction.date}
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            {transaction.items.map((item, idx) => (
              <TransactionItem key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
