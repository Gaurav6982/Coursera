import React,{Component} from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText,Breadcrumb,BreadcrumbItem,Button,Modal,ModalBody,ModalHeader,Label} from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm,Control,Errors} from 'react-redux-form'
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
const minLength=(len)=>(val)=>val && (val.length>=len);
const maxLength=(len)=>(val)=>!val || (val.length<=len);
class CommentForm extends Component{
  constructor(props){
      super(props);
      this.state={
          isModalOpen:false,
      };
      this.toggleModal=this.toggleModal.bind(this);
  }
  toggleModal(){
      this.setState({isModalOpen:!this.state.isModalOpen});
  }
  handleSubmit(values){
      this.toggleModal();
      this.props.postComment(this.props.dishId,values.author,values.rating,values.comment);
  }
  
  render(){
      return(
          <div>
              <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span>Submit Comment</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
                  Submit Comment
              </ModalHeader>
              <ModalBody>
                  <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                      <div className="form-group">
                          <Label htmlFor="rating">Rating</Label>
                          <Control.select model=".rating" id="rating" name="rating" className="form-control">
                              <option >1</option>
                              <option >2</option>
                              <option >3</option>
                              <option >4</option>
                              <option >5</option>
                          </Control.select>
                      </div>
                      <div className="form-group">
                          <Label htmlFor="author">Your Name</Label>
                          <Control.text 
                              model=".author"
                              id="author"
                              name="author"
                              className="form-control"
                              placeholder="Your Name"
                              validators={{
                                  minLength:minLength(2),maxLength:maxLength(15)
                              }}
                          />
                          <Errors
                              className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                  minLength:"Must be Greater than 2 characters.",
                                  maxLength:"Must be 15 Characters or less."
                              }}
                          />
                      </div>
                      <div className="form-group">
                          <Label htmlFor="comment">Comment</Label>
                          <Control.textarea 
                              model=".comment"
                              id="comment"
                              name="comment"
                              className="form-control"
                              rows="6"
                          />
                      </div>
                      <Button type="submit" color="primary">Submit</Button>
                  </LocalForm>
              </ModalBody>
          </Modal>
          </div>
      );
  }
}
function RenderDish({dish}) {
  if(dish!=null)
  {
  return(
    <div className="col-12 col-md-5 my-2">
      <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
             <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </FadeTransform>
     </div>
       );
  }
  else
  return(<div></div>);
}
function RenderComments({comments,postComment,dishId}) {
  if(comments != null) {
    
    const commentListItems = comments.map((comment) =>
       {
         return (
          <Fade in>
                <li key={comment.id}>
                   <p> {comment.comment} </p>
                   <p>--- {comment.author}, {comment.date}</p>
                </li>
                </Fade>
         );
       });
    
       return (
         <div className="col-12 col-md-5 my-2">
            <h4>Comments</h4>
            <ul className="list-unstyled">
            <Stagger in>
               { commentListItems }
               </Stagger>
            </ul>
            <CommentForm postComment={postComment} dishId={dishId}/>
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
      if(props.isLoading==true)
      {
        return(<Loading/>);
      }
      else if(props.errMess!=null)
      {
        return (<h4>{props.errMess}</h4>);
      }
      else if (props.dish != null) {
          return(
              <div className="container">
                <div className="row my-2">
                  <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">MENU</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                  </div>
                </div>
              <div className="row">

                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
                 
              </div>
              </div>
          );
        }
        else {
          return (<div></div>);
        }
}

export default DishDetail