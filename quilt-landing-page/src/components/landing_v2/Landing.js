import React, { Component } from "react";

import styled from "styled-components";
import blamePNG from "../../images_v2/blame_view.png";
import logoSVG from "../../images_v2/logo2.svg";

import IntegrationPanel from "./IntegrationPanel";
import ContextPanel from "./ContextPanel";

import chroma from "chroma-js";

const PRIVACY_URL = ( process.env.REACT_APP_NETLIFY_FRONTEND_URL ) ? `${process.env.REACT_APP_NETLIFY_LP_URL}/privacy` : `${process.env.REACT_APP_LOCAL_FRONTEND_URL}/privacy`;


class Landing extends Component {
    renderGradients = () => {
        const gradients = [
            [6, 0.01],

            [4, 0.018],
        ];

        /*
             [6, 0.015],
            [5, 0.03],
            [4, 0.045],
        */
        return gradients.map((grad) => {
            const l = `+${grad[1]}`;
            const h = `${grad[0]}rem`;

            return <Gradient height={h} l={l} />;
        });
    };
    render() {
        return (
            <Container>
                <Navbar>
                    <Brand>
                        <Logo src={logoSVG} />
                        <BrandName>quilt</BrandName>
                    </Brand>
                    <Button>Download</Button>
                </Navbar>
                <MainPanelContainer>
                    <TextBlock>
                        <Header>Leverage information like never before</Header>
                        <SubHeader>
                            Stop searching for insights. Quilt unifies the
                            existing knowledge of your codebase across platforms
                            and makes it accessible in the IDE.
                        </SubHeader>
                    </TextBlock>
                    <ImageBlock>
                        <PanelImage src={blamePNG} />
                    </ImageBlock>
                </MainPanelContainer>
                {this.renderGradients()}
                <IntegrationPanel />
                <ContextPanel />
                <Footer>
                    <FooterLinkPanel>
                        <FooterLink href="mailto:karan@getquilt.app"> Contact Us </FooterLink>
                        <FooterLink href={`${PRIVACY_URL}`}> Privacy Policy </FooterLink>
                    </FooterLinkPanel>
                </Footer>
            </Container>
        );
    }
}

export default Landing;

const Gradient = styled.div`
    height: ${(props) => props.height};

    width: 100vw;

    background-color: ${(props) => chroma("#0f111b").set("hsl.l", props.l)};
`;

const Button = styled.div`
    height: 3rem;

    background-color: ${chroma("#0f111b").set("hsl.l", "+0.1")};

    font-size: 1.7rem;

    margin-left: auto;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 2rem 2rem;

    font-weight: 500;

    border-radius: 0.5rem;
`;

const Logo = styled.img`
    width: 3rem;
`;

const Brand = styled.div`
    display: flex;

    align-items: center;
`;

const BrandName = styled.div`
    font-weight: 500;

    margin-left: 1rem;

    font-size: 3rem;

    margin-top: -0.7rem;
`;

const Navbar = styled.div`
    height: 10rem;

    width: 80%;

    display: flex;

    align-items: center;
`;

const Container = styled.div`
    background-color: #0f111b;

    width: 100vw;

    font-family: -apple-system, BlinkMacSystemFont, sans-serif;

    color: white;

    display: flex;

    flex-direction: column;

    align-items: center;
`;

const MainPanelContainer = styled.div`
    margin-top: 7rem;

    display: flex;

    flex-direction: column;

    align-items: center;

    width: 70%;

    max-width: 110rem;

    margin-bottom: 15rem;
`;

const TextBlock = styled.div`
    width: 100rem;

    display: flex;

    flex-direction: column;

    align-items: center;
`;

const Header = styled.div`
    font-size: 5rem;

    font-weight: 600;

    text-align: center;
`;

const SubHeader = styled.div`
    font-size: 2rem;

    font-weight: 400;

    line-height: 3.65rem;

    opacity: 0.85;

    max-width: 75rem;

    margin-top: 3rem;

    text-align: center;
`;

const ImageBlock = styled.div`
    margin-top: 6rem;

    display: flex;
`;

const PanelImage = styled.img`
    width: 100%;

    border-radius: 1rem;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px 0px;

    border: 2px solid ${chroma("#0f111b").set("hsl.l", "+0.25")};

    /*${chroma("#6363db").alpha(0.4)}*/
`;





const Footer = styled.div`
    /*
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    padding-bottom: 5.00rem;
    background-color: #0f111b;
    width: 100%;
    height: 12rem;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    */
    height: 12rem;
    background-color: #0f111b;
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