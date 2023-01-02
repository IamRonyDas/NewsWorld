import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class New extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: 1,
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlenext = async () => {
    console.log("NExt");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        article: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  handleprevious = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1>KhabriChacha</h1>
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    !element.urlToImage
                      ? "https://my.alfred.edu/zoom/_images/foster-lake.jpg"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handleprevious}
          >
            &larr; previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default New;
