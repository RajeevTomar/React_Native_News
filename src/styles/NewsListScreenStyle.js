import { StyleSheet } from 'react-native'
import {Fonts,Metrics,Colors,ApplicationStyles} from '../themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    header:{
       ...Fonts.size.large,
       color:Colors.red,
       marginTop: Metrics.marginHorizontal

    },
    container: {
      backgroundColor: Colors.coal,
      marginLeft: Metrics.smallMargin,
      marginRight:Metrics.smallMargin,
      marginBottom:Metrics.smallMargin,
      padding:Metrics.smallMargin
    },
    logo: {
      marginTop: Metrics.doubleSection,
      height: Metrics.images.logo,
      width: Metrics.images.logo,
      resizeMode: 'contain'
    },
    centered: {
      alignItems: 'center'
    }
  })