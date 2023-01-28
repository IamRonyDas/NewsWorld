import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card text-center">
        <span
          class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "70%", zIndex: "1" }}
        >
          {this.props.source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text">
            <small class="text-muted">
              By {this.props.author === "" ? "Unknown" : this.props.author} on{" "}
              {this.props.publishedAt}
            </small>
          </p>

          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
