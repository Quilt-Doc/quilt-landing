import React from 'react';
import dashPNG from '../../images/quiltdash3.png';

import styled from 'styled-components';
import chroma from 'chroma-js';


const DashPicPanel = () => {
    return(
        <Container>
            <SubContainer>
                <StyledImage src = {dashPNG}/>
            </SubContainer> 
        </Container>
    )
}

export default DashPicPanel;

const Container = styled.div`
    background-color:  #16181D;
    display: flex;
    justify-content: center;
`

const SubContainer = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100rem;
    width: 80vw;
`

const StyledImage = styled.img`
    /*margin-left: auto;*/
    margin-top: 5rem;
    width: 70%;
    height: auto;
    border-radius: 0.5rem;
    /*
    box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px 0px, rgba(9, 30, 66, 0.25) 0px 8px 16px -6px;
    */
   border: 1px solid #E0E4E7;
`
