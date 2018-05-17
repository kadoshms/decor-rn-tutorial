import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesome} from '@expo/vector-icons';

class PostScreen extends React.Component {

    state = {
        loading: true,
        body: null,
        pic: null
    };

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        const {post} = params;

        return {
            title: post.title,
        }
    };

    async componentDidMount() {
        const {params} = this.props.navigation.state;
        const {post} = params;
        const {id} = post;

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();

        this.setState({ loading: false, pic: `https://picsum.photos/500/500/?random`, ...data  });
    }

    render() {

        const { pic, loading, body } = this.state;

        if (loading) {
            return <ActivityIndicator />
        }

        return (
            <View>
                <Image source={{ url: pic }} style={styles.pic} />
                <Text>{body}</Text>
            </View>
        )
    }
}

PostScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pic: {
        width: 500,
        height: 500
    }
});

export default PostScreen;
