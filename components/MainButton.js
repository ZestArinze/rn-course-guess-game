import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Colors from "../constants/colors";


const MainButton = (props) => {
    return (
        <TouchableOpacity 
            activeOpacity='0.7' 
            onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        textAlign: 'center'
    },
});

export default MainButton;