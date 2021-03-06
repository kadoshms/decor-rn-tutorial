/**
 * Created by mor on 17/05/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import React from 'react';
import styles from './style';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Post = (props) => {
    const { id, title, body, pic, onTrashPressed, onItemPressed } = props;

    return (
        <TouchableWithoutFeedback onPress={() => onItemPressed(id)}>
            <View>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Image style={styles.pic} source={{ url: pic }} />
                <TouchableOpacity onPress={() => onTrashPressed(id)}>
                    <FontAwesome name="trash" size={25} />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    onTrashPressed: PropTypes.func.isRequired,
    onItemPressed: PropTypes.func.isRequired
};

export default Post;