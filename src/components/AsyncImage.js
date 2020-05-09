import React from 'react';
import { View, Image } from 'react-native';

export default asyncImage = props => {

    const {
        placeholderColor,
        style,
        source
    } = this.props;
    
    return (
        <View
            style={style}>
            <Image
                source={source}
                resizeMode={'contain'}
                style={[
                    style,
                    {
                        position: 'absolute',
                        resizeMode: 'contain'
                    }
                ]}
                onLoad={this._onLoad} />
            {!this.state.loaded &&
                <View
                    style={[
                        style,
                        {
                            backgroundColor: placeholderColor,
                            position: 'absolute'
                        }
                    ]} />
            }

        </View>
    )

}