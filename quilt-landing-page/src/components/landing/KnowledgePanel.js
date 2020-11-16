import React from 'react';

import styled from 'styled-components';
import knowledgeMOV from '../../images/kno_fin2.mov'
import knowledgePNG from '../../images/quilt_editor_inmotion.png';

const KnowledgePanel = () => {
    return(
        <Container>
            <Content>
                <SmallContainer>
                    <Header>
                        Stay in Motion
                    </Header>   
                    <SubHeader>
                        <Mark>Documents designed for a moving codebase.</Mark> Attach references from any part of your repository and stay informed when something's left behind.
                    </SubHeader>
                </SmallContainer>
                <StyledImage src = {knowledgePNG}/>
            </Content>
        </Container>
    )
}

export default KnowledgePanel;

const RightView = styled.img`
    width: 55%;
    margin-left: 8rem;
    border-radius: 0.8rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
`

const StyledImage = styled.img`
    width: 55%;
    max-width: 85rem;
    margin-left: auto;
    border-radius: 0.4rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
`

const Container = styled.div`
    height: 85rem;
    width: 100%;
    background-color: #16181d;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    height: 50rem;
    width: 90vw;
    max-width: 145rem;
    display: flex;
    align-items: center;
`

const SmallContainer = styled.div`
    min-width: 37%;
    max-width: 37%;
    display: flex;
    flex-direction: column;
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
`

const Mark = styled.b`
    font-weight: 500;
`