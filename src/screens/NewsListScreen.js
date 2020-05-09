import React from 'react';
import { Text, View, Button, Image, FlatList, TouchableHighlight } from 'react-native'
import styles from '../styles/NewsListScreenStyle'
import { connect } from 'react-redux';
import { httpGet, fetchNews } from '../actions';
import { newsListApi } from '../server/ApiService';
import { INDIA_COUNTRY_CODE } from '../server/Config';
import ScreenLoader from '../components/ScreenLoader';
import {saveSelectedArticle} from '../actions/NewsArticleAction';

class NewsListScreen extends React.Component {


  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // load news from Remote API
    this.props.httpGet(newsListApi.getNewsList(INDIA_COUNTRY_CODE));
  }

  render() {
    const { isLoading, errorMessage, newsListResponse } = this.props;
    return (
      <View style={styles.mainContainer}>
        <this.getMainContainer response={newsListResponse} />
        <ScreenLoader isLoading={isLoading} />
      </View>
    );
  }

  getMainContainer = (props) => {
    // need to check if response is null or newslist
    // is empty
    const httpResponse = props.response;
    if (httpResponse != null && httpResponse != 'undefined') {
      const totalResults = httpResponse.totalResults;
      const articles = httpResponse.articles;
      if (totalResults == 0) {
        // return no Item found view
      }
      if (articles != null && articles != 'undefined') {
        // return articles
        return this.newsList(articles);
      }
    }
    return null;
  }

  newsList = (articles) => {
    console.log(articles);
    return (
      <FlatList
        data={articles}
        renderItem={({ item,index }) => this.renderNewsArticle(item,index)}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  renderNewsArticle = (article, index) => {
    // let date = Utils.getFormattedDateStr(item.start_date);
    // let submittedBidCount = item.totalBids;
    return (
      <TouchableHighlight
        onPress={() => this.onTapNewsArticle(article,index)}>
        <View style={styles.newsItemContainer}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', padding: 5, color: 'white' }}>
              {article.title}</Text>
            <Text style={{
              flex: 1, fontSize: 16, fontWeight: 'normal',
              padding: 1, textAlign: 'right', marginRight: 0, color:'white'
            }}>
              {article.source.name}</Text>
          </View>
          {/* <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'normal', padding: 5, }}>{
              date
            }</Text>
          </View> */}
        </View>
      </TouchableHighlight>
    );
  }

  onTapNewsArticle = (article, index) => {
    
      // save the article in store
      this.props.saveSelectedArticle(article);
      const navigation = this.props.navigation;
        // move to the New Article Screeen with carring index of article
     // navigation.navigate('Article',{index:index});

      // move to the New Article Screeen with carring article object
      navigation.navigate('Article',{article:article});
  }


}

const mapStateToProps = state => {
  // return {
  //   isLoading:state.http.isLoading,
  //   errorMessage = state.http.errorMessage,
  //   newsListResponse = state.http.newsListResponse,
  //   newsDetail = state.http.newsDetail,

  // }
  return { isLoading, errorMessage, newsListResponse, newsDetail } = state.http;
};


// /**
//  * 
//  * @param {*} dispatch 
//  *  we can disptach action from here or
//  *  cann pass from actions
//  */
// const mapDispatchToProps = dispatch =>{
//   return {
//      fetchNews:(config)=>{fetchNews(dispatch,config)}
//   }
// };

export default connect(mapStateToProps, { httpGet,saveSelectedArticle })(NewsListScreen);