import React from 'react';
import styled from '@emotion/native';

const Root = styled.View({
    padding: 24,
});

const Title = styled.Text(props => ({
    color: props.theme.colors.accent,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
}));

const SubTitleText = styled.Text({
    color: '#999',
});

const SubTitleTextUserCountText = styled.Text(props => ({
    color: props.theme.colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
}));

const Analysis = () => {
    return (
        <Root>
            <Title>Analysis</Title>
            <SubTitleText>
                <SubTitleTextUserCountText>150</SubTitleTextUserCountText>
                {'  users answered the question'}
            </SubTitleText>
        </Root>
    );
};

export default Analysis;