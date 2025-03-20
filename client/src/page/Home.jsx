import './Home.css';

export default function Home() {
  const redirect = () => {
    window.location.href = 'create';
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="headline">Click2Vote</h1>
        <p className="subheadline">Your voice matters. Start voting in a few clicks!</p>
        <button className="cta-button" onClick={redirect}>Get Started</button>
      </div>
    </div>
  );
}
