import logo from './logo.svg';
// import './App.css';
import './tailwind.css'

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-green-700 text-center font-semibold">Hello, Tailwind CSS</h1>
      <div className="grid justify-items-center py-8">
        <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
          ボタン
        </button>
      </div>
    </div>
  );
}

export default App;
