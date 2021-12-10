/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    tabNav:{
        borderTopRightRadius: 30,
        borderTopLeftRadius:30,
        marginTop:25,
    },
    aboutScreen:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        padding:15 
    },
    aboutView:{
        display:'flex',
        flexDirection:'column',
        paddingHorizontal:15,
        height: '80%',
        width: '100%'
    },
    aboutTextView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    aboutTextView1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    abilityView:{
        display:'flex',
        flexDirection:'row',
        width:'55%',
    },
    ability:{
        fontSize:14,
        fontWeight:'800',
        color:'#A09A9A'
    },
    ability1:{
        fontSize:15,
        fontWeight:'800',
        color:'black'
    },
    abilityText:{
        fontSize:14,
        fontWeight:'600',
        color:'black'
    },
    stats:{
        height:'65%',
        width: '100%',
        paddingHorizontal:15,
    },
    statsView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:6
    },
    statsValue:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'70%',
        justifyContent:'space-between',
    },
    statsText:{
        fontSize:14,
        fontWeight:'800',
        color:'#A09A9A'
    },
    statsNum:{
        fontSize:14,
        fontWeight:'800',
        color:'black'
    },
    typeView:{
        marginTop:10,
        paddingLeft:15
    },
    type:{
        fontSize:15,
        fontWeight:'700',
        color:'black'
    },
    typeText:{
        fontSize:15,
        fontWeight:'800',
        color:'#A09A9A',
        marginTop:7
    }
})