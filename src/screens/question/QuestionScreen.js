import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/native';

import screenNameConstants from './../../constants/screenNames';
import { actions as appActions } from './../../redux/app/actions';
import QuestionTile from './../../components/question/QuestionTile';
import Button from './../../components/shared/button/Button';
import NavigationHeader from './../../components/shared/navigation/NavigationHeader';
import BackButton from './../../components/shared/navigation/BackButton';

const Root = styled.ScrollView(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background,
    padding: 16,
    paddingTop: 0,
}));

const ButtonsContainer = styled.View({
    flexDirection: 'row',
    marginTop: 32,
});

const StyledButton = styled(Button)({
    flex: 1,
});

class QuestionScreen extends Component {
    handleNavigationBackBtnPress = () => {
        this.props.navigation.goBack();
    };

    handleAnswerBtnClick = async () => {
        await this.props.appActions.resetActiveQuestionAttemptData();
        this.props.navigation.navigate(screenNameConstants.QUESTION_ATTEMPT);
    };

    handleAnalysisBtnClick = () => {
        this.props.navigation.navigate(screenNameConstants.QUESTION_ANALYSIS);
    };

    render() {
        const { activeQuestion, activeQuestionIndex, totalQuestionCount } = this.props;
        if (!activeQuestion) return null;

        return (
            <Root>
                <NavigationHeader>
                    <BackButton onPress={this.handleNavigationBackBtnPress}/>
                </NavigationHeader>
                <QuestionTile
                    question={activeQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                    totalQuestionCount={totalQuestionCount}
                    footerNode={(
                        <ButtonsContainer>
                            <StyledButton
                                text="Answer"
                                onPress={this.handleAnswerBtnClick}
                                style={{ marginRight: 8 }}
                            />
                            <StyledButton
                                text="See Analysis"
                                onPress={this.handleAnalysisBtnClick}
                                style={{ marginLeft: 8 }}
                            />
                        </ButtonsContainer>
                    )}
                />
            </Root>
        );
    }
}

/*
 * TODO: Move the shared logic to a reusable selector
 */
function mapStateToProp(state) {
    const { activeQuestionId, questionsIds, questionsById } = state.app;
    const totalQuestionCount = questionsIds.length;
    const activeQuestionIndex = questionsIds.indexOf(activeQuestionId);
    const activeQuestion = activeQuestionIndex >= 0 && activeQuestionId in questionsById
        ? questionsById[activeQuestionId]
        : null;

    return {
        activeQuestion,
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
)(QuestionScreen);