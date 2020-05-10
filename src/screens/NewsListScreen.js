import React from 'react';
import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchNews, httpGet } from '../actions';
import { saveSelectedArticle } from '../actions/NewsArticleAction';
import AsyncImage from '../components/AsyncImage';
import ScreenLoader from '../components/ScreenLoader';
import { newsListApi } from '../server/ApiService';
import { INDIA_COUNTRY_CODE } from '../server/Config';
import styles from '../styles/NewsListScreenStyle';
import { Colors } from '../themes';
import Utils from '../utils/Utils';



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
        renderItem={({ item, index }) => this.renderNewsArticle(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  renderNewsArticle = (article, index) => {
    let articleDate = new Date(article.publishedAt);
    let date = Utils.getFormattedDate(articleDate, '-');
    // let submittedBidCount = item.totalBids;
    return (
      <TouchableHighlight
        onPress={() => this.onTapNewsArticle(article, index)}>
        <View style={styles.newsItemContainer}>
          <AsyncImage style={styles.image}
            source={{
              uri: article.urlToImage
            }}
            placeholderColor={Colors.background} />
          <View style={styles.bottomView}>
            <Text style={styles.source}>
              {article.source.name}</Text>
            <Text style={styles.date}>
              {date}</Text>
          </View>
          <View style={styles.titleView}>
            <Text numberOfLines={3} style={styles.title}>
              {article.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  onTapNewsArticle = (article, index) => {
    const navigation = this.props.navigation;

    // Will be use in case of TYPE - 1 & 2
    // save the article in store
    this.props.saveSelectedArticle(article);

    // TYPE - 4
    // move to the New Article Screeen with carring index of article
    navigation.navigate('Article', { index: index });

    // TYPE - 3
    // move to the New Article Screeen with carring article object
    // navigation.navigate('Article', { article: article });
  }


}


/**
 * 
 * @param {*} state -- is the object that will received from redux store.
 *   in case of multiple reducers, state wrapped with reducer name that
 *  defined in time of combine reducers.
 *   Here getting the state from http reducer
 */
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
//  *  we can also disptach the action from here 
//  */
const mapDispatchToProps = dispatch => {
  return {
    fetchNews: (config) => { fetchNews(dispatch, config) }
  }
};

export default connect(mapStateToProps, { httpGet, saveSelectedArticle })(NewsListScreen);