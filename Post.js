import React, { Component } from "react";

export default class Post extends Component {
  render() {
    const posts = this.props.posts;
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <ul className="list-group mb-4">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}
