import React from 'react';
import styled from '@emotion/native';

import Tile from '../../components/shared/tile/Tile';
import QuestionSequenceNumber from '../../components/question/QuestionSequenceNumber';
import QuestionText from '../../components/question/QuestionText';

const Root = styled(Tile)({
    overflow: 'hidden',
});

const StyledQuestionText = styled(QuestionText)({
    marginTop: 24,
});

const QuestionTile = ({ question }) => {
    return (
        <Root>
            <QuestionSequenceNumber activeIndex={2} totalCount={6}/>
            <StyledQuestionText
                question={question}
            />
        </Root>
    );
};

export default QuestionTile;