import { useState } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { globalStyles } from '../assets/styles/GlobalStyles';

const styles = EStyleSheet.create({
    ...globalStyles,
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: '10%',
        borderRadius: 24,
        borderWidth: 1,
        paddingHorizontal: '1.25rem',
        marginBottom: 24,
        padding: '1.25rem'
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 16,
    },
    input: {
        flex: 1,
        fontSize: '1.25rem',
        width: '100%',
        justifyContent: 'center',
        marginBottom: '0.25rem',
        border: 'none',
        outlineStyle: 'none',
    }
});


export const AuthField = ({ type, icon, password, onChangeText, value }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordPress = () => {
        setShowPassword(!showPassword);
    }
    return (
        <View style={styles.inputContainer}>
            <Image source={icon} style={styles.icon} />
            <TextInput
                style={[styles.input, { backgroundColor: 'white' }]}
                placeholder={type}
                placeholderTextColor="rgba(0,0,0,0.6)"
                secureTextEntry={password && !showPassword}
                onChangeText={onChangeText}
                value={value}
            />
            {password && (

                <Pressable onPress={handlePasswordPress}>
                    <Image source={showPassword ? require('../assets/images/password_showing.png') : require('../assets/images/password_hiding.png')} style={styles.icon} />
                </Pressable>

            )}
        </View>
    );
};
