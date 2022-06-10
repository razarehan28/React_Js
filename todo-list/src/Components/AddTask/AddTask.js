import "./AddTask.css";
import Plus from "../../Images/plus.png";

const AddTask = () => {
  return (
    <div>
      <button className="btn">
        <img src={Plus} alt="Plus" />
      </button>
    </div>
  );
};

export default AddTask;
