import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
import Post from './../../components/post';
import Expo, {AppLoading, Font} from 'expo';
import styles from './style';
import {FontAwesome} from '@expo/vector-icons';

export default class App extends React.Component {

    state = {
        posts: [],
        loading: false
    };

    static navigationOptions = {
        title: 'Home'
    };

    async componentDidMount() {
        this.setState({loading: true});

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        this.setState({
            posts: posts.map(p => ({...p, pic: `https://picsum.photos/100/100/?random`})),
            loading: false
        });
    }

    deleteItem(itemId) {
        this.setState({
            posts: this.state.posts.filter(({id}) => itemId !== id)
        });
    }

    goToPost(postId) {
        const { navigation } = this.props;
        const post = this.state.posts.find(({id}) => id === postId);

        navigation.navigate('Post', { post });
    }

    renderPost({item}) {
        return (
            <Post {...item}
                  onTrashPressed={this.deleteItem.bind(this)}
                  onItemPressed={this.goToPost.bind(this)}
            />
        );
    }

    render() {

        const {loading} = this.state;

        return (
            <View style={styles.container}>
                {
                    loading
                        ?
                        <ActivityIndicator/>
                        :
                        <FlatList keyExtractor={item => `post-${item.id}`}
                                  data={this.state.posts}
                                  renderItem={this.renderPost.bind(this)}
                        />
                }
            </View>
        );
    }
}
