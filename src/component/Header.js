import React from 'react'

const Header = ({loader, error, searchText, hendleSearch, setSerarchText}) => {
  return (
    <div className="row mt-4">
    <div className="col-sm-12 col-md-4">
      <h3 className="title">Weather in your City</h3>
    </div>
    <div className="col-sm-12 col-md-8">
      <div className="row">
        <div className="col-sm-10 col-md-8">
          <div className="input-group searchBar">
            <input
              className={`form-control ${error ? "is-invalid" : ""}`}
              type="search"
              value={searchText}
              onChange={(e) => setSerarchText(e.target.value)}
            />
            <button
              className="btn btn-warning bg-yellow"
              onClick={() => hendleSearch()}
            >
              Search
            </button>
          </div>
        </div>
        {loader && (
          <div className="col-sm-2 col-md-4 spinner">
            {" "}
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Header