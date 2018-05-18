/**
 * Created by mor on 17/05/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



export default EStyleSheet.create({
    wrapper:{
      flex:1,
        paddingTop:'.6rem',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    cardWrapper:{
      flex:1,
        flexDirection: 'row',
    },
    textWrapper:{
       width:'100%-6.5rem',
    },
    title:{
        fontWeight:'bold',
        color:'$primaryColor',
        marginBottom:'.5rem'
    },
    text:{
        color:'#555'
    },
    picWrapper: {
        width: '6.5rem',
        height: '6.5rem',
        alignItems:'center',
        justifyContent: 'flex-start'
    }
    ,
    button:{
        flex:1,
        flexDirection:'row',
        alignSelf: 'flex-start',
        alignItems:'center',
        marginVertical:'.6rem',
        // borderColor: '$primaryColor',
        // borderWidth:1,
        padding:'.4rem',
        borderRadius:4,
        backgroundColor:'$primaryColor'
    },
    buttonText:{
        color:'#fff',
        marginStart:'.3rem'
    },
    pic:{
        width:'70%',
        height:'70%'
    }
});