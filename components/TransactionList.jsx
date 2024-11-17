import TransactionItem from "./TransactionItem";
import { usePageContext } from "@/app/context/PageContext";

export default function TransactionList() {
  const { transactions, account } = usePageContext();

  console.log("Transactions Data:", transactions); //Debugging

  if (!account) {
    return (
      <p className="text-gray-500 text-center">
        Please connect your wallet to view transactions.
      </p>
    );
  }

  if (transactions.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No transactions found for the connected wallet.
      </p>
    );
  }

  return (
    <div>
      {transactions.map((transaction, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-medium text-white mb-2">
            {new Date(transaction.timestamp).toLocaleDateString()}
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <TransactionItem key={index} item={transaction} />
          </div>
        </div>
      ))}
    </div>
  );
}
