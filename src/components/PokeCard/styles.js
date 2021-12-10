/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    pokecard:{
        width: wp('43%'),
        height:hp('20%'),
        backgroundColor:'#E1AA8A',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        padding:10,
        alignItems:'flex-end',
        position:'relative',
        marginHorizontal:8,
        marginVertical: 8
    },
    pokename:{
        fontSize:RFPercentage(2),
        fontWeight: '800',
        color:'#fff',
        position:'absolute',
        top: 30,
        left:15
    },
    fav:{
        position:'absolute',
        top:15,
        right:15,
        zIndex:99,
    },
    favorite:{
        fontSize:RFPercentage(3),
        color:'#fff',
    },
    alignView:{
        height:'70%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
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
    abilities:{
        fontSize:RFPercentage(1.5),
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
    pokeimg:{
        width: 50,
        height:50
    }
})