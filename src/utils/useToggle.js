import {
  useState
} from "react";

const useToggle = (initialState = false) => {
  const [toggle, _setToggle] = useState(initialState);
  const setToggle = () => _setToggle(!toggle);
  return [toggle, setToggle];
};

export default useToggle;