import React from "react";

class BannerTable extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Banner Text</th>
            <th>Banner Image</th>
            <th>Redirect URL</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.getData.length > 0 ? (
            this.props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.bannerText}</td>
                <td>
                  <img src={e.image.url} alt="Category Icon" width={80} />
                </td>
                <td>{e.redirectUrl}</td>
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

export default BannerTable;
