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
      color: Colors.coal,
       padding: Metrics.baseMargin,
       backgroundColor:Colors.ricePaper,
      fontWeight: 'bold',
      alignItems:'center',

    },
    image: {
        height:'100%',
        position: "absolute",
        width:'100%',
    },
    circleView:{
      width:Metrics.images.medium,
      height:Metrics.images.medium,
      borderRadius:Metrics.images.small,
      backgroundColor:Colors.windowTint,
      position:'absolute',
      marginTop:Metrics.navBarHeight,
      marginLeft:Metrics.doubleBaseMargin,
    },
    circleImage:{
      width:Metrics.images.medium,
      height:Metrics.images.medium,
    }

  })