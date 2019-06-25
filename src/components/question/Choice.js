import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

import { style as tileStyle } from './../../components/shared/tile/Tile';
import RadioButtonCircle from './../../components/shared/radioButton/RadioButtonCircle';

const Root = styled.TouchableOpacity(props => ({
    ...tileStyle,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: props.isChoiceSelected ? props.theme.colors.darkGrey : '#fff',
    ...props.style,
}));

const ChoiceLabel = styled.Text(props => ({
    color: props.isChoiceSelected ? '#fff' : props.theme.colors.base,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    // backgroundColor: 'pink',
}));

const ChoiceText = styled.Text(props => ({
    flex: 1,
    color: props.isChoiceSelected ? '#fff' : props.theme.colors.base,
    fontSize: 16,
    lineHeight: 20,
    // backgroundColor: 'pink',
    marginLeft: 12,
    marginRight: 12,
}));

const Choice = ({ choice, style, onPress }) => {
    const isChoiceSelected = choice.isSelected;
    const handlePress = () => {
        onPress && onPress({ choice });
    };

    return (
        <Root activeOpacity={0.8} style={style} isChoiceSelected={isChoiceSelected} onPress={handlePress}>
            <ChoiceLabel isChoiceSelected={isChoiceSelected}>
                { choice.label }
            </ChoiceLabel>
            <ChoiceText isChoiceSelected={isChoiceSelected}>
                { choice.text }
            </ChoiceText>
            <RadioButtonCircle
                isSelected={isChoiceSelected}
                color={isChoiceSelected ? '#fff' : null}
            />
        </Root>
    );
};

Choice.propTypes = {
    choice: PropTypes.object.isRequired,
    style: PropTypes.object,
    onPress: PropTypes.func.isRequired,
};

export default Choice;