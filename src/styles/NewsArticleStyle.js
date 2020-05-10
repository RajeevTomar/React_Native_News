import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors, ApplicationStyles } from '../themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    title: {
      fontSize: Fonts.size.doubleExtraLarge,
      color: Colors.textColor,
      marginTop: Metrics.marginHorizontal,
      marginLeft: Metrics.smallMargin,
      marginRight: Metrics.smallMargin,
      padding:Metrics.baseMargin,
      fontWeight: 'bold',
      alignItems:'center'
    },
    articleContentView: {
      padding: Metrics.smallMargin,
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
      backgroundColor:Colors.windowTint,
      paddingBottom:Metrics.doubleSection,
    },
    sourceDateView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      margin:Metrics.baseMargin,
    },
    source: {
      fontSize: Fonts.size.large,
      color: Colors.textColor,
      marginTop: Metrics.marginHorizontal,
      fontWeight: 'normal',
      justifyContent:'flex-start',
      flex:1,
      alignItems:'flex-start',
      padding: Metrics.smallMargin,
    },
    date: {
      fontSize: Fonts.size.large,
      color: Colors.textColor,
      marginTop: Metrics.marginHorizontal,
      fontWeight: 'normal',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      padding: Metrics.smallMargin,
    },
    description: {
      fontSize: Fonts.size.medium,
      color: Colors.sourceColor,
       padding: Metrics.baseMargin,
      fontWeight: 'normal',
      alignItems:'center',

    },
    image: {
        height:'100%',
        position: "absolute",
        width:'100%',
    }
  })