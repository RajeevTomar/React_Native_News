import React from 'react';
import { Text, View, Button, Image, FlatList, TouchableHighlight } from 'react-native'
import styles from '../styles/NewsListScreenStyle'
import { connect } from 'react-redux';
import { httpGet, fetchNews } from '../actions';
import { newsListApi } from '../server/ApiService';
import { INDIA_COUNTRY_CODE } from '../server/Config';
import ScreenLoader from '../components/ScreenLoader'

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
    return (
      <FlatList
        data={articles}
        renderItem={({ item }) => this.renderNewsArticle(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  renderNewsArticle = (article) => {
    // let date = Utils.getFormattedDateStr(item.start_date);
    // let submittedBidCount = item.totalBids;
    return (
      <TouchableHighlight
        onPress={() => this.onTapNewsArticle(article)}>
        <View style={styles.rowContainer}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontSize: 25, fontWeight: 'bold', padding: 5 }}>
              &#8377;{article.title}</Text>
            <Text style={{
              flex: 1, fontSize: 22, fontWeight: 'bold',
              padding: 1, textAlign: 'right', marginRight: 0
            }}>
              {article.author} /</Text>
            <Text style={{
              fontSize: 18, fontWeight: 'normal',
              padding: 1, textAlign: 'right', marginRight: 5, marginTop: 5
            }}>
              {article.description}</Text>
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

  onTapNewsArticle = (article) => {

  }


}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, { httpGet })(NewsListScreen);