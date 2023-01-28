import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class New extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
    };
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=${
      this.state.page + 1
    }&pageSize=${Number(this.props.pagesize)}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // this.setState({ loading: false });
    this.setState({
      article: parsedData.articles,
      // page: this.state.page + 1,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=1&pageSize=${Number(
      this.props.pagesize
    )}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: 1,
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlenext = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=${
    //   this.state.page + 1
    // }&pageSize=${Number(this.props.pagesize)}`;
    // console.log(url);
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // this.setState({ loading: false });
    // this.setState({
    //   article: parsedData.articles,
    //   page: this.state.page + 1,
    //   loading: false,
    // });
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handleprevious = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=7b026a4303bc4226a9a6c16d358efbb0&page=${
    //   this.state.page - 1
    // }&pageSize=${Number(this.props.pagesize)}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // this.setState({ loading: false });
    // this.setState({
    //   article: parsedData.articles,
    //   loading: false,
    //   page: this.state.page - 1,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">KhabriChacha - Top HeadLines</h1>
        {this.state.loading === 1 && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    publishedAt={element.publishedAt.slice(0, 9)}
                    author={element.author}
                    imageUrl={
                      !element.urlToImage
                        ? "https://my.alfred.edu/zoom/_images/foster-lake.jpg"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    source={element.source.name}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / Number(this.props.pagesize))
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default New;
