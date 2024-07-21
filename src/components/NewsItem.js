import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {urlToImage, title, description, url, publishedAt, timeat, publish} = this.props;
    return (
      <div >
                <div className="card" style={{width:"18rem", margin:"20px 0" }}>
                    <img src={urlToImage} className="card-img-top" alt="Image"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{left:"85%!important"}}>{title}... <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"82%", zIndex:1}}>
                        {publish}</span></h5>
                        <p className="card-title">{timeat}</p>
                        <p className="card-title">{publishedAt}</p>
                        <p className="card-text">{description}...<strong>Click below</strong></p>
                        <a href={url} className="btn btn-sm btn-primary" target="_blank" rel='noreferrer'>Read More</a>
                    </div>
                </div>
                
      </div>
    )
  }
}

export default NewsItem