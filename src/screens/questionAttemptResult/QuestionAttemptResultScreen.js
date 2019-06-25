import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigationFocus } from 'react-navigation';
import styled from '@emotion/native';
import _ from 'lodash';

import screenNameConstants from './../../constants/screenNames';
import { actions as appActions } from './../../redux/app/actions';
import { CorrectAnswerTile, IncorrectAnswerTile } from './AnswerTile';
import Button from './../../components/shared/button/Button';

const Root = styled.ScrollView(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background,
    padding: 16,
}));

const TestText = styled.Text({});

const contentContainerStyle = {
    flex: 1,
    justifyContent: 'center',
};

const ContinueButton = styled(Button)(props => ({
    width: '60%',
}));

class QuestionAttemptResultScreen extends Component {
    _isMounted = false;
    state = {
        showContinueButton: false,
    };

    componentDidMount() {
        this._isMounted = true;
        setTimeout(this.handleInitialWaitCompletion, 2000);
    }

    takeToHomeScreen = () => {
        this.props.navigation.popToTop();
    };

    handleInitialWaitCompletion = () => {
        if (!this._isMounted) return;

        if (this.props.isFocused) {
            // Take to home screen
            this.takeToHomeScreen();
        } else {
            // Show continue button so that user can take
            // action after coming back to the app
            this.setState({
                showContinueButton: true,
            });
        }
    };

    handleContinueBtnPress = () => {
        this.takeToHomeScreen();
    };

    render() {
        const { activeQuestionAttemptResult } = this.props;
        const { showContinueButton } = this.state;

        return (
            <Root contentContainerStyle={contentContainerStyle}>
                { activeQuestionAttemptResult == 'correct' ? <CorrectAnswerTile/> : null }
                { activeQuestionAttemptResult == 'incorrect' ? <IncorrectAnswerTile/> : null }

                { showContinueButton ? (
                    <ContinueButton
                        text="Continue"
                        onPress={this.handleContinueBtnPress}
                    />
                ) : null }
            </Root>
        );
    }
}

function mapStateToProp(state) {
    const { activeQuestionId, activeQuestionAttemptResult, questionsIds } = state.app;
    const totalQuestionCount = questionsIds.length;
    const activeQuestionIndex = questionsIds.indexOf(activeQuestionId);
    const nextQuestionId = activeQuestionIndex >= 0 && (totalQuestionCount > activeQuestionIndex + 1)
        ? questionsIds[activeQuestionIndex+1]
        : null;

    return {
        activeQuestionAttemptResult,
        nextQuestionId,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
    };
}

export default withNavigationFocus(connect(
    mapStateToProp,
    mapDispatchToProps,
)(QuestionAttemptResultScreen));