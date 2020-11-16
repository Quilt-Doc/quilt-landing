import React from 'react';

import styled from 'styled-components';
import chroma from 'chroma-js';

//email validation
import * as EmailValidator from 'email-validator';

//actions
import { addUserToContacts } from '../../actions/User_Actions';
import history from '../../history';

//images
import dashboardPNG from '../../images/dash.png';
import infoPNG from '../../images/info_3.png';
import logoSVG from '../../images/final_logo_2.svg';
import QuiltEditor2 from '../../images/QuiltEditor2.svg';
import QuiltEditor1 from '../../images/quiltedpic3.png';
import quiltvid from '../../images/quiltved4.mov'

//utility
import scrollIntoView from 'scroll-into-view-if-needed'

//react-redux
import { connect } from 'react-redux';

import { withRouter, Link } from 'react-router-dom';

//icons
import { ImGithub } from 'react-icons/im'

class IntroPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            focused : false
        }
    }

    addContact = () => {
        const { addUserToContacts } = this.props;

        const email = this.emailInput.value;

        if (!email) return alert("Please enter an email");
        if (!EmailValidator.validate(email)) return alert("Invalid Email");

        addUserToContacts(email);
        history.push(`https://dev.getquilt.app/login?email=${email}`);
    }

    focusInput = () => {
        this.emailInput.focus();

        scrollIntoView(this.emailInput, {
            block: 'center',
            inline: 'center',
            behavior: 'smooth'
        });
    }


    renderOpacity = () => {
        const { focused } = this.state;
        if ( focused ) {
            return 1;
        } else {
            return 0.7;
        }
    }

    render(){
        return(
            <Container>
                <ContentContainer>
                    <TopBar>
                        <IconBorder>
                            <StyledIcon src = {logoSVG} />
                        </IconBorder>
                        <BrandName>
                            quilt
                        </BrandName>
                        <DemoButton onClick = {() => this.focusInput()}>
                            Request Demo
                        </DemoButton>
                    </TopBar>
                    <HeaderContent>
                        <LeftHeaderContent>
                            <Header>
                                Worry about code, not docs. 
                            </Header>
                            <SubHeader>
                                Developers shouldn't have to suffer from terrible docs. 
                                Quilt monitors your evolving codebase 
                                to keep information actionable and up to date. 
                            </SubHeader>
                        </LeftHeaderContent>
                        <RightHeaderContent>
                            <SmallDescription>
                                Get started with your repositories in Github.
                            </SmallDescription>
                            <NextButton >
                                <ImGithub style = {{marginRight: "1rem", fontSize: "2rem"}}/>
                                    Continue with Github
                            </NextButton>
                            <SmallDescription>
                                Or request a demo!
                            </SmallDescription>
                            <SignUpForm opacity = {this.renderOpacity()}>
                                <Searchbar 
                                    onFocus = {() => this.setState({focused: true})}
                                    onBlur = {() => this.setState({focused: false})}
                                    placeholder = {"Enter your email"}
                                    ref = {node => this.emailInput = node}
                                />
                                <SignUpButton onClick = {() => this.addContact()}>
                                    Request
                                </SignUpButton>
                            </SignUpForm>
                        </RightHeaderContent>
                    </HeaderContent>
                    
                    <DemoPlaceholder>
                       
                        <PlaceholderImage src = {QuiltEditor1}/>
                    </DemoPlaceholder>
                    
                </ContentContainer>
                
                {/*
                <TopBar>
                    <IconBorder>
                        <StyledIcon src = {logoSVG} />
                    </IconBorder>
                    <BrandName>
                        quilt
                    </BrandName>
                    <DemoButton onClick = {() => this.focusInput()}>
                        Request Access
                    </DemoButton>
                </TopBar>
                <Content>
                    <LeftText>
                        <Header>
                            Worry about code, not docs. 
                        </Header>
                        <SubHeader>
                            Developers shouldn't have to suffer from terrible docs. 
                            Quilt monitors your evolving codebase 
                            to keep information actionable and up to date. 
                        </SubHeader>
                        <SignUpForm opacity = {this.renderOpacity()}>
                            <Searchbar 
                                onFocus = {() => this.setState({focused: true})}
                                onBlur = {() => this.setState({focused: false})}
                                placeholder = {"Enter your email"}
                                ref = {node => this.emailInput = node}
                            />
                            <SignUpButton onClick = {() => this.addContact()}>
                                Request
                            </SignUpButton>
                        </SignUpForm>
                    </LeftText>
                    <RightContainer>
                        <StyledVideo src = {dashboardPNG} />
                        <StyledVideo2 src = {infoPNG} />
                    </RightContainer>
                </Content>
                */}
            </Container>
        )
    }    
}

const mapStateToProps = () => {
    return {}
}

export default withRouter(connect(mapStateToProps, { addUserToContacts })(IntroPanel));

const StyledVideo = styled.video`
    max-width: 100%;
    height: auto;
    border-radius: 0.8rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
`

const PlaceholderImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 0.8rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
`

const DemoPlaceholder = styled.div`
    margin-top: 9rem;
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
`

const SmallDescription = styled.div`
    font-size: 1.5rem;
    opacity: 1;
    color: white;
    font-weight: 400;
    opacity: 0.9;
`

const NextButton = styled.div`
    background-color: #12151c;
    height: 4.5rem;
    width: 24rem;
    border-radius: 0.5rem;
    display: inline-flex;
    border-radius: 0.3rem;
    margin-top: 1.5rem;
    font-size: 1.6rem;
    display: inline-flex;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: 500;
    border: 1px solid #6762df;
    cursor: pointer;
    &:hover {
        background-color: #2e323d;
    }
    margin-bottom: 3rem;
`

const HeaderContent = styled.div`
    height: 27rem;
    margin-top: 10rem;
    display: flex;
`

const LeftHeaderContent = styled.div`
    min-width: 55%;
    max-width: 55%;
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
    justify-content: center;
    border-right: 1px solid #303540;
`

const RightHeaderContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 5rem;
    justify-content: center;
`   

const Container = styled.div`
    background-color: #16181D;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    width: 80vw;
    max-width: 120rem;
`



const IconBorder = styled.div`

`


const StyledVideo2 = styled.img`
    width: 70%;
    position: absolute;
    border-radius: 0.3rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    top: 45%;
    left: 20%;
    z-index: 1;
`

/*
const StyledVideo = styled.img`
    width: 70%;
    position: absolute;
    border-radius: 0.3rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0.2), 0 3px 5px -1px rgba(0, 0, 0, 0.5);
    top: 15%;
    left: 0;
    z-index: 1;
`*/

const RightContainer = styled.div`
    width: 50%;
    border-radius: 0.3rem;
    border-radius: 0.8rem;
    margin-left: 8rem;
    height: 100%;
    position: relative;
`

const SignUpButton = styled.div`
    border-left: 1px solid #6762df;
    color: white;
    background-color:#12151c;
    font-weight: 500;
    margin-left: auto;
    height: 100%;
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    cursor: pointer;
    
    &:hover {
        background-color: #2e323d;
    }
`

const SignUpForm = styled.div`
    margin-top: 1.5rem;
    height: 5rem;
    width: 40rem;
    border: 1px solid ${props => chroma('#6762df').alpha(props.opacity)};
    border-radius: 0.3rem;
    display:flex;
    background-color:#12151c;
`

const Searchbar = styled.input`
    height: 5rem;
    width: 28rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    padding: 2rem 2rem;
    font-weight: 500;
    &::placeholder {
        color: white;
        opacity: 0.9;
    }
    font-size: 1.6rem;
    font-weight: 500;
    font-family: -apple-system,BlinkMacSystemFont, sans-serif;
`

const Header = styled.div`
    font-size: 4.5rem;
    font-weight: 600;
`

const SubHeader = styled.div`
    font-size: 2rem;
    font-weight: 300;
    line-height: 3.65rem;
    margin-top: 3rem;
    opacity: 0.85;
    max-width: 50rem;
`




const Content = styled.div`
    height: 60rem;
    margin-top: 5rem;
    display: flex;
    align-items: center;
`

const TopBar = styled.div`
    height: 10rem;
    display: flex;
    align-items: center;
`

const BrandName = styled.div`
    font-size: 3.5rem;
    letter-spacing: 1px;
    font-weight: 400;
    margin-top: 0rem;
`

const StyledIcon = styled.img`
    max-width: 4.5rem;
    margin-right: 1rem;
    margin-top: 1.6rem;
`

const DemoButton = styled.div`
    border: 1px solid #6762df;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    color: white;
    background-color:#12151c;
    font-weight: 500;
    margin-left: auto;
    height: 4.5rem;
    padding: 0rem 2rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #2e323d;
    }
`