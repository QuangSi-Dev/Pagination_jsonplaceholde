import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalPost / this.props.postPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  this.props.setCurrentPageHandle(number);
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
