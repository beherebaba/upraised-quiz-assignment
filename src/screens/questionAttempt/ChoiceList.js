import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

import Choice from './../../components/question/Choice';

const Root = styled.View(props => ({
    flexDirection: 'column',
    ...props.style,
}));

const ChoiceList = (props) => {
    const { choices, style, onChoicePress } = props;
    
    return (
        <Root style={style}>
            {choices.map((choice, index) => {
                const choiceStyle = index > 0
                    ? { marginTop: 12 }
                    : null;
                return (
                    <Choice
                        key={choice.id}
                        choice={choice}
                        style={choiceStyle}
                        onPress={onChoicePress}
                    />
                );
            })}
        </Root>
    );
};

ChoiceList.propTypes = {
    choices: PropTypes.array.isRequired,
    style: PropTypes.object,
    onChoicePress: PropTypes.func.isRequired,
};

export default ChoiceList;