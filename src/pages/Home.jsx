function Home() {
  const classStyle = {
    fontSize: '5em',
    lineHeight: '1.6',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '90%',
    margin: '39px auto',
    textAlign: 'center',
    fontFamily: "'Work Sans', sans-serif",
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'
  };

  return (
    <div>
      <p style={classStyle}>
      <strong style={{ color: '#ff7f50', fontWeight: '700' }}>HERE</strong> – discover and share amazing recipes!
      </p>
    </div>
  );
}

export default Home;