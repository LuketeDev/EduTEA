import { Text, View } from "react-native-web"
import { genBoxShadowStyle, globalStyles, globalVars } from "../assets/styles/GlobalStyles"
import EStyleSheet from "react-native-extended-stylesheet"
import Slider from "@react-native-community/slider"
import { Platform } from "react-native"
import { ButtonDefault } from "./ButtonDefault"
import { use, useEffect, useState } from "react"

const vWidth = window.innerWidth;

const questionFS = 20 + vWidth * 0.01;
const subQuestionFS = 10 + vWidth * 0.01;
const styles = EStyleSheet.create({
    ...globalStyles,
    questionCard: {
        width: '85%',
        height: '60%',
        backgroundColor: '#ECFFFF',
        borderRadius: 16,
    },
    cardShadow: genBoxShadowStyle(0, 0, '#000000', 0.25, 15, 4, '#000000', ''),
    questionText: {
        fontFamily: globalStyles.fonts.regular,
        fontSize: questionFS,
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '1%',
        width: '75%',
    },
    subQuestionText: {
        fontFamily: globalStyles.fonts.regular,
        fontSize: subQuestionFS,
        textAlign: 'center',
        marginBottom: '5%',
        width: '75%',
    },
    sliderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        height: '12%',
        marginBottom: '4%',
    },
    sliderBG: {
        position: 'absolute',
        top: 15,
        width: `100%`,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#a0a0a0ff',
    },
    sliderShadow: genBoxShadowStyle(0, 0, '#000000', 1, 3, 1, '#000000', 'inset'),
    slider: {
        width: '100%',
    },
})


export const QuestionCard = ({ questions, endMethod }) => {
    // consts
    const [value, setValue] = useState(0);
    const [currQuestionIdx, setCurrQuestionIdx] = useState(0);
    const [answers, setAnswers] = useState([]);

    const min = -5;
    const max = 5;
    const mid = (min + max) / 2;

    // style
    const sliderTrack = {
        position: 'absolute',
        top: 15,
        left: `${50}%`,
        width: `${Math.abs(value - mid) * 9.5}%`,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#2a5090ff',
        transform: [
            {
                translateX: value < mid
                    ? `-${100}%`
                    : 0
            }
        ],
    }

    // functions
    useEffect(() => {
        setValue(mid); // Resets slider for first question
    }, [currQuestionIdx]);
    const handleNext = () => {
        // console.log(value);
        const currAnswers = [...answers, value];
        setValue(mid); // Resets slider for next question
        if (currQuestionIdx !== questions.length - 1) {
            setAnswers(currAnswers);
            setCurrQuestionIdx(currQuestionIdx + 1);
        } else {
            // Fim do questionário
            endMethod(currAnswers);
            setCurrQuestionIdx(0);
            setAnswers([]);
        }
    }

    //TODO Fix setValue on previous question
    //Should reset the slider to the previous answer
    const handlePrev = () => {
        if (currQuestionIdx > 0) {
            // console.log(answers[currQuestionIdx - 1]);
            setCurrQuestionIdx(currQuestionIdx - 1);
            setValue(answers[currQuestionIdx - 1]); // Resets slider to previous answer
        }
    }

    return (
        <View style={[styles.questionCard, styles.centerContent, styles.cardShadow, styles.mAuto]}>
            <View style={[styles.centerContent, { width: '75%' }]}>
                <Text style={styles.questionText}>
                    {questions[currQuestionIdx]}
                </Text>
                <Text style={styles.subQuestionText}>
                    Marque o que melhor te define
                </Text>
            </View>
            <View style={styles.sliderContainer}>
                <View style={{ position: 'relative', width: '100%', height: 40, justifyContent: 'center' }}>
                    {/* Custom slider background */}
                    <View
                        style={[styles.sliderBG, styles.sliderShadow]}
                    />

                    {/* Custom fill track */}
                    <View
                        style={sliderTrack}
                    />
                    <Slider
                        style={styles.slider}
                        minimumValue={min}
                        maximumValue={max}
                        step={1}
                        value={value}
                        onValueChange={(e) => { setValue(e); }}
                        minimumTrackTintColor="transparent"
                        maximumTrackTintColor="transparent"
                        thumbTintColor={'#497EDC'}
                    />
                </View>
            </View>
            <ButtonDefault title={"Próxima"} onPress={handleNext} size={['75%', '12%']} border={16} />
            <ButtonDefault title={"Anterior"} onPress={handlePrev} size={['75%', '12%']} border={16} />
            <Text style={styles.subQuestionText}>
                Pergunta {currQuestionIdx + 1} de {questions.length}
            </Text>
        </View>
    )
}