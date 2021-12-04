import React, { useState } from "react";

function DinnerModal({ handleChange, handleSubmit, value }) {
  const [input, setInput] = useState({});
  const buttonClick = (e) => {
    setInput({
      value: e,
    });
  };
  return (
    <>
      <div className="form-group" style={{ border: "1px solid #fff" }}>
        <label>DinnerModal:</label>
        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick("Chevron")}
        >
          <img src="./frontend/assets/images/chevron-seating-icon.png" />
          <br />
          Chevron
        </button>

        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick("Theatre")}
        >
          <img src="./frontend/assets/images/theatre-seating-icon.png" />
          <br />
          Theatre
        </button>

        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick("cluster")}
        >
          <img src="./frontend/assets/images/cluster-seating-icon.png" />
          <br />
          cluster
        </button>
      </div>

      <button onClick={(e) => handleSubmit(input)}>Save</button>
    </>
  );
}

export default DinnerModal;
