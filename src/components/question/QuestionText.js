import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/native';

const StyledText = styled.Text(props => ({
    color: props.theme.colors.base,
    fontSize: 16,
    lineHeight: 24,
}));

const QuestionText = ({ question, style }) => {
    return (
        <StyledText style={style}>
            { question.text }
        </StyledText>
    );
};

QuestionText.propTypes = {
    question: PropTypes.object.isRequired,
    style: PropTypes.object,
};

export default QuestionText;