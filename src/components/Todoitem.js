import React from "react";
function Todoitem({ name, email, pass, date, index, data, setData }) {
  const remove = () => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <div className="container kkk">
        <div className="row kg_row">
          <div className="col-3">{name}</div>
          <div className="col-3">{email}</div>
          <div className="col-3">{pass}</div>
          <div className="col-2">{date}</div>

          <div className="col-1">
            <button
              onClick={remove}
              type="button"
              className="btn btn-danger kg_button "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
