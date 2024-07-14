import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {urlToImage, title, description, url, publishedAt, timeat} = this.props;
    return (
      <div >

                <div className="card" style={{width: "18rem"}}>
                    <img src={urlToImage} className="card-img-top" alt="Image"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <h6 className="card-title">{timeat}</h6>
                        <h6 className="card-title">{publishedAt}</h6>
                        <p className="card-text">{description}...<strong>Click below </strong></p>
                        <a href={url} className="btn btn-sm btn-primary" target="_blank" rel='noreferrer'>Read More</a>
                    </div>
                </div>
                
      </div>
    )
  }
}

export default NewsItem