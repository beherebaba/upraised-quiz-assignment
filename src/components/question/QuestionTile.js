import React from 'react';
import styled from '@emotion/native';

import QuestionSequenceNumber from './QuestionSequenceNumber';
import QuestionText from './QuestionText';

const Root = styled.View(props => ({
    padding: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#fff',
    elevation: 3,
    ...props.style,
}));

const StyledQuestionText = styled(QuestionText)({
    marginTop: 24,
});

const QuestionTile = (props) => {
    const { question, headerNode=null, footerNode=null, style } = props;
    return (
        <Root style={style}>
            { headerNode }
            <QuestionSequenceNumber activeIndex={2} totalCount={6}/>
            <StyledQuestionText
                question={question}
            />
            { footerNode }
        </Root>
    );
};

export default QuestionTile;