import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";

export default class App_Pagination extends Component {
  state = {
    posts: "",
    loading: true,
    postPerPage: 8,
    currentPage: 1,
  };
  componentDidMount() {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setCurrentPageHandle = (value) => {
    this.setState({ currentPage: value });
  };

  render() {
    // Get current post
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const posts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-5">My blog</h1>
        <Post posts={posts} loading={this.state.loading}></Post>
        <Pagination
          setCurrentPageHandle={this.setCurrentPageHandle}
          totalPost={this.state.posts.length}
          postPerPage={this.state.postPerPage}
        ></Pagination>
      </div>
    );
  }
}
