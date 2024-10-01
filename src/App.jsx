import "./App.css";

function App() {
  return (
    <div className="landing">
      <img src="./images/profile.jpeg" className="profile" />
      <h1>Jan Hendrych</h1>
      <p>
        Fostering transparency and utility through open-source projects. Student
        at CTU Prague.
      </p>
      <div className="links">
        <a href="https://github.com/hendrychjan" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jan-hendrych/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
