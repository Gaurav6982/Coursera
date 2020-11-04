import React from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
function renderDish(dish) {
  if(dish!=null)
  {
  return(
    <div className="col-12 col-md-5 my-2">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
             <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
     </div>
       );
  }
  else
  return(<div></div>);
}
function renderComments(comments) {
  if(comments != null) {
    const commentListItems = comments.map((comment) =>
       {
         return (
                <li key={comment.id}>
                   <p> {comment.comment} </p>
                   <p>--- {comment.author}, {comment.date}</p>
                </li>
         );
       });
       return (
         <div className="col-12 col-md-5 my-2">
            <h4>Comments</h4>
            <ul className="list-unstyled">
               { commentListItems }
            </ul>
         </div>
       );
  }
  else {
    return(
      <div></div>
    );
  }
}
function DishDetail(props){
      if (props.selectedDish != null) {
          return(
              <div className="container">
                <div className="row my-2">
                  <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">MENU</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>{props.selectedDish.name}</h3>
                    <hr/>
                  </div>
                </div>
              <div className="row">
                    {renderDish(props.selectedDish)}
                    {renderComments(props.comments)}
              </div>
              </div>
          );
        }
        else {
          return (<div></div>);
        }
}

export default DishDetail