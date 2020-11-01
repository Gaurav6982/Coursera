import React,{Component} from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap'
class DishDetail extends Component{
    renderDish(dish) {
        if(dish!=null)
        {
        return(
          <div className="col-12 col-md-5 m-1">
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
    renderComments(comments) {
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
               <div className="col-12 col-md-5 m-1">
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
    renderHeading(dish)
    {
        if(dish!=null)
        {
            return(<h4>Comments</h4>);
        }
        else
        {
            return (<div></div>);
        }
    }
    render(){
        if (this.props.selectedDish != null) {
            return(
                <div className="row">
                      {this.renderDish(this.props.selectedDish)}
                      {this.renderComments(this.props.selectedDish.comments)}
                </div>
            );
          }
          else {
            return (<div></div>);
          }
    }
}

export default DishDetail