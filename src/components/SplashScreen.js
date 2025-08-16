import { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build({
    $bgColor: '#E0F7FA',
    $primaryColor: '#497EDC',
});

const styles = EStyleSheet.create(
    {
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            width: '50%',
            height: '50%',
            marginTop: '-20%',
        },
        loadingBalls: {
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center',
        },
        ball: {
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: '$primaryColor',
        }
    }
)

export const SplashScreen = () => {
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

    return (
        <View style={styles.screen}>
            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain' />
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