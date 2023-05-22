import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super()
        console.log("this is contructor from news ")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2b173ce3376c43be820c84de66cd6e30&page=1pagesize=20"
        // now fwtch the data
        let data = await fetch(url);
        // parse the data 
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePreclick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b173ce3376c43be820c84de66cd6e30&page=${this.state.page - 1}&pageSize=20`
        // now fwtch the data
        let data = await fetch(url);
        // parse the data 
        let parsedData = await data.json()

        // in next button update the page 
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles

        })


    }

    handleNextclick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {


            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b173ce3376c43be820c84de66cd6e30&page=${this.state.page + 1}&pageSize=20`
            // now fwtch the data
            let data = await fetch(url);
            // parse the data 
            let parsedData = await data.json()

            // in next button update the page 
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles

            })

        }

    }

    render() {
        return (
            <div className="container my-3">
                <h2>Daily-Top-News - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 85) : ""} imgurl={element.urlToImage} newsurl={element.url} />

                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between" >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreclick}>&larr;Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}

export default News
