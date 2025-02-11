import "./App.css";
import ProviderButton from "header_mfe/header";

const App = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header className="header">
          <ProviderButton />
        </header>
        <section className="content">
          <h1>Welcome to the Dashboard</h1>
          <p>This is your main content area.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
