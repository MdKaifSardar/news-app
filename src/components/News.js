import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./loading";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import '../css/news.css';


export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  articles = [];
  constructor(props){
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = "VitalVoice - " + this.capitalize(this.props.category);
  }
  searchCountryFn(){
    this.setState({
      page: 0,
      articles: []
    })
    this.fetchMoreData();
  } 
  fetchMoreData = async () => {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.searchTopicNews}&apiKey=e0b7d9171e134aaea60249e0189b8b13&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    console.log(this.props.searchTopicNews);
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({loading: false});
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
  }

  capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  async componentDidMount(){
    this.fetchMoreData();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.searchTopicNews !== this.props.searchTopicNews) {
      this.setState({
        page: 0,
        articles: []
      })
      this.fetchMoreData();
    }
}
  
  render() {
    return (
      <div className="news_container">
        <h1 className="text-center mainHeading"><span className="headline_text_vital_voice">VitalVoice </span>{`top headlines on`} <span className="text_typeofnews">{this.props.category}</span></h1>
        {/* {this.state.loading && <Loading/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading/>}
        >
          <div className="row mx-auto">
            {this.state.articles.map((element, index) => {
              return <div className="col-md-4 my-3" key={index}>
                <NewsItems category={this.props.category} source={element.source} title={element.title?element.title.slice(0, 40):''} description={element.description?element.description.slice(0, 88):''} imgURL={element.urlToImage} author={element.author} newsUrl={element.url} date={element.publishedAt}/>
                </div>
            })}
          </div>

        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
