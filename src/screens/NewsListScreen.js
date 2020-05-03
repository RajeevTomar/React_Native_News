import {Text,View,Button} from 'react-native'
import React, {useState} from 'react'
import styles from '../styles/NewsListScreenStyle'
import NewsDetailScreen from './NewsDetailScreen';

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
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Home Screen </Text>

        <NewsDetailScreen value="Text"/>
      </View>
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


export default NewsListScreen;