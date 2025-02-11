export default function Header() {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Header</div>
      <div>
        <button style={{
          marginRight: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>Button 1</button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#6c757d',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>Button 2</button>
      </div>
    </header>
  );
}
