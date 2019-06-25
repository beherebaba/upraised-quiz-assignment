import typeToReducer from 'type-to-reducer';
import { actionTypes } from './actions';

function getInitialState() {
    return {
        config: {},
        questionsIds: [1, 2],
        questionsById: {
            1: {
                id: 1,
                text: 'How do you judge what should be added into next version of an app?',
                choices: [
                    {
                        id: 1,
                        text: 'Data Analysis',
                    },
                    {
                        id: 2,
                        text: 'Personal Feeling',
                    },
                    {
                        id: 3,
                        text: 'User\'s feedback',
                    },
                    {
                        id: 4,
                        text: 'Copy from similar product',
                    },
                    {
                        id: 5,
                        text: 'Make a questionary',
                    },
                ]
            },
            2: {
                id: 2,
                text: 'Was it a correct decision?',
                choices: [
                    {
                        id: 1,
                        text: 'Yes',
                    },
                    {
                        id: 2,
                        text: 'No',
                    },
                    {
                        id: 3,
                        text: 'Not sure',
                    },
                ]
            },
        },
        activeQuestionId: null,
        activeQuestionSelectedChoiceIds: [],
        activeQuestionAttemptResult: null,
    };
}

export default typeToReducer({
    [actionTypes.RESET] () {
        return getInitialState();
    },

    [actionTypes.SET_ACTIVE_QUESTION] (state, { payload }) {
        const { questionId, selectedChoiceIds } = payload;
        return {
            ...state,
            activeQuestionId: questionId,
            activeQuestionSelectedChoiceIds: selectedChoiceIds,
            activeQuestionAttemptResult: null,
        };
    },

    [actionTypes.SET_ACTIVE_QUESTION_SELECTED_CHOICES] (state, { payload }) {
        const { selectedChoiceIds } = payload;
        return {
            ...state,
            activeQuestionSelectedChoiceIds: selectedChoiceIds,
        };
    },

    [actionTypes.SET_ACTIVE_QUESTION_ATTEMPT_RESULT] (state, { payload }) {
        const { result } = payload;
        return {
            ...state,
            activeQuestionAttemptResult: result,
        };
    },

    [actionTypes.RESET_ACTIVE_QUESTION_ATTEMPT_DATA] (state) {
        return {
            ...state,
            activeQuestionSelectedChoiceIds: [],
            activeQuestionAttemptResult: null,
        };
    },
    
}, getInitialState());
