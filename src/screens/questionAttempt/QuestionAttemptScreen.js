import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/native';
import _ from 'lodash';

import screenNameConstants from './../../constants/screenNames';
import { actions as appActions } from './../../redux/app/actions';
import QuestionTile from './../../components/question/QuestionTile';
import ChoiceList from './ChoiceList';
import Button from './../../components/shared/button/Button';
import NavigationHeader from './../../components/shared/navigation/NavigationHeader';
import BackButton from './../../components/shared/navigation/BackButton';
import labelFromIndex from './../../utils/labelFromIndex';

const Root = styled.ScrollView(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background,
    padding: 16,
    paddingTop: 0,
}));

const StyledChoiceList = styled(ChoiceList)(props => ({
    marginTop: 20,
}));

const SubmitButton = styled(Button)(props => ({
    margin: 24,
    marginTop: 36,
}));

class QuestionAttemptScreen extends Component {
    handleNavigationBackBtnPress = () => {
        this.props.navigation.goBack();
    };

    handleChoicePress = ({ choice }) => {
        this.props.appActions.toggleActiveQuestionChoiceSelection({
            questionId: this.props.activeQuestionId,
            choiceId: choice.id,
        });
    };

    handleSubmitBtnPress = async () => {
        const result = await this.props.appActions.submitActiveQuestionAnswer({
            questionId: this.props.activeQuestionId,
        });
        if (result instanceof Error) return;
        this.props.navigation.replace(screenNameConstants.QUESTION_ATTEMPT_RESULT);
    };

    render() {
        const { activeQuestion, activeQuestionSelectedChoiceIds, activeQuestionIndex, totalQuestionCount } = this.props;
        if (!activeQuestion) return null;

        const choices = activeQuestion.choices.map((choice, index) => {
            return {
                ...choice,
                isSelected: activeQuestionSelectedChoiceIds.includes(choice.id),
                label: labelFromIndex(index),
            };
        });

        return (
            <Root>
                <NavigationHeader>
                    <BackButton onPress={this.handleNavigationBackBtnPress}/>
                </NavigationHeader>

                <QuestionTile
                    question={activeQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                    totalQuestionCount={totalQuestionCount}
                />
                <StyledChoiceList
                    choices={choices}
                    onChoicePress={this.handleChoicePress}
                />
                <SubmitButton
                    text="Submit"
                    disabled={!activeQuestionSelectedChoiceIds.length}
                    onPress={this.handleSubmitBtnPress}
                />
            </Root>
        );
    }
}

/*
 * TODO: Move the shared logic to a reusable selector
 */
function mapStateToProp(state) {
    const { activeQuestionId, activeQuestionSelectedChoiceIds, questionsIds, questionsById } = state.app;
    const totalQuestionCount = questionsIds.length;
    const activeQuestionIndex = questionsIds.indexOf(activeQuestionId);
    const activeQuestion = activeQuestionIndex >= 0 && activeQuestionId in questionsById
        ? questionsById[activeQuestionId]
        : null;

    return {
        activeQuestionId,
        activeQuestion,
        activeQuestionSelectedChoiceIds,
        activeQuestionIndex,
        totalQuestionCount,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
    };
}

export default connect(
    mapStateToProp,
    mapDispatchToProps,
)(QuestionAttemptScreen);