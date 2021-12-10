/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  backIcon: {
    fontSize: 30,
    color: 'black',
  },
  searchView:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F5F6',
    width: wp('90%'),
    height: hp('8%'),
    borderRadius: 10,
    marginTop:20
  },
  searchIconView: {
    width: wp('8%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  search: {
    fontSize: 25,
    color: 'black',
  },
  searchTextView: {
    width: wp('75%'),
    height: 38,
  },
});
