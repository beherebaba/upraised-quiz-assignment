import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';

const Root = styled.View(props => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: props.color || '#ccc',
    borderWidth: 1,
    ...props.style,
}));

const InnerCircle = styled.View(props => ({
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: props.color || '#ccc',
}));

const RadioButtonCircle = (props) => {
    const { isSelected, style, innerCircleStyle, color } = props;
    return (
        <Root style={style} color={color}>
            { isSelected ? <InnerCircle style={innerCircleStyle} color={color}/> : null }
        </Root>
    );
};

RadioButtonCircle.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    style: PropTypes.object,
    innerCircleStyle: PropTypes.object,
    color: PropTypes.string,
};

export default RadioButtonCircle;