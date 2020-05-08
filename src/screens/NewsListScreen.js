import {Text,View,Button} from 'react-native'
import React, {useState} from 'react'
import styles from '../styles/NewsListScreenStyle'
import NewsDetailScreen from './NewsDetailScreen';
import {connect} from 'react-redux';
import {httpGet} from '../actions';
import {newsListApi} from '../server/ApiService';
import {INDIA_COUNTRY_CODE} from '../server/Config';

class NewsListScreen extends React.Component
{


  constructor(props)
  {
      super(props);
      // const [text, setText] = useState("Hello");
  }

  
  componentDidMount()
  {
      //setText("Mello");
  }

  render()
  {
    const { httpGet,isLoading, errorMessage, newsList, newsDetail } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Home Screen </Text>
        {/* <NewsDetailScreen value="Text"/> */}
        <Button
                    loading={isLoading}
                    disabled={isLoading}
                    title='Get News'
                    onPress={() => httpGet(newsListApi.getNewsList(INDIA_COUNTRY_CODE))}
                />
        <this.listItem articles = {newsList}/>      
        <Text> Error - {errorMessage}</Text>        
      </View>
    );
  }

  listItem = (props) =>{
      if(props.articles == null || props.articles === 'undefined')
      return null;
      return(
        <Text>{props.articles.status}</Text>
      );
  }
    
} 

// const HomeScreen = ()=>{
//   const [text, setText] = useState("Hello");
//     return (
//         <View style={styles.mainContainer}>
//           <Text style={styles.header}>{text}</Text>
//     <Button onPress={()=>{setText(text+'1')}} title='PressMe'></Button>
//           <NewsDetailScreen value={text}/>
//         </View>
//       );
// }


//export default NewsListScreen;

const mapStateToProps = state => {
  return { isLoading, errorMessage, newsList, newsDetail } = state.http;
};

const mapDispatchToProps = dispatch =>{
  
};

export default connect(mapStateToProps, { httpGet })(NewsListScreen);