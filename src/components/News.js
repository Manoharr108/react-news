import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
   
    constructor() {
        super();
        this.state = {
            articles: [],
            page:1,
            totalResults:0
        };
    }

    async componentDidMount() {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${this.state.page}&pageSize=12`);
        let pdata = await data.json();
        this.setState({ articles: pdata.articles, totalResults:pdata.articles });
    }
    
    handlePrevBtn = async()=>{
        this.setState({page:this.state.page-1})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${this.state.page}&pageSize=12`);
        let pdata = await data.json();
        this.setState({ articles: pdata.articles, totalResults:pdata.articles });
    }
    
    handleNextBtn =async()=>{
        this.setState({page:this.state.page+1})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${this.state.page}&pageSize=12`);
        let pdata = await data.json();
        this.setState({ articles: pdata.articles, totalResults:pdata.articles });
    }


    render() {
        const { totalResults } = this.state;
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                margin: "35px 0 0 0"
            }}>
                {this.state.articles.map((i) => (
                    <NewsItem
                        key={i.url}
                        title={i.title ? i.title.slice(0, 70) : ""}
                        description={i.description ? i.description.slice(0, 110) : ""}
                        url={i.url}
                        urlToImage={i.urlToImage ? i.urlToImage : "https://images.moneycontrol.com/static-mcnews/2024/07/20240702075605_market_flat.jpg"}
                        publishedAt={i.publishedAt ? i.publishedAt.slice(0, 10) : ""}
                        timeat={i.publishedAt ? i.publishedAt.slice(11, 19) : ""}
                    />
                ))}
                <div className="container d-flex justify-content-between my-4">
                    <button type='button' className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.handlePrevBtn}>&larr; Previous</button>
                    <button type='button' className='btn btn-dark' disabled={this.state.page  >= Math.ceil(totalResults / 12)} onClick={this.handleNextBtn}>Next &rarr;</button>
                </div>
            </div>
        );   
    }
}

export default News;


