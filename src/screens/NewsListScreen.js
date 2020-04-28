import {Text,View} from 'react-native'
import React from 'react'
import styles from '../styles/NewsListScreenStyle'

class NewsListScreen extends React.Component
{


  constructor(props)
  {
      super(props);
  }

  
  componentDidMount()
  {

  }



}

const HomeScreen = ()=>{

    return (
        <View style={styles.mainContainer}>
          <Text style={styles.header}>Home Screen </Text>
          <Text style={styles.header}>Home Screen </Text>
          <Text style={styles.header}>Home Screen </Text>
        </View>
      );
}


export default HomeScreen;