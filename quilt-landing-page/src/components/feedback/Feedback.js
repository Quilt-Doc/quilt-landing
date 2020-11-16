import React from 'react';

import styled from 'styled-components';
import chroma from 'chroma-js';
import {Helmet} from "react-helmet";


//react-redux
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';



class Feedback extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focused : false
        }
    }

    componentDidMount() {
        console.log('MOUNTED');
    }

    /*
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
            <title>Quilt Feedback</title>
            <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style>
        </head>
        <body>
            <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/QFa2Z1ls"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> 
        </body>
        </html>
    */

    /*
<Helmet>
                    <title>Quilt Feedback</title>
                </Helmet>
                <TypeForm id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/QFa2Z1ls"></TypeForm>
                <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> 
    */

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

/*
const mapStateToProps = () => {
    return {}
}
*/

const TypeForm = styled.iframe`
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    border:0;
`
export default withRouter(connect(mapStateToProps)(Feedback));
// export default Feedback;