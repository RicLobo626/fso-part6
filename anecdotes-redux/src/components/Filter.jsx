import { useDispatch } from "react-redux";
import { changeFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      Filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
