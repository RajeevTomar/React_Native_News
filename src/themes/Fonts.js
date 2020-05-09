
const type = {
    regular: 'Robotoslab-Bold',
    bold: 'Robotoslab-Regular',
}

const size = {
    small: 14,
    medium: 16,
    large: 22,
    extraLarge:30
}

const style = {
    small: {
        fontFamily: type.regular,
        fontSize: size.small
    },
    smallBold: {
        fontFamily: type.bold,
        fontSize: size.small
    },
    medium: {
        fontFamily: type.regular,
        fontSize: size.medium
    },
    mediumBold: {
        fontFamily: type.bold,
        fontSize: size.medium
    },
    large: {
        fontFamily: type.regular,
        fontSize: size.large
    },
    largeBold: {
        fontFamily: type.bold,
        fontSize: size.large
    }
}

export default {
    type,
    size,
    style
}