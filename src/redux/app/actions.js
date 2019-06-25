import _ from 'lodash';

export const actionTypes = {
    RESET: 'app/RESET',
    SET_ACTIVE_QUESTION: 'app/SET_ACTIVE_QUESTION',
    SET_ACTIVE_QUESTION_SELECTED_CHOICES: 'app/SET_ACTIVE_QUESTION_SELECTED_CHOICES',
    SET_ACTIVE_QUESTION_ATTEMPT_RESULT: 'app/SET_ACTIVE_QUESTION_ATTEMPT_RESULT',
    RESET_ACTIVE_QUESTION_ATTEMPT_DATA: 'app/RESET_ACTIVE_QUESTION_ATTEMPT_DATA',
};

export const actions = {
    reset() {
        return {
            type: actionTypes.RESET,
        };
    },

    setActiveQuestion({ questionId, selectedChoiceIds=[] }) {
        return {
            type: actionTypes.SET_ACTIVE_QUESTION,
            payload: {
                questionId,
                selectedChoiceIds,
            },
        };
    },

    setActiveQuestionSelectedChoices({ selectedChoiceIds=[] }) {
        return {
            type: actionTypes.SET_ACTIVE_QUESTION_SELECTED_CHOICES,
            payload: {
                selectedChoiceIds,
            },
        };
    },

    setActiveQuestionAttemptResult({ result }) {
        return {
            type: actionTypes.SET_ACTIVE_QUESTION_ATTEMPT_RESULT,
            payload: {
                result,
            },
        };
    },

    resetActiveQuestionAttemptData() {
        return {
            type: actionTypes.RESET_ACTIVE_QUESTION_ATTEMPT_DATA,
        };
    },

    // Thunk for starting the quiz
    startQuiz() {
        return async (dispatch, getState, { api }) => {
            try {
                const state = getState();
                const { questionsIds } = state.app;

                // Bail out if there are no questions
                if (!questionsIds.length) {
                    return new Error('No questions available');
                }

                const firstQuestionId = questionsIds[0];
                dispatch(actions.setActiveQuestion({ questionId: firstQuestionId }));
            } catch(e) {
                return e;
            }
        };
    },

    // Thunk for toggling selection of a particular choice
    toggleActiveQuestionChoiceSelection({ questionId, choiceId }) {
        return async (dispatch, getState, { api }) => {
            try {
                const state = getState();
                const { activeQuestionId, activeQuestionSelectedChoiceIds } = state.app;

                // Bail out if there is no active question
                if (!activeQuestionId) {
                    return new Error('No active question');
                }

                // Bail out if  active question is different
                if (activeQuestionId != questionId) {
                    return new Error('Active question mismatch');
                }

                const newSelectedChoiceIds = activeQuestionSelectedChoiceIds.includes(choiceId)
                    ? _.without(activeQuestionSelectedChoiceIds, choiceId)
                    : _.union(activeQuestionSelectedChoiceIds, [choiceId]);
                dispatch(actions.setActiveQuestionSelectedChoices({ selectedChoiceIds: newSelectedChoiceIds }));
            } catch(e) {
                return e;
            }
        };
    },

    submitActiveQuestionAnswer({ questionId }) {
        return async (dispatch, getState, { api }) => {
            try {
                const state = getState();
                const { activeQuestionId } = state.app;

                // Bail out if there is no active question
                if (!activeQuestionId) {
                    return new Error('No active question');
                }

                // Bail out if  active question is different
                if (activeQuestionId != questionId) {
                    return new Error('Active question mismatch');
                }

                // Set a random answer
                const answerResultChoices = ['correct', 'incorrect'];
                const result = answerResultChoices[_.random(0, 1)];
                dispatch(actions.setActiveQuestionAttemptResult({ result }));
            } catch(e) {
                return e;
            }
        };
    },
};