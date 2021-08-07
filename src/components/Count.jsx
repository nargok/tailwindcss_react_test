import useStore from "../store/index";

const Count = () => {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
};

export default Count;
