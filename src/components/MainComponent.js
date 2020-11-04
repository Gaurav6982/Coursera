import React,{Component} from 'react'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import DishDetail from './DishDetailComponent'
import {DISHES} from '../shared/dishes'
import {Route,Switch,Redirect} from 'react-router-dom'
import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS,
    };
  }
  render(){
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}/>
      );
    }
    const viewDish=({match})=>{
      return(
        <DishDetail selectedDish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
                    comments={this.state.comments.filter((com)=>com.dishId===parseInt(match.params.dishId))}
        />
      );
    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={viewDish}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
  export default Main;