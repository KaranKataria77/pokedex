/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'#7BF2CB',
        position:'relative'
    },
    pokeimg:{
        position:'absolute',
        top:hp('15%'),
        zIndex:99,
        left:wp('29%')
    },
    firstHalf:{
        width:'100%',
        height:'50%',
    },
    secondHalf:{
        width:'100%',
        height:'50%',
        // borderWidth:1,
        // borderColor:'black',
        backgroundColor:'#fff',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    topView:{
        height: hp('4%'),
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    back:{
        fontSize:RFPercentage(4),
        marginLeft:15,
        color:'#fff'
    },
    favorite:{
        fontSize:RFPercentage(4),
        marginRight:15,
        color:'#fff'
    },
    profileView:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:hp('20%'),
        padding:15,
        justifyContent:'space-between'
    },
    nameView:{
        width:'80%',
        height:'100%',
    },
    abilitiesView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        marginTop:25
    },
    pokename:{
        fontSize:RFPercentage(5),
        letterSpacing: 1.5,
        color:'#fff',
        fontWeight:'600'
    },
    abilities:{
        fontSize:RFPercentage(2),
        fontWeight:'800',
        color:'#fff',
        paddingHorizontal:15,
        paddingVertical:8,
        marginRight:8,
        borderRadius:20,
        backgroundColor: 'rgba(252, 252, 252, .3)',
    },
    pokeidView:{
        height:'90%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    pokeid:{
        fontSize:18,
        fontWeight:'700',
        color:'#fff'
    }
})