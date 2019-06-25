import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/native';

import screenNameConstants from './../../constants/screenNames';
import { actions as appActions } from './../../redux/app/actions';
import Button from './../../components/shared/button/Button';
import illustrationImage from './../../images/illustrations/hi_woman.png';

const Root = styled.View({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
});

const Header = styled.View(props => ({
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
}));

const LogoText = styled.Text(props => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: props.theme.colors.accent,
}));

const Body = styled.View(props => ({
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
}));

const WelcomeText = styled.Text(props => ({
    fontSize: 42,
    fontWeight: 'bold',
    color: props.theme.colors.base,
    textAlign: 'center',
}));

const IllustrationImage = styled.Image(props => ({
    width: 120,
    height: 120,
    marginTop: 72,
    marginBottom: 72,
}));

const GetStartedButton = styled(Button)(props => ({
    width: '60%',
}));

class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        appActions: PropTypes.object.isRequired,
    };

    handleGetStartedBtnClick = async () => {
        const result = await this.props.appActions.startQuiz();
        if (result instanceof Error) return;
        this.props.navigation.navigate(screenNameConstants.QUESTION);
    };

    render() {
        return (
            <Root>
                <Header>
                    <LogoText>Upraised Quiz</LogoText>
                </Header>
    
                <Body>
                    <WelcomeText>
                        Welcome!
                    </WelcomeText>
                    <IllustrationImage source={illustrationImage}/>
                    <GetStartedButton
                        text="Get Started"
                        onPress={this.handleGetStartedBtnClick}
                    />
                </Body>
            </Root>
        );
    }
}

/*
 * TODO: Implement a state flag in reducer for displaying loader
 * and preventing multiple clicks on Get Started button
 */
function mapStateToProp() {
    return {};
}
  
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
    };
}

export default connect(
    mapStateToProp,
    mapDispatchToProps,
)(HomeScreen);
