import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // Creating props for tital , description ...
        let { title, description, imgurl, newsurl } = this.props;
        return (
            <div className="my-3" >

                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imgurl ? "https://imgeng.jagran.com/images/2023/may/fake-chatgpt-apps1684648974136.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem
