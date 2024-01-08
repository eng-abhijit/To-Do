import { useState } from "react";
import Todoitem from "./Todoitem";

function AddTodo() {
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data,
      {
        num: num,
        email: email,
        pass: pass,
        date: date,
      },
    ]);
    setNum("");
    setEmail("");
    setDate("");
    setPass("");
  };

  return (
    <>
      <div className="container text-center kkk">
        <div className="row kg_row">
          <div className="col-3">
            <input
              type="text"
              placeholder="Enter the name"
              value={num}
              onChange={(event) => {
                setNum(event.target.value);
              }}
            />
          </div>
          <div className="col-3 ">
            <input
              type="text"
              placeholder="Enter the email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="col-3 ">
            <input
              type="text"
              placeholder="Enter password"
              value={pass}
              onChange={(event) => {
                setPass(event.target.value);
              }}
            />
          </div>
          <div className="col-2 ">
            <input
              type="date"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-success kg_button"
              onClick={addData}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="item_container">
        {data.map((ele, ind) => {
          return (
            <Todoitem
              key={ind}
              name={ele.num}
              email={ele.email}
              pass={ele.pass}
              date={ele.date}
              index={ind}
              data={data}
              setData={setData}
            />
          );
        })}
      </div>
    </>
  );
}

export default AddTodo;
