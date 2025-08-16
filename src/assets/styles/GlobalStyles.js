import EStyleSheet from 'react-native-extended-stylesheet';
import { ImageBackground } from 'react-native-web';


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
    whMax: {
        width: '100%',
        height: '100%',
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