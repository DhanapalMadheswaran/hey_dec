import React from "react";

class InfoTable extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Category Icon</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.getData.length > 0 ? (
            this.props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>
                  <img src={e.image.url} alt="Category Icon" width={40} />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(event) => {
                      this.props.setData(e);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(event) => {
                      this.props.del(e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td> No Data </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default InfoTable;
