import React from 'react';
import { Text, View } from 'react-native'
import styles from '../styles/NewsArticleStyle'
import AsyncImage from '../components/AsyncImage';
import { Colors } from '../themes';
import Utils from '../utils/Utils';



export default newsArtilceUI = (props) => {
  const article = props.article;
  let articleDate = new Date(article.publishedAt);
  let date = Utils.getFormattedDate(articleDate, '-');
  return (
    <View style={styles.mainContainer}>
      <AsyncImage style={styles.image}
        source={{
          uri: article.urlToImage
        }}
        placeholderColor={Colors.background} />
      <View style={styles.articleContentView}>
        <Text numberOfLines={3} style={styles.title}>
          {article.title}
        </Text>
        <View style={styles.sourceDateView}>
          <Text style={styles.source}>
            {article.source.name}</Text>
          <Text style={styles.date}>
            {date}</Text>
        </View>
      <Text style={styles.description}>{article.description}</Text>
      </View>


    </View>

  );
} 