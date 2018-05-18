import React from 'react';
import {ActivityIndicator, Image, StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import {FontAwesome} from '@expo/vector-icons';

class PostScreen extends React.Component {

    state = {
        loading: true,
        body: null,
        pic: null,
        title:null
    };

    // static navigationOptions = ({navigation}) => {
    //     const {params} = navigation.state;
    //     const {post} = params;
    //     //
    //     // return {
    //     //     title: post.title,
    //     // }
    // };

    async componentDidMount() {
        const {params} = this.props.navigation.state;
        const {post} = params;
        const {id} = post;

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();

        this.setState({ loading: false, pic: `https://picsum.photos/500/500/?random`, ...data  });
    }

    render() {

        const { pic, loading, body,title } = this.state;

        if (loading) {
            return <ActivityIndicator />
        }

        return (
            <View style={styles.container}>
                <Image source={{ url: pic }} style={styles.pic} />
                <Text style={styles.title}>{title.toUpperCase()}</Text>
                <Text style={styles.text}>{body}</Text>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="trash" size={25} color={'#fff'} /><Text style={styles.buttonText}>DELETE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

PostScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};



export default PostScreen;
