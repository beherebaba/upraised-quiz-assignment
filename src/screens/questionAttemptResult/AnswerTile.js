import React from 'react';
import styled from '@emotion/native';

import Tile from '../../components/shared/tile/Tile';
import CheckIcon from './../../images/icons/check.svg';
import CloseIcon from './../../images/icons/close.svg';

const Root = styled(Tile)({
    alignItems: 'center',
    padding: 48,
});

const IconContainer = styled.View(props => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderRadius: 50,
}));

const CorrectAnswerIconContainer = styled(IconContainer)(props => ({
    borderColor: props.theme.colors.green,
}));

const IncorrectAnswerIconContainer = styled(IconContainer)(props => ({
    borderColor: props.theme.colors.red,
}));

const CorrectAnswerIcon = styled(CheckIcon)(props => ({
    color: props.theme.colors.green,
    width: 72,
    height: 72,
}));

const IncorrectAnswerIcon = styled(CloseIcon)(props => ({
    color: props.theme.colors.red,
    width: 72,
    height: 72,
}));

const AnswerResultText = styled.Text(props => ({
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
}));

const CorrectAnswerResultText = styled(AnswerResultText)(props => ({
    color: props.theme.colors.green,
}));

const IncorrectAnswerResultText = styled(AnswerResultText)(props => ({
    color: props.theme.colors.red,
}));

export const CorrectAnswerTile = (props) => {
    return (
        <Root>
            <CorrectAnswerIconContainer>
                <CorrectAnswerIcon/>
            </CorrectAnswerIconContainer>
            <CorrectAnswerResultText>
                You're correct!
            </CorrectAnswerResultText>
        </Root>
    );
};


export const IncorrectAnswerTile = (props) => {
    return (
        <Root>
            <IncorrectAnswerIconContainer>
                <IncorrectAnswerIcon/>
            </IncorrectAnswerIconContainer>
            <IncorrectAnswerResultText>
                You're wrong!
            </IncorrectAnswerResultText>
        </Root>
    );
};
