import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* ✅ Tailwind Test Section */}
        <div className="mt-10 p-6 bg-blue-100 border border-blue-400 rounded-xl">
          <h1 className="text-4xl font-bold text-blue-600 underline">
            Tailwind is working!
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            If you can see this styled box, Tailwind CSS is set up correctly.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
