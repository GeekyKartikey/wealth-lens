"use client";
import Filters from "@/components/Filters";
import TransactionList from "@/components/TransactionList";

export default function TransactionsPage() {
  return (
    <div className="pl-20 md:pl-28 h-screen pr-20 pt-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Transactions</h1>
      </div>
      <Filters />
      <TransactionList />
    </div>
  );
}
