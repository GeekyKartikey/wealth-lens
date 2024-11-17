export default function Filters() {
    return (
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">All Networks</span>
          <select className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2">
            <option value="all">All Networks</option>
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2"
        />
        <select className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2">
          <option>Transaction Type</option>
          <option>Received</option>
          <option>Sent</option>
        </select>
        <input
          type="text"
          placeholder="DD.MM.YYYY - DD.MM.YYYY"
          className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2"
        />
      </div>
    );
  }
  