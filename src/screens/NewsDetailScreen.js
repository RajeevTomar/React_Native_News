import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import styles from '../styles/NewsListScreenStyle'
import { connect } from 'react-redux';


class NewsDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }


  render()
  {
    return(
        <Text style={styles.header}>
          {this.props.article}
        </Text>

    );
  }




}

const mapStateToProps = (state) => {
    return {
      article:state.article.article
    }
}


export default connect(mapStateToProps)(NewsDetailScreen);



// const StatelessTest = (props)=>{
//     const [text, setText] = useState(props.value);
//     return(
//         <View style={styles.mainContainer}>
//           <Text style={styles.header}>{props.value}</Text>
//         </View>
//     );  

// }

// export default StatelessTest;

