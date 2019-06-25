import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

import { style as tileStyle } from './../../components/shared/tile/Tile';
import QuestionSequenceNumber from './QuestionSequenceNumber';
import QuestionText from './QuestionText';

const Root = styled.View(props => ({
    ...tileStyle,
    padding: 24,
    ...props.style,
}));

const StyledQuestionText = styled(QuestionText)({
    marginTop: 24,
});

const QuestionTile = (props) => {
    const { question, activeQuestionIndex, totalQuestionCount, headerNode=null, footerNode=null, style=null } = props;
    return (
        <Root style={style}>
            { headerNode }
            <QuestionSequenceNumber
                activeIndex={activeQuestionIndex}
                totalCount={totalQuestionCount}
            />
            <StyledQuestionText
                question={question}
            />
            { footerNode }
        </Root>
    );
};

QuestionTile.propTypes = {
    question: PropTypes.object.isRequired,
    activeQuestionIndex: PropTypes.number.isRequired,
    totalQuestionCount: PropTypes.number.isRequired,
    headerNode: PropTypes.node,
    footerNode: PropTypes.node,
};

export default QuestionTile;