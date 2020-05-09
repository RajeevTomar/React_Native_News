import React from 'react';
import { Text, View } from 'react-native'
import styles from '../styles/NewsArticleStyle'



export default newsArtilceUI = (props) => {
  const article = props.article;
  return (
    <Text style={styles.title}>
      {article.title}
    </Text>
  );
} 