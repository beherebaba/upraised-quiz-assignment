import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

const Root = styled.View({
    flexDirection: 'row',
    alignItems: 'flex-end',
});

const StyledText = styled.Text({
    color: '#999',
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 1,
});

const ActiveQuestionNumberText = styled.Text(props => ({
    color: '#000',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: props.theme.colors.accent,
}));

const QuestionSequenceNumber = ({ activeIndex, totalCount }) => {
    return (
        <Root>
            <ActiveQuestionNumberText>
                { activeIndex + 1 }
            </ActiveQuestionNumberText>
            <StyledText>
                {` of ${totalCount}`} 
            </StyledText>
        </Root>
    );
};

QuestionSequenceNumber.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
};

export default QuestionSequenceNumber;