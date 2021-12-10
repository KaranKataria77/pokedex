/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    page: {
        padding: 11,
        flex:1,
        backgroundColor:'#fff',
        position:'relative'
    },
    pokenameView:{
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        borderColor:'black',
        borderWidth:1,
        width:'50%'
    },
    headerView:{
        marginVertical:hp('4%'),
        height:hp('11%'),
        display:'flex',
        flexDirection:'column',
        width:wp('50%'),
        justifyContent:'space-between',
        marginLeft:10
    },
    headerBack:{
        fontSize:30,
    },
    heading:{
        fontSize:28,
        color:'black',
        fontWeight:'800'
    },
    searchView:{
        backgroundColor:'red',
        borderRadius:50,
        width:50,
        height:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:hp('85%'),
        right: 35,
        zIndex:99
    },
    search:{
        fontSize:30,
        color:'#fff',
    },
    abilities:{
        fontSize:11,
        fontWeight:'800',
        color:'#fff',
        backgroundColor: 'rgba(252, 252, 252, .3)',
        borderRadius:10,
        paddingVertical:6,
        paddingHorizontal:10,
        marginTop:4,
    },
    pokeimgView:{
        height:'100%',
        width:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        // borderWidth:1,
        // borderColor:'pink'
    },
    abilitiesView:{
        height:'100%',
        width:'48%',
        // borderWidth:1,
        // borderColor:'black',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        marginLeft:3
    },
    pokename:{
        fontSize:16,
        fontWeight: '800',
        color:'#fff',
        position:'absolute',
        top: 30,
        left:15
    },
    favorite:{
        fontSize:20,
        position:'absolute',
        top:15,
        right:15,
        color:'#fff'
    },
    pokecard:{
        width: wp('43%'),
        height:hp('20%'),
        backgroundColor:'#7BF2CB',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        padding:10,
        alignItems:'flex-end',
        position:'relative',
        marginHorizontal:8,
        marginVertical: 8
    },
    alignView:{
        height:'70%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
    },
    pokeimg:{
        width: 50,
        height:50
    }
})