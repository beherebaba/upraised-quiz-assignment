import React from 'react';
import { Text } from 'react-native';

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

export default QuestionText;