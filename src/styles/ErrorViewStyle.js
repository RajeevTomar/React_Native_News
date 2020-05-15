import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors, ApplicationStyles } from '../themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    mainContainer:{
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    title: {
      fontSize: Fonts.size.large,
      color: Colors.textColor,
      marginBottom:Metrics.doubleBaseMargin,
      alignItems:'center',
      padding:Metrics.doubleBaseMargin,
      fontWeight: 'bold',
      
    },
    image: {
        height:200,
        alignItems:'center',
        resizeMode: 'contain',
        marginTop:Metrics.extraDoubleSection,

    },
    button:{
        alignItems:'center',
        marginTop: Metrics.marginHorizontal,
    }

  })