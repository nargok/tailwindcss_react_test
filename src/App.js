import logo from './logo.svg';
// import './App.css';
import './tailwind.css'

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-green-700 text-center font-semibold">Hello, Tailwind CSS</h1>
      <div className="grid justify-items-center py-8">
        <div>
          <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded hover:bg-red-700 duration-1000">
            ボタン
          </button>
          <button className="bg-red-700 btn hover:bg-red-500 focus:outline-none focus:shadow-outline">
            ボタン2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
