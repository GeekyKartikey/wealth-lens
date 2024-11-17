"use client";

import { usePageContext } from "@/app/context/PageContext";
import Filters from "@/components/Filters";
import TransactionList from "@/components/TransactionList";

export default function TransactionsPage() {
  const { transactions, account } = usePageContext();

  return (
    <div className="pl-20 md:pl-28 h-screen pr-20 pt-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Transactions</h1>
      </div>

      {/* Check if account is connected */}
      {account ? (
        <>
          <Filters />
          <TransactionList transactions={transactions} />
        </>
      ) : (
        <p className="text-white">
          Please connect your wallet on the home page to view transactions.
        </p>
      )}
    </div>
  );
}
