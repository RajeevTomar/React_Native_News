import { StyleSheet } from 'react-native'
import {Fonts,Metrics,Colors,ApplicationStyles} from '../themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    header:{
       ...Fonts.size.large,
       color:Colors.red,
       backgroundColor: Colors.eggplant,
       marginTop: Metrics.marginHorizontal

    },
    container: {
      paddingBottom: Metrics.baseMargin
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