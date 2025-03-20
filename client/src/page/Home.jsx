
export default function Home() {
  
  const redirect = () => {
    window.location.href = 'nigga';
  }

  return (
    <>
      <div>
        <h1>Click2Vote</h1>
      </div>
      <p className="read-the-docs">
        <button onClick={redirect}>Get started</button>
      </p>
    </>
  )
}
