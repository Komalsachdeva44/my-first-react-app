import React from 'react';
import './App.css';
import Header from './components/Header';
import ThemeCustomizer from './components/ThemeCustomizer';

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeCustomizer />

      <header style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Hello, I'm Komal 👋</h1>
        <h2>Laravel Developer & React Learner 🚀</h2>
        <p>
          I'm exploring React to build beautiful and powerful frontend apps!
        </p>
        <hr style={{ margin: "2rem auto", width: "50%" }} />
        <h3>Contact</h3>
        <p>Email: komal@example.com</p>
      </header>
    </div>
  );
}

export default App;
