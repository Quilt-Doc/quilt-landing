import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import terminalMP4 from '../../images/terminal_8.mp4';
import dashboardMP4 from '../../images/modern_dashboard.mp4';
import dashPNG from '../../images/quiltdash6.png';

import styled from 'styled-components';
import chroma from 'chroma-js';

import DashPicPanel from './DashPicPanel';
// Test

class DashboardPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {playFirstVideo: true,
                        playSecondVideo: false};
    }

    playSecondVideo = () => {
        // console.log('Play Second Video Called');
        // this.state.playSecondVideo = true;
        document.getElementById("dashVideo").play();
        // this.forceUpdate();
    }

    render(){
        return(
            <>
            <Container>
                <TopBar>
                    <Content>
                        <Header>
                           
                            Streamline the Process
                        </Header>   
                        <SubHeader>
                            <Mark>Integrated into your workflow.</Mark> Across changes to source code, Quilt delivers actionable insights and radical clarity for documentation work.
                        </SubHeader>
                    </Content>
                </TopBar>
                <Body>
                    {/*
                    <SubBody>
                        <SubBodyText>Make Changes to Your Codebase</SubBodyText>
                        <Terminal id="termynal" data-termynal data-termynal data-ty-typeDelay="40" data-ty-lineDelay="700">
                            <span data-ty="input">git commit -m "Refactored Reference Creation"</span>
                            <span data-ty="input">git push origin master</span>
                            <span data-ty></span>
                            <span data-ty></span>
                            <span data-ty></span>
                            <span data-ty></span>
                            <span data-ty></span>
                        </Terminal>
                    </SubBody>*/}
                    <ImageContainer>
                        <Terminal id="termynal" data-termynal data-termynal data-ty-typeDelay="40" data-ty-lineDelay="700">
                            <span data-ty="input">git commit -m "Refactored Reference Creation"</span>
                            <span data-ty="input">git push origin master</span>
                            <span data-ty></span>
                            <span data-ty></span>
                            <span data-ty></span>
                            <span data-ty></span>
                            <span data-ty></span>
                        </Terminal>
                        <StyledImage src = {dashPNG}/>
                    </ImageContainer>
                    
                        {/*
                        <BlockContainer>
                            <Block>
                                <Top>
                                    <Number bColor = {'#2c303a'}>1</Number>
                                    Make Changes
                                </Top>
                                <StyledVideo muted {...(this.state.playFirstVideo ? {autoPlay: true} : {})} onEnded={() => this.playSecondVideo()} >
                                    <source src = {terminalMP4} type = "video/mp4"></source>
                                </StyledVideo>
                            </Block>
                            <Block>
                                <Top>
                                    <Number bColor = {'#5B75E6'}>2</Number>
                                    Update Documentation
                                </Top>
                                <StyledVideo id="dashVideo" muted {...(this.state.playSecondVideo ? {autoPlay: true} : {})} >
                                    <source src = {dashboardMP4} type = "video/mp4"></source>
                                </StyledVideo>
                            </Block>
                        </BlockContainer>
                        */}
                </Body>
            </Container>
            </>
        )
    }
}



export default DashboardPanel;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 110rem;
`

const SubBodyText = styled.div`
    width: 40%;
    padding-right: 5rem;
    font-size: 2.5rem;
    font-weight: 500;
`

const SubBody = styled.div`
    display: flex;
    align-items: center;
`

const StyledImage = styled.img`
    /*margin-left: auto;*/
    height: auto;
    border-radius: 0.8rem;
    margin-left: auto;
    width: 100%;
    box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px 0px, rgba(9, 30, 66, 0.25) 0px 5px 10px -5px;
    box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px 0px, rgba(9, 30, 66, 0.25) 0px 8px 16px -6px;
`

const Terminal = styled.div`
    width: 50%;
    min-width: 40rem;
    max-width: 40rem;
    padding: 5rem 1.5rem;
    font-size: 1.2rem;

    box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px 0px, rgba(9, 30, 66, 0.25) 0px 5px 10px -5px;
    box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px 0px, rgba(9, 30, 66, 0.25) 0px 8px 16px -6px;
    top: 0;
    left: 0;
    margin-top: 9rem;
    margin-left: 70%;

    position: absolute;
`

const StyledVideo = styled.video`
    margin-top: 2rem;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: ${props => props.active ? "0 1px 5px rgba(0, 0, 0, 0.2)" : ""}; 
`

const Top = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
`

const Number = styled.div`
    height: 4rem;
    width: 4rem;
    color: ${props => props.bColor};
    background-color: ${props => chroma(props.bColor).alpha(0.1)};
    border: 1px solid ${props => props.bColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1.5rem;
    font-weight: 500;
`


const Body = styled.div`
    height: 100%;
    width: 100%
    max-width: 120rem;
    width: 70vw;
    display: flex;
    flex-direction: column;
    padding-bottom: 15rem;
    align-items: center;
`

const BlockContainer = styled.div`
    display: flex;
`
const Block = styled.div`
    height: 50rem;
    width: 44vw;
    max-width: 60rem;
    &:first-of-type {
        margin-right: 6rem;
    }
`


const Mark = styled.b`
    font-weight: 500;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    color: #172A4e;
    flex-direction: column;
    align-items: center;
    background-color: #f7f8fc;
    padding-top: 16rem;
    margin-top: -15rem;
`

const TopBar = styled.div`
    margin-top: 6rem;
    margin-bottom: 5rem;
    padding-left: 15rem;
    padding-right: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    max-width: 65rem;
`

const Header = styled.div`
    font-size: 4.5rem;
    font-weight: 600;
    text-align: center;
`

const SubHeader = styled.div`
    font-size: 2rem;
    font-weight: 300;
    line-height: 3.65rem;
    margin-top: 3rem;
    opacity: 0.85;
    text-align: center;
`