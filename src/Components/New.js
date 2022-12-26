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
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7b026a4303bc4226a9a6c16d358efbb0";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ article: parsedData.articles });
  }
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
      </div>
    );
  }
}

export default New;
