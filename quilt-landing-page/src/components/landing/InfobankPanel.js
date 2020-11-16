import React from 'react';

import styled from 'styled-components';
import knowledgeMOV from '../../images/kno_fin2.mov'
import infobankPNG from '../../images/quilt_info2.png';

const InfobankPanel = () => {
    return(
        <Container>
            <Content>
                <SmallContainer>
                    <Header>
                        Don't Waste Time
                    </Header>   
                    <SubHeader>
                        <Mark>Find information fast.</Mark> Quilt takes advantage of the two-way connection between docs and code to deliver a fast and intuitive search experience. 
                    </SubHeader>
                </SmallContainer>
                <StyledImage src = {infobankPNG}/>
            </Content>
        </Container>
    )
}

export default InfobankPanel;


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