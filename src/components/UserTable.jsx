import useStore from "../store/index";

const UserTable = () => {
  const users = useStore((state) => state.users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-8 py-4">ID</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-8 py-4">{user.id}</td>
              <td className="border px-8 py-4">{user.name}</td>
              <td className="border px-8 py-4">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
