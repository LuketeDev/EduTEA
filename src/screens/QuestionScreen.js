import { View, Text } from "react-native-web"
import { QuestionCard } from "../components/QuestionCard"
import EStyleSheet, { absoluteFill } from "react-native-extended-stylesheet"
import { globalStyles } from "../assets/styles/GlobalStyles"
import AsyncStorage from "@react-native-async-storage/async-storage"

const questions = [
    "Questão 1",
    "Questão 2",
    "Questão 3",
    "Questão 4",
    "Questão 5",
]

const vWidth = window.innerWidth;
const headerFontSize = 20 + vWidth * 0.01;

const styles = EStyleSheet.create({
    ...globalStyles,
    headerText: {
        fontFamily: globalStyles.fonts.regular,
        fontSize: headerFontSize,
        textAlign: 'center',
        marginVertical: 40,
        width: '75%',
        position: 'absolute',
        left: '12.5%',
    }
})


export const QuestionScreen = ({ navigation }) => {
    const saveAnswers = async (answers) => {
        try {
            await AsyncStorage.setItem('@user_answers', JSON.stringify(answers))
            log = await AsyncStorage.getItem('@user_answers')
            console.log('salvo!');
            console.log(answers);
            console.log(log)
            navigation.replace('Splash');
        } catch (err) {
            console.error('Erro ao salvar respostas:', err);
        }
    }
    return (
        <View style={[styles.bgDefault, styles.whMax, { flex: 1 }]}>
            <Text style={styles.headerText}>
                Queremos conhecer mais sobre você!
            </Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <QuestionCard questions={questions} endMethod={saveAnswers} />
            </View>
        </View >

    )
}