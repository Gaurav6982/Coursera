import React from 'react'
import {Card,CardImg,CardTitle,CardImgOverlay,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
function RenderDishDetail({dish}){
    return (
        <Card >
            <Link to={`/menu/${dish.id}`}>
                <CardImg  top src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
const Menu=(props)=>{
    const menu=props.dishes.map(dish=>{
        return (
            <div key={dish.id} className="col-12 col-md-5 mt-2">
                <RenderDishDetail dish={dish} />
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row my-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">HOME</Link></BreadcrumbItem>
                    <BreadcrumbItem active >MENU</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>MENU</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;