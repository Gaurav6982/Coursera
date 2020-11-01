import React,{Component} from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap'
class DishDetail extends Component{
    renderDish(dish)
    {
        if(dish!=null)
        {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
    renderComments(dish)
    {
        if(dish!=null)
        {
            const comments=this.props.selectedDish.comments.slice();
            const show=comments.map(com=>{
                return(
                <li key={com.id} className="my-3"><p className="mb-2">{com.comment}</p><p>--{com.author},{com.date}</p></li>
                );
            })
            return(
                show
            );
        }
        else
        {
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
        return(
            <div className="row mt-2">
                <div  className="col-12 col-md-5">
                {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5">
                {this.renderHeading(this.props.selectedDish)}
                <ul className="list-unstyled">
                    {this.renderComments(this.props.selectedDish)}
                </ul>
                </div>
            </div>
        );
    }
}

export default DishDetail