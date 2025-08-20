import EStyleSheet from 'react-native-extended-stylesheet';
import { ImageBackground } from 'react-native-web';
import { Platform } from 'react-native';


export const genBoxShadowStyle = (xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation, shadowColorAndroid, type = "outset"
) => {
    if (Platform.OS === 'ios') {
        return {
            shadowColor: shadowColorIos,
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity,
            shadowRadius,
        };
    } else if (Platform.OS === 'android') {
        return {
            elevation,
            shadowColor: shadowColorAndroid,
        };
    } else if (Platform.OS === 'web') {
        return {
            boxShadow: `${type} ${xOffset}px ${yOffset}px ${shadowRadius}px rgba(0, 0, 0, ${shadowOpacity})`,
        };
    }
};

export const globalVars = EStyleSheet.build({
    $bgColor: '#E0F7FA',
    $primaryColor: '#497EDC',
});

export const globalStyles = EStyleSheet.create({
    bgDefault: {
        backgroundColor: '$bgColor',
    },
    bgPrimaryDefault: {
        backgroundColor: '$primaryColor',
    },
    fonts: {
        regular: "Inter_400Regular",
        bold: "Inter_700Bold",
    },
    whMax: {
        width: '100%',
        height: '100%',
    },
    mAuto: {
        margin: 'auto',
    },
    screenCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceBetweenContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoDefault: {
        width: '30%',
        height: '30%',
        marginTop: '-10%',
    },
    authFooterText: {
        textDecorationLine: 'underline',
        color: '#656565',
        fontSize: '1.5rem',
    },
});