import React, { useState, useEffect } from 'react';
import {Text,View} from 'react-native'
import styles from '../styles/NewsListScreenStyle'


const StatelessTest = (props)=>{
    const [text, setText] = useState(props.value);
    return(
        <View style={styles.mainContainer}>
          <Text style={styles.header}>{props.value}</Text>
        </View>
    );  

}

export default StatelessTest;