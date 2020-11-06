import React,{Component} from 'react'
import {Navbar,NavbarBrand,Nav,NavItem,Collapse,NavbarToggler,Jumbotron,Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Input,Label} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isNavOpen:true,
            isModalOpen:false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});
    }
    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen});
    }
    handleSubmit(e){
        e.preventDefault();
        this.toggleModal();
        alert("Username : "+this.username.value+" Password : "+this.password.value+" Remember "+this.remember.checked);
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={()=>this.toggleNav()}/>
                        <NavbarBrand className="mr-auto" href="/"> Coursera </NavbarBrand>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home"></span>HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info"></span>ABOUT US
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list"></span>MENU
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card"></span>CONTACT US
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Button outline onClick={()=>this.toggleModal()}><span className="fa fa-sign-in"></span>Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={()=>this.toggleModal()}>
                    <ModalHeader toggle={()=>this.toggleModal()}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;