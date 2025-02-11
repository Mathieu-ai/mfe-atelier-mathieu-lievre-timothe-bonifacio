import "./App.css";
import HeaderComponent from "header_mfe/header";
import FooterComponent from "footer_mfe/footer";

const App = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        <HeaderComponent />
      </header>
      <main className="main-content">
        <section className="content">
          <h1>Welcome to the Dashboard</h1>
          <div className="stats">
            <div className="stat">
              <h2>Total Users</h2>
              <p>1,234</p>
            </div>
            <div className="stat">
              <h2>Revenue</h2>
              <p>$56,789</p>
            </div>
            <div className="stat">
              <h2>Active Sessions</h2>
              <p>123</p>
            </div>
          </div>
          <div className="charts">
            <div className="chart">[Chart 1]</div>
            <div className="chart">[Chart 2]</div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default App;
