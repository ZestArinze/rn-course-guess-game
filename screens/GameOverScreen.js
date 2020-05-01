import React from 'react';
import { StyleSheet, View, Text, Button, Image } from "react-native";
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game over</TitleText>

            <View style={styles.imageContainer}>
                <Image 
                    source={ require('../assets/bg-wood.jpg') }
                    // source={{uri: 'https://pixabay.com/photos/textile-jute-brown-fabric-texture-2918844/'}}
                    style={styles.image}
                    resizeMode='cover'
                    fadeDuration={250}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    It took your device{' '}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds 
                    to guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton 
                onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: '#fa34c5',
        overflow: 'hidden',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: '20%',
        marginBottom: 20,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 16,
    },
    highlight: {
        color: Colors.accent,
        fontFamily: 'open-sans-bold',
    },
    
});

export default GameOverScreen;