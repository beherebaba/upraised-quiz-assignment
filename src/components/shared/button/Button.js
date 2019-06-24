import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

const Root = styled.TouchableOpacity(props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    color: props.theme.colors.accent,
    borderColor: props.theme.colors.accent,
    borderWidth: 1,
    borderRadius: 16,
    opacity: props.disabled ? 0.5 : 1,
}));

const StyledText = styled.Text(props => ({
    color: props.theme.colors.accent,
    fontSize: 16,
    lineHeight: 24,
}));

const Button = ({ text, disabled, style, textStyle, onPress }) => {
    return (
        <Root activeOpacity={0.6} disabled={disabled} onPress={onPress} style={style}>
            <StyledText style={textStyle}>
                { text }
            </StyledText>
        </Root>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
};

export default Button;