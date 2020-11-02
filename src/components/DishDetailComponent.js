import React from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap'
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
              <div className="row">
                    {renderDish(props.selectedDish)}
                    {renderComments(props.selectedDish.comments)}
              </div>
              </div>
          );
        }
        else {
          return (<div></div>);
        }
}

export default DishDetail