import './Dashboard.css';

export default function Dashboard() {
  const pollData = {
    pollName: "Favorite Programming Language",
    options: ["JavaScript", "Python", "Java", "C++"],
    votes: [10, 20, 5, 3]
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title">Poll Dashboard</div>
        <button className="stop-poll-btn">Stop Poll</button>
      </nav>

      {/* Stats Section */}
      <div className="stats-section">
        <h2>{pollData.pollName}</h2>
        <ul className="poll-options">
          {pollData.options.map((option, index) => (
            <li key={index} className="poll-option">
              <span>{option}</span>: <strong>{pollData.votes[index]} votes</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
