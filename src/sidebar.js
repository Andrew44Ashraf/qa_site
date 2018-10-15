
import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar_Element extends React.Component{
    constructor(){
        super();
        

    }



}

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);   
    }
    render(){
        return (
            <nav id="sidebar">
                        <ul class="list-unstyled components">
                            <li class="active">
                                <a href="#"><img src="images/sidebar/outline-person_pin-24px.svg"/> Your Stories</a>
                            </li>
                            <li>
                                <a href="#"><img src="images/sidebar/books.svg" /> Top Stories</a>
                            </li>
                        </ul>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#"><img src="images/sidebar/outline-rowing-24px.svg" /> Sports</a>
                            </li>
                            <li>
                                <a href="#"><img src="images/sidebar/outline-important_devices-24px.svg" /> Technology</a>
                            </li>
                            <li>
                                <a href="#"><img src="images/sidebar/hat.svg" /> Academics</a>
                            </li>
                            <li>
                                <a href="#"><img src="images/sidebar/outline-public-24px.svg" /> Politics</a>
                            </li>
                            <li>
                                <a href="#"><img src="images/sidebar/outline-filter_vintage-24px.svg" /> Science</a>
                            </li>
                            <li>
                                <a href="#moreSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">More</a>
                                <ul class="collapse list-unstyled" id="moreSubmenu">
                                    <li>
                                        <a href="#"><img src="images/sidebar/baseline-local_movies-24px.svg" /> Entertainment</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/sidebar/baseline-local_hospital-24px.svg" /> Health</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/sidebar/baseline-business_center-24px.svg" /> Bussiness / Finance</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
            </nav>
            );
    }
}
