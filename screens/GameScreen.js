import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomNumner = (min, max, exclude) =>  {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min) + min);

    if(randNum === exclude) {
        return generateRandomNumner(min, max, exclude);
    }

    return randNum;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumner(1, 100, props.userChoice));
    return (
        <View>

        </View>
    );
};

const styles = StyleSheet.create({

});

export default GameScreen;