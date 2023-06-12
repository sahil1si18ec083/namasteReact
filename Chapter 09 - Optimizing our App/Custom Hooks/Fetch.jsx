import useFetch from "./useFetch";
const Fetch = () => {
  const { data, error } = useFetch("https://api.github.com/users", null);
  console.log(data);
  console.log(error);

  return <></>;
};
export default Fetch;
