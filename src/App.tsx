import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/healthdog-color.svg"
          className="App-logo"
          alt="HealthDog logo"
        />
        <h1 className="App-title">HealthDog</h1>
        <h2 className="App-subtitle">
          DataDog for Health - Monitor Your Body Like Your Infrastructure
        </h2>

        <div className="features">
          <div className="feature-card">
            <h3 className="feature-title">Real-time Monitoring</h3>
            <p className="feature-desc">
              Track vitals, metrics, and health data with the same precision you
              track your servers. Get instant alerts when something doesn't look
              right.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Comprehensive Dashboards</h3>
            <p className="feature-desc">
              Visualize your health trends with beautiful, customizable
              dashboards. Identify patterns and correlations in your body's
              metrics.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Integrations</h3>
            <p className="feature-desc">
              Connect with all your health devices and apps. Apple Health,
              Fitbit, Oura, and more - all in one unified platform.
            </p>
          </div>
        </div>

        <button className="cta-button">Get Early Access</button>

        <div className="footer">
          &copy; 2023 HealthDog, Inc. All rights reserved.
        </div>
      </header>
    </div>
  );
}

export default App;
