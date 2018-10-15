
import React from 'react';
import ReactDOM from 'react-dom';

/*This is a navbar element (link on the navbar)*/
class NavBar_Element extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.active==this.props.text);
        return (
            <li class={(this.props.active===this.props.text)?"nav-item active":"nav-item"}>       
                    <a class="nav-link" href={this.props.link}>{this.props.text}</a>      
            </li>
        );
    }
}

/*This is a navbar element (link on the navbar) but with a dropdown menu*/
/*Not Modifiable for the mean time*/
class NavBar_DDElement extends NavBar_Element{
   
   
    render(){
        
        return(
        <li class="nav-item dropdown">
                    <a class= {(this.props.active===this.props.text)?"nav-link dropdown-toggle active":"nav-link dropdown-toggle"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.text}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <DD_Link text="Friends" link="#"></DD_Link>
                      <DD_Link text="Friends" link="#"></DD_Link>
                      <DD_Divider ></DD_Divider>
                      <DD_Link text="Logout" link="#"></DD_Link>
                    </div>
        </li>
        );
    }
}

/*Class for elements in the dropdown that is a link*/
class DD_Link extends React.Component{
    render(){
        return(
        <a class="dropdown-item" href={this.props.link}>{this.props.text}</a>
        );
    }
}

/*Class for elements in the dropdown that is a line divider*/
class DD_Divider extends React.Component{
    render(){
        return ( <div class="dropdown-divider"></div>);
    }
}

/*Navbar Class*/
export default class Navbar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadowed">
            <a class="navbar-brand" href="#">INFOHOLIC</a>
            <ul class="navbar-nav mr-auto">
                <NavBar_Element text="Home" link='#' active={this.props.active}></NavBar_Element>
                <NavBar_Element text="Ask A Question" link='#' active={this.props.active}></NavBar_Element>
                <NavBar_DDElement text="My Account" active={this.props.active}></NavBar_DDElement>
            </ul>
            <form class="form-inline">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </nav>
        );
    }
};
