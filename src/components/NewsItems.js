import React, { Component} from 'react'

var currentDate = new Date();
export class NewsItems extends Component {
  constructor(){
    super();
    // console.log("I am a constructor");
    this.state = {
      title: this.title,
      description: this.description,
      imgURL: this.imgURL,
      author: this.author,
      newsUrl: this.newsUrl,
      date: this.date,
      source: this.source,
      category: this.category
    }
  }
  render() {
    let {title, description, imgURL, author, newsUrl, date, source, category} = this.props;
    return (
      <div>
        <div className="card">
          {/* <span className={`badgeTop position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${(category) => {
            if(category === "health"){
              return 'success';
            } */}
          <span className={`badgeTop position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${category === 'health'?'success':'danger' && category === 'sports'?'warning':'danger' && category === 'entertainment'?'primary':'danger' && category === 'science'?'info':'danger' && category === 'general'?'white':'danger'}`}>
            {source.name}
          </span>
          <img src={!imgURL?"https://images.moneycontrol.com/static-mcnews/2024/03/Sensex-Nifty-Markets-2-770x433.jpg":imgURL} height="200px" className="card-img-top"/>
          <div className="card-body">
            {currentDate = new Date(date).getDate && <span className="badge badge-danger">New</span>}
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text"> <small className="text-muted">By {author?author:"Unknown author" } on {new Date(date).toGMTString()}</small> </p>
            <p className="card-text fw-medium">{description} ...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
