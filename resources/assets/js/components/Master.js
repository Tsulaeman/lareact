import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  
  linkClass(e){
      let {location}  =   this.props;
      let pathname    =   location.pathname.replace('/','');
      if(e == pathname){
          return 'active';
      }else if(e == ''){
          //return 'active';
      }
      
      return '';
  }
  
  render(){
    
    //console.log(pathname);
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">AppDividend</a>
            </div>
            <ul className="nav navbar-nav">
              <li className={this.linkClass('')}>
                <Link to="/">Home</Link>
              </li>
              <li className={this.linkClass('add-item')}>
                <Link to="add-item">Create Item</Link>
              </li>
              <li className={this.linkClass('display-items')}>
                <Link to="display-items">Display Items</Link>
              </li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;