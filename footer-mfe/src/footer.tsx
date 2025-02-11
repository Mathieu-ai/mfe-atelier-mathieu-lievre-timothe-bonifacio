export default function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #dee2e6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto'
    }}>
      <div style={{ fontSize: '1rem', color: '#6c757d' }}>© 2025 My Company</div>
      <div>
        <button style={{
          marginRight: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>Privacy Policy</button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#6c757d',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>Terms of Service</button>
      </div>
    </footer>
  );
}
