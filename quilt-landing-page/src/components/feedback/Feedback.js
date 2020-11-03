import React from 'react';

import styled from 'styled-components';
import chroma from 'chroma-js';
import {Helmet} from "react-helmet";

class Feedback extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focused : false
        }
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Quilt Feedback</title>
                </Helmet>
                <TypeForm id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/QFa2Z1ls"></TypeForm>
                <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> 
            </div>   
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const TypeForm = styled.iframe`
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    border:0;
`

export default Feedback;