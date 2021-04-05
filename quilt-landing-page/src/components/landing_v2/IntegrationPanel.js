import React, { Component } from "react";

import styled from "styled-components";
import chroma from "chroma-js";

import boardPNG from "../../images_v2/board_selection.png";
import linkPNG from "../../images_v2/board_link.png";
import workPNG from "../../images_v2/workspace_creation.png";

class IntegrationPanel extends Component {
    render() {
        return (
            <SecondPanelContainer>
                <ContentContainer>
                    <TextBlock>
                        <Header>Bring all your favorite tools </Header>
                        <SubHeader>
                            Quilt ties everything across Documentation, Project
                            Management, and Version Control to align your
                            knowledge and deliver meaningful insights.
                        </SubHeader>
                    </TextBlock>
                    <Collage>
                        <WImage src={workPNG} />

                        <LImage src={linkPNG} />

                        <BImage src={boardPNG} />
                    </Collage>
                </ContentContainer>
            </SecondPanelContainer>
        );
    }
}

export default IntegrationPanel;

const BImage = styled.img`
    width: 50%;

    top: -3rem; /*-10%;*/

    left: 55%;
    position: absolute;

    border-radius: 0.7rem;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px 0px;

    border: 2px solid ${chroma("#0f111b").set("hsl.l", "+0.1")};

    z-index: 1;
`;

const LImage = styled.img`
    /*35rem*/
    width: 50%;

    top: 15rem; /*50%;*/

    left: 7rem; /*10%;*/

    position: absolute;

    border-radius: 0.7rem;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px 0px;

    border: 2px solid ${chroma("#0f111b").set("hsl.l", "+0.1")};

    z-index: 0;
`;

const WImage = styled.img`
    top: -12rem; /*-40%;*/

    /*40rem*/
    width: 60%;

    position: absolute;

    border-radius: 0.7rem;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px 0px;

    border: 2px solid ${chroma("#0f111b").set("hsl.l", "+0.1")};

    z-index: 2;
`;

const SecondPanelContainer = styled.div`
    height: 85vh;

    width: 100vw;

    background-color: ${chroma("#0f111b").set("hsl.l", "+0.06")};

    display: flex;

    justify-content: center;
`;

const ContentContainer = styled.div`
    display: flex;

    align-items: center;

    width: 80%;

    max-width: 110rem;
`;

const TextBlock = styled.div`
    width: 50%;
`;

const Collage = styled.div`
    width: 80%;

    height: 30rem;

    position: relative;

    margin-left: 8rem;
`;

const Header = styled.div`
    font-size: 5rem;

    font-weight: 600;
`;

const SubHeader = styled.div`
    font-size: 2rem;

    font-weight: 400;

    line-height: 3.65rem;

    opacity: 0.85;

    max-width: 75rem;

    margin-top: 3rem;
`;
