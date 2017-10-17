import React from 'react';
import { Col, Image } from 'react-bootstrap'

const h4Style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

const BeautyImgContainer = (props) => (
    <Col md={3}>
        <a href={props.data.href} target="_blank" data-toggle="tooltip" title={props.data.title}>
            <Image height={250} src={props.data.children[props.flag]} rounded/>
        </a>
        <h4 style={h4Style}>{props.data.title}</h4>
    </Col>
)

export default BeautyImgContainer