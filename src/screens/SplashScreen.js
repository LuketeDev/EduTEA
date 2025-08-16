import { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { globalStyles, globalVars } from '../assets/styles/GlobalStyles';

const styles = EStyleSheet.create(
    {
        ...globalStyles,
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        splashLogo: {
            width: '50%',
            height: '50%',
            marginTop: '-20%',
        },
        loadingBalls: {
            marginTop: 32,
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center',
        },
        ball: {
            width: '2rem',
            height: '2rem',
            borderRadius: '1rem',
            backgroundColor: '$primaryColor',
        }
    }
)

export const SplashScreen = ({ navigation }) => {
    const balls = Array.from({ length: 3 }, () => useRef(new Animated.Value(0)).current);

    const animateBall = (delay) => {
        const idxs = [2, 1, 0];
        const animationSequence = Animated.sequence(
            idxs.map(idx =>
                Animated.timing(balls[idx], {
                    toValue: -10,
                    duration: 200,
                    delay,
                    useNativeDriver: true,
                })
            ).concat(
                idxs.map(idx =>
                    Animated.timing(balls[idx], {
                        toValue: 0,
                        duration: 200,
                        delay,
                        useNativeDriver: true,
                    })
                ))
        );

        Animated.loop(
            animationSequence
        ).start();
    }
    useEffect(() => {
        balls.forEach((ball, i) => {
            animateBall(i * 50)
        });
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={[styles.screenCenter, styles.bgDefault]}>
            <Image source={require('../assets/images/logo.png')} style={styles.splashLogo} resizeMode='contain' />
            <View style={styles.loadingBalls}>
                {
                    balls.map((ball, i) => (
                        <Animated.View key={i} style={[styles.ball, { transform: [{ translateY: ball }] }]} />
                    ))
                }
            </View>
        </View>
    )
}