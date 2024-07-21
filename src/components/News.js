import React, { Component } from 'react';
import NewsItem from './NewsItem';
import ArrowUp from '../components/ArrowUp'
import Loader from "../components/Loader"
import Navigation from './Navigation';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles:[],
            page:1,
            totalResults:0, 
            loading:true
        };
        document.title = `React-News--${this.catpitalize(this.props.category)}`
    }
    catpitalize = (str)=>{
       return  str[0].toUpperCase() + str.slice(1)
    }
    // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=1&pageSize=8
    async componentDidMount() {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${this.state.page}&pageSize=8`);
        let pdata = await data.json();
        this.setState({ articles: pdata.articles, totalResults:pdata.articles, loading:false });
    }
  
    handlePrevBtn = async()=>{
        this.setState({loading:true})
        const {page} = this.state;
        const newPage = page-1
        this.setState({page:newPage})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${newPage}&pageSize=8`);
        let pdata = await data.json();
        this.setState({ articles: pdata.articles, totalResults:pdata.articles, loading:false });
        document.documentElement.scrollTop = 0;
    }
    
    handleNextBtn =async()=>{
        this.setState({loading:true})
        const {page} = this.state;
        const newPage = page+1
        this.setState({page:newPage})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${newPage}&pageSize=8`);
        let pdata = await data.json();
        this.setState({ articles: pdata.articles, totalResults:pdata.articles , loading:false});
        document.documentElement.scrollTop = 0;
    }

    // handlePrevBtn = async () => {
    //     const { page } = this.state;
    //     const newPage = page - 1;
    
    //     if (newPage > 0) {
    //         let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${newPage}&pageSize=12`);
    //         let pdata = await data.json();
    //         this.setState({
    //             articles: pdata.articles,
    //             page: newPage
    //         });
    //         document.documentElement.scrollTop = 0;
    //     }
    // }
    
    // handleNextBtn = async () => {
    //     const { page } = this.state;
    //     const newPage = page + 1;
    
    //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb09c5c3d2b04d8681b42856b6866fe8&page=${newPage}&pageSize=12`);
    //     let pdata = await data.json();
    //     this.setState({
    //         articles: pdata.articles,
    //         page: newPage
    //     });
    //     document.documentElement.scrollTop = 0;
    // }
    


    render() {
        const { totalResults } = this.state;
        return (
            <>
            <div className="container text-center" > 
                <h1 style={{marginTop:"80px", marginBottom:"25px"}}>{`Hey, just baked ${this.catpitalize(this.props.category)} News for u!!`}</h1>
            </div>
            <div className="text-center">{this.state.loading && <Loader/>}</div>
            <div style={{ 
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                // margin: "35px 0"
            }}>
                {!this.state.loading && this.state.articles.map((i) => (
                    <NewsItem
                    key={i.url}
                    title={i.title ? i.title.slice(0, 50) : ""}
                    description={i.description ? i.description.slice(0, 110) : ""}
                    url={i.url}
                    urlToImage={i.urlToImage ? i.urlToImage : "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue"}
                    publishedAt={i.publishedAt ? i.publishedAt.slice(0, 10) : ""}
                    timeat={i.publishedAt ? i.publishedAt.slice(11, 19) : ""}
                    publish = {i.source.name}
                    />
                ))}
                    <ArrowUp/>
                    <Navigation page={this.state.page} handlePrevBtn={this.handlePrevBtn} handleNextBtn={this.handleNextBtn} totalResults = {this.state.totalResults}/>
            </div>
                <div className="container d-flex justify-content-between my-4">
                    <button type='button' className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.handlePrevBtn}>&larr; Previous</button>
                    <button type='button' className='btn btn-dark' disabled={this.state.page  >= Math.ceil(totalResults / 8)} onClick={this.handleNextBtn}>Next &rarr;</button>
                </div>
                </>
        );   
    }
}
export default News;