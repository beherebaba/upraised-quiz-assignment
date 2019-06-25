import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

import ChevronLeftIcon from './../../../images/icons/chevron_left.svg';

const Root = styled.TouchableOpacity(props => ({
    flexDirection: 'row',
    alignItems: 'center',
    ...props.style,
}));

const BackIcon = styled(ChevronLeftIcon)(props => ({
    color: props.theme.colors.base,
    width: 24,
    height: 24,
    ...props.style,
}));

const BtnText = styled.Text(props => ({
    color: props.theme.colors.base,
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 4,
    ...props.style,
}));

const BackButton = (props) => {
    const { text='Back', style, iconStyle, textStyle, onPress } = props;
    return (
        <Root activeOpacity={0.5} style={style} onPress={onPress}>
            <BackIcon style={iconStyle}/>
            <BtnText style={textStyle}>
                { text }
            </BtnText>
        </Root>
    );
};

BackButton.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    iconStyle: PropTypes.object,
    textStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
};

export default BackButton;