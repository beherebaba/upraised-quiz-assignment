import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/native';

import { actions as appActions } from './../../redux/app/actions';
import { style as tileStyle } from './../../components/shared/tile/Tile';
import QuestionTile from './../../components/question/QuestionTile';
import Analysis from './Analysis';
import NavigationHeader from './../../components/shared/navigation/NavigationHeader';
import BackButton from './../../components/shared/navigation/BackButton';

const Root = styled.ScrollView(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background,
    padding: 16,
    paddingTop: 0,
}));

const ContainerTile = styled.View(props => ({
    ...tileStyle,
    // For preventing double shadow due to nested tiles in the view
    overflow: 'hidden',
}));

const StyledQuestionTile = styled(QuestionTile)(props => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

class QuestionAnalysisScreen extends Component {
    handleNavigationBackBtnPress = () => {
        this.props.navigation.goBack();
    };

    render() {
        const { activeQuestion, activeQuestionIndex, totalQuestionCount } = this.props;
        if (!activeQuestion) return null;

        return (
            <Root>
                <NavigationHeader>
                    <BackButton onPress={this.handleNavigationBackBtnPress}/>
                </NavigationHeader>
                <ContainerTile>
                    <StyledQuestionTile
                        question={activeQuestion}
                        activeQuestionIndex={activeQuestionIndex}
                        totalQuestionCount={totalQuestionCount}
                    />
                    <Analysis/>
                </ContainerTile>
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
        activeQuestionId,
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
)(QuestionAnalysisScreen);