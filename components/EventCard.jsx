export default function EventCard({ title, description, funds, category, votingEnd, severity }) {
    return (
      <div className="bg-white text-pink-600 p-4 rounded-lg shadow mb-4">
        <h3 className="font-bold text-md">{title}</h3>
        <p>{description}</p>
        {funds && <p><strong>Funds:</strong> {funds}</p>}
        {category && <p><strong>Category:</strong> {category}</p>}
        {votingEnd && <p><strong>Voting Ends In:</strong> {votingEnd}</p>}
        {severity && <p><strong>Severity:</strong> {severity}</p>}
      </div>
    );
  }
  