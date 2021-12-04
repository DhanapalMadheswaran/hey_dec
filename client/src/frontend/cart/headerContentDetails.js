import React from "react";

function HeaderContentDetails(props) {
  return (
    <div class="left-budget">
      <p>
        You have
        <b>
          {" "}
          <i class="fas fa-rupee-sign"></i> 73,000
        </b>
        <br />
        Left in your Budget,
        <br />
        Would you like to
        <br />
        see Decoration
      </p>
      <button type="button" class="btn btn-heyEvents">
        Yes, Offcourse
      </button>
    </div>
  );
}

export default HeaderContentDetails;
