import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';

import screenNameConstants from './src/constants/screenNames';
import theme from './src/styles/theme';
import HomeScreen from './src/screens/home/HomeScreen';
import QuestionScreen from './src/screens/question/QuestionScreen';
import QuestionAnalysisScreen from './src/screens/questionAnalysis/QuestionAnalysisScreen';
import QuestionAttemptScreen from './src/screens/questionAttempt/QuestionAttemptScreen';
import QuestionAttemptResultScreen from './src/screens/questionAttemptResult/QuestionAttemptResultScreen';
import getStore from './src/redux/store';

const NavigationStack = createStackNavigator({
    [screenNameConstants.HOME]: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
    [screenNameConstants.QUESTION]: {
        screen: QuestionScreen,
        navigationOptions: {
            header: null,
        },
    },
    [screenNameConstants.QUESTION_ANALYSIS]: {
        screen: QuestionAnalysisScreen,
        navigationOptions: {
            header: null,
        },
    },
    [screenNameConstants.QUESTION_ATTEMPT]: {
        screen: QuestionAttemptScreen,
        navigationOptions: {
            header: null,
        },
    },
    [screenNameConstants.QUESTION_ATTEMPT_RESULT]: {
        screen: QuestionAttemptResultScreen,
        navigationOptions: {
            header: null,
        },
    },
}, {
    initialRouteName: screenNameConstants.HOME,
});
const NavigationContainer = createAppContainer(NavigationStack);

const store = getStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer/>
                </ThemeProvider>
            </Provider>
        );
    }
}
