import { useEffect } from "react";
import shallow from "zustand/shallow";
import "./tailwind.css";
import useStore from "./store/index";
import Count from "./components/Count";

function App() {
  const { increase, decrease } = useStore(
    (state) => ({
      increase: state.increase,
      decrease: state.decrease,
    }),
    shallow
  );

  const getUsers = useStore((state) => state.getUsers);
  const users = useStore((state) => state.users);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="app">
      <h1 className="text-4xl text-green-700 text-center font-semibold">
        hello, tailwind css
      </h1>
      <div className="grid justify-items-center py-8">
        <Count />
        <div>
          <button
            className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded hover:bg-red-700 duration-1000"
            onClick={increase}
          >
            +
          </button>
          <button
            className="bg-red-700 btn hover:bg-red-500 focus:outline-none focus:shadow-outline"
            onClick={decrease}
          >
            -
          </button>
        </div>
        <div>
          <h3 className="text-3xl">user</h3>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
