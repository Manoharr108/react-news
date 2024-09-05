import React, { Component } from 'react'

export class NewsItem extends Component {
    render(props) {
      let {urlToImage, title, description, url, publishedAt, timeat, publish} = this.props;
    return (
      <div >
                <a href={url} target='_blank' style={{textDecoration:"none"}}>
                  <div className={`card bg-light`} style={{width:"18rem", margin:"20px 0" , color:"black"}}>
                    <img src={urlToImage} className="card-img-top" alt="Image"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{left:"85%!important"}}>{title}... <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"82%", zIndex:1}}>
                        {publish}</span></h5>
                        <p className="card-title">{timeat }<span>&#8226;</span>{ publishedAt}</p>
                        {/* <p className="card-title">{publishedAt}</p> */}
                        <p className="card-text">{description}...<strong>Click below</strong></p>
                        <a href={url} className="btn btn-sm btn-primary" target="_blank" rel='noreferrer'>Read More</a>
                    </div>
                </div>
                  </a>
                
      </div>
    )
  }
}

export default NewsItem