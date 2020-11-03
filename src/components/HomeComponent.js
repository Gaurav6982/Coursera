import React from 'react'
import {Card,CardImg,CardTitle,CardSubtitle,CardText,CardBody} from 'reactstrap'
function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}
export default Home