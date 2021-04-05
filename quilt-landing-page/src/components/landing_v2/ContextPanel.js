import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "styled-components";
import contextPNG from "../../images_v2/context_view4.png";

class ContextPanel extends Component {
    render() {
        return (
            <ContextPanelContainer>
                <ContentContainer>
                    <TextBlock>
                        <Header>See what matters most</Header>
                        <SubHeader>
                            Quilt finds specific information, relevant down to
                            the file and line number, to provide a rich context
                            that eliminates manual search and boosts velocity.
                        </SubHeader>
                    </TextBlock>
                    <CImage src={contextPNG} />
                </ContentContainer>
            </ContextPanelContainer>
        );
    }
}

export default ContextPanel;

const ContextPanelContainer = styled.div`
    height: 85vh;

    width: 100vw;

    background-color: "#0f111b";

    display: flex;

    justify-content: center;
`;

const CImage = styled.img`
    width: 60%;

    margin-left: -10%;

    margin-right: 10rem;

    border-radius: 0.7rem;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px 0px;

    border: 2px solid ${chroma("#0f111b").set("hsl.l", "+0.1")};

    z-index: 2;
`;

const ContentContainer = styled.div`
    display: flex;

    align-items: center;

    width: 80%;

    max-width: 110rem;

    direction: rtl;
`;

const TextBlock = styled.div`
    width: 50%;

    direction: ltr;
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
