import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from "./NewsItem";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [0],
      totalResults: 0,
      page:1
    };
  }
  async getAPIData() {
    let response =await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=1&pageSize=24&sortBy=publishedAt&apiKey=7ee2273df6a74898aec58ff60dc57117`,
    );
    response = await response.json();
    // console.log(response)
    if (response.status === "ok") {
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults,
      });
    }
  }
  

 fetchMore=async()=>{
  this.setState({page:this.state.page+1})
   let response =await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=24&sortBy=publishedAt&apiKey=7ee2273df6a74898aec58ff60dc57117`,
    );
    response = await response.json();
    // console.log(response)
    if (response.status === "ok") {
      this.setState({
        articles: this.state.articles.concat(response.articles),
        
      });
    }
}
  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(oldProps){
    if(oldProps!==this.props)
      this.getAPIData();
  }
  render() {
    return (
      <>
        <div className="container-fluid  mt-5 p-4">
          <h5  className="text-capitalize background text-light text-center p-2 mb-3 ">{this.props.q} Articles</h5>
           <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMore}
      hasMore={this.state.articles.length<this.state.totalResults}
      loader={
        <div className="text-center my-3">
          <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }>
         
          <div className="row">
            {this.state.articles.map((item, index) => (
              <NewsItem
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage}
                date={item.publishedAt}
                source={item.source?.name}
              />
            ))}
          </div>
 </InfiniteScroll>
        </div>
        
      </>
    );
  }
}
