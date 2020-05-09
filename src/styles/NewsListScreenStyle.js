import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors, ApplicationStyles } from '../themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  newsItemContainer: {
    backgroundColor: Colors.coal,
    marginLeft: Metrics.smallMargin,
    marginRight: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    padding: Metrics.smallMargin,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff'
  },
  title: {
    fontSize: Fonts.size.large,
    color: Colors.snow,
    marginTop: Metrics.marginHorizontal,
    flex: 1,
    fontWeight: 'bold',
    padding: Metrics.smallMargin,
  },
  bottomView: {
    marginBottom: Metrics.smallMargin,
    padding: Metrics.smallMargin,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  url: {
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    marginTop: Metrics.marginHorizontal,
    fontWeight: 'normal',
    justifyContent:'flex-start',
    padding: Metrics.smallMargin,
  },
  date: {
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    marginTop: Metrics.marginHorizontal,
    fontWeight: 'normal',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding: Metrics.smallMargin,
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