import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { render } from 'react-dom';

const TitleText = props => {
    return (
        <Text style={{ ...styles.title, ...props.style }}>{ props.children }</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    }
});

export default TitleText;