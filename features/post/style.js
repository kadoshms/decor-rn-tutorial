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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pic: {
        width: 500,
        height: 200,
    },
    wrapper:{
        flex:1,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    cardWrapper:{
        flex:1,
        flexDirection: 'row',
    },

    title:{
        marginTop:10,
        fontWeight:'bold',
        color:'$primaryColor',
        marginBottom:10
    },
    text:{
        color:'#555'
    },

    button:{
        flex:1,
        flexDirection:'row',
        alignSelf: 'flex-start',
        alignItems:'center',
        marginVertical:10,
        // borderColor: '$primaryColor',
        // borderWidth:1,
        padding:5,
        borderRadius:4,
        backgroundColor:'$primaryColor'
    },
    buttonText:{
        color:'#fff',
        marginStart:5
    },

});