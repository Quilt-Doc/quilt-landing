import React from 'react';

import styled from 'styled-components';
import chroma from 'chroma-js';

//components
import DashboardPanel from './DashboardPanel';
import KnowledgePanel from './KnowledgePanel';
import SnippetPanel from './SnippetPanel';
import IntroPanel from './IntroPanel';

//actions
import { addUserToContacts } from '../../actions/User_Actions';
import history from '../../history';


//images
import logoSVG from '../../images/final_logo_2.svg';

//react-redux
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import InfobankPanel from './InfobankPanel';

class Landing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focused : false
        }
    }

    beginFeedbackForm = () => {
        history.push(`http://localhost:3000/feedback`);
    }

    render(){
        // return (<a href={'http://localhost:3000/feedback'}> Give Feedback </a>);
        // return (<Link to={'/feedback'}> Give Feedback </Link>);
        // return (<FooterLink onClick={() => this.beginFeedbackForm()}> Give Feedback </FooterLink>);

        return(
            <Container>
                <IntroPanel/>
                <Wedge/>
                <GradientContainer>
                    <Gradient/>
                    <Gradient2/>
                    <Gradient3/>
                </GradientContainer>
                
                {/*
                <Gradient2/>
                <Gradient3/>*/}
                <DashboardPanel/>
               
                <KnowledgePanel/> 
                <SnippetPanel/>
                <InfobankPanel/>
                <Footer>
                    <FooterIcon>
                        <StyledIcon src = {logoSVG} />
                    </FooterIcon>
                    <FooterLinkPanel>
                        <FooterLink href="mailto:karan@getquilt.app"> Contact Us </FooterLink>
                        <FooterLink href={'https://getquilt.app/feedback'}> Give Feedback </FooterLink>
                    </FooterLinkPanel>
                    {/*
                    <FooterIcon>
                        <StyledIcon src = {logoSVG} />
                    </FooterIcon>
                    <FooterLinkPanel>
                        <FooterLink href="mailto:karan@getquilt.app"> Contact Us </FooterLink>
                        <FooterLink href={'https://getquilt.app/feedback'}> Give Feedback </FooterLink>
                    </FooterLinkPanel>*/}
                </Footer>
                {/*
                <Gradient/>
                <DashboardPanel/>
                <KnowledgePanel/> 
                <SnippetPanel/>
                <Footer>
                    <FooterIcon>
                        <StyledIcon src = {logoSVG} />
                    </FooterIcon>
                    <FooterLinkPanel>
                        <FooterLink href="mailto:karan@getquilt.app"> Contact Us </FooterLink>
                        <FooterLink href={'https://getquilt.app/feedback'}> Give Feedback </FooterLink>
                    </FooterLinkPanel>
                </Footer>
                */}
            </Container>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default withRouter(connect(mapStateToProps, { addUserToContacts })(Landing));

const GradientContainer = styled.div`
    margin-top: -15.5rem;
`

const Wedge = styled.div`
    background-color: #16181D;
    height: 20rem;
    clip-path: polygon(0 0, 100% 0%, 100% 40%, 0 100%);
    margin-top: -1rem;
`

const FooterIcon = styled.div`
    font-size: 2.5rem;
`

const Footer = styled.div`
    /*
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    padding-bottom: 5.00rem;
    background-color: #000000;
    width: 100%;
    height: 12rem;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    */
    height: 12rem;
    background-color: #0d0e11;
    display: flex;
    align-items: center;
    padding: 0rem 5rem;
`

const FooterLinkPanel = styled.div`
    display: flex;
    align-items: center;
`

const FooterLink = styled.a`
    color: #D9D9D9;
    display: flex
    margin-top: 1.5rem;
    margin-left: 3rem;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5rem;
`

const StyledIcon = styled.img`
    max-width: 5rem;
    margin-right: 1.33rem;
    margin-top: 1.5rem;
`

const Gradient3 = styled.div`
    height: 20rem;
    background-color: #4f5669;
    margin-top: -18rem;
    clip-path: polygon(0 75%, 100% 0%, 100% 25%, 0 100%);
    position: relative;
    z-index: 0;
    opacity: 0.8;
`   
//(0, 0) (0, 10) (20, 10) (20, 20)
//


const Gradient2 = styled.div`
    height: 20rem;
    background-color:#414654;
    clip-path: polygon(0 75%, 100% 0%, 100% 25%, 0 100%);
    margin-top: -17rem;
    position: relative;
    z-index: 2;

`


const Gradient4 = styled.div`
    margin-top: -10rem;
    height: 20rem;
    width: 100%;
    background-color:#ced2de;
    clip-path: polygon(0 50%, 100% 0%, 100% 50%, 0 100%);
    /*
    clip-path: polygon(0 0, 0 100%, 100% 5rem, 100% 0);
    */
    position: relative;
    z-index: 1;
`

const Gradient = styled.div`

    height: 20rem;
    width: 100%;
    background-color:#16181D;
    clip-path: polygon(0 75%, 100% 0%, 100% 25%, 0 100%);
    /*
    clip-path: polygon(0 0, 0 100%, 100% 5rem, 100% 0);
    */
    position: relative;
    z-index: 1;
`


// top-left, top-right, (x, y)
/*clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 50%);*/
    /*
    clip-path: polygon(0 0, 0 100%, 100% 8rem, 100% 0);
    */
   //clip-path: polygon(0 50%, 100% 0%, 100% 50%, 0 100%);

const Container = styled.div`
    height: calc(100vh - 0rem);
    font-family: -apple-system,BlinkMacSystemFont, sans-serif;
    color: white;
    font-size: 1.6rem;
    overflow-y: scroll;
`