import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import styles from '../styles/NewsListScreenStyle'
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'


// NOTE - as there can be only single export default so please remove the commented
// export default statement for each TYPE to  execute the file.

/**
 *   TYPE - 1
 * 
 *   Using StateFull Component --
 *   We can use statefull component but this component is just to 
 *    show Articles so no need to use statefull component.
 */
class NewsDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Text style={styles.header}>
        {this.props.article.description}
      </Text>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article.article
  }
}

//export default connect(mapStateToProps)(NewsDetailScreen);



/**
 *  TYPE - 2
 * 
 *  As this component is just to show the article details
 *  so better to use the stateless component
 * 
 *  use hook in stateless component.
 *  Can be used useSelector & useDispatch to support redux
 * 
 *  Using the antoher reducer and sate to save the article.
 *  We can also use the same state those have the list of articles 
 *  and can send the index in prop to fetch the article. See TYPE - 4 more details.
 */
const newsArticleWithAnotherReducerComponent = props => {
  const article = useSelector(state => state.article.article);
  return (
    <Text style={styles.header}>
      {article.title}
    </Text>
  );
}

export default newsArticleWithAnotherReducerComponent;




/**
 *  TYPE - 3
 * 
 *  As this component is just to show the article details
 *  so better to use the stateless component.
 *  We don'/t need to use the redux here we can simple send the 
 *  article object through navigation.
 */
const newsArticleWithoutReduxComponent = props => {
  const article = props.route.params.article;
    return (
      <Text style={styles.header}>
        {article.title}
      </Text>
    );
}

//export default newsArticleWithoutReduxComponent;


/**
 *  TYPE - 4
 * 
 *  As this component is just to show the article details
 *  so better to use the stateless component.
 *  We can use the same reducer that have the state as list of 
 *  articles in store. We can simply send the index to article and
 *  get the article from store based on index
 */

 const newsArticleWithSameReducerComponent = props =>{
    const selectedIndex = props.route.params.index;
    const article = useSelector(state => state.http.newsListResponse.articles[selectedIndex]);
    return (
      <Text style={styles.header}>
        {article.title}
      </Text>
    );
 }

 //export default newsArticleWithSameReducerComponent;