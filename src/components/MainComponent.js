import React,{Component} from 'react'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import DishDetail from './DishDetailComponent'

import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const mapStateToProps=state=>{
  return {
    dishes:state.dishes,
    promotions:state.promotions,
    leaders:state.leaders,
    comments:state.comments,
  }
}
class Main extends Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}/>
      );
    }
    const viewDish=({match})=>{
      return(
        <DishDetail selectedDish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
                    comments={this.props.comments.filter((com)=>com.dishId===parseInt(match.params.dishId))}
        />
      );
    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={viewDish}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
  export default withRouter(connect(mapStateToProps)(Main));