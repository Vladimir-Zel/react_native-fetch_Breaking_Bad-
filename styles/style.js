import {StyleSheet} from "react-native-web";

export const globStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 26,
        color: '#333',
        marginBottom: 20
    },
    image: {
        flex: 1,
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
    text: {
        color: '#474747',
        flex: 1,
    },
    container: {
        flexDirection: 'row-reverse',
        marginTop: 10,
    },
    imageBig: {
        width: 200,
        height: 160,
        resizeMode: 'contain',
    }
})
