import React from 'react';
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';
import styles from '../styles/ErrorViewStyle';
import { NETWORK_ERROR_TYPE, HTTP_ERROR_TYPE } from '../Constants';

const ErrorView = ({ error, actionText, action }) => {
    if(error == null || error == 'undefined')
        error = {
            errorType:HTTP_ERROR_TYPE,
            errorMessage:'Some went wrong. Please try again.'
        };
    // change image based on error Type
    let imageSource = {
        requiredPath:null
    };
    switch (error.errorType) {
        case HTTP_ERROR_TYPE:
            imageSource.requiredPath = require('../images/no_data_found.png');
            break;
        case NETWORK_ERROR_TYPE:
            imageSource.requiredPath = require('../images/no_connection.png');
            break;
    }
    return (
        <View style={styles.mainContainer}>
            {/* Error Image    */}
            <Image style={styles.image} source={imageSource.requiredPath} />
            {/* Error Title    */}
            <Text style={styles.title}>{error.errorMessage}</Text>
            {/* Action button */}
            <Button onPress = {action} style={styles.button} title={actionText} />
        </View>

    );
}

export default ErrorView;