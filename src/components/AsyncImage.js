import React from 'react';
import { View, Image } from 'react-native';

export default asyncImage = props => {

    const {
        placeholderColor,
        style,
        imageUrl
    } = props;

    if (imageUrl == null)
        return null;
    let uri = {
        uri: imageUrl
    };
    return (
        <View
            style={style}>
            <Image
                source={uri}
                resizeMode={'cover'}
                style={
                    style
                }
            />
        </View>
    )

}