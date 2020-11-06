import React,{Component} from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText,Breadcrumb,BreadcrumbItem,Button,Modal,ModalBody,ModalHeader,Label} from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm,Control,Errors} from 'react-redux-form'
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
      this.props.addComment(this.props.dishId,values.author,values.rating,values.comment);
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
function renderComments(comments,addComment,dishId) {
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
            <CommentForm addComment={addComment} dishId={dishId}/>
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
                    {renderComments(props.comments,props.addComment,props.selectedDish.id)}
                 
              </div>
              </div>
          );
        }
        else {
          return (<div></div>);
        }
}

export default DishDetail