//import ReactGA from "react-ga";
import $ from 'jquery';
import React, { Component } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Quote from './Components/Quote';
import Resume from './Components/Resume';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {},
        };
    }

    getResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Quote data={this.state.resumeData.quote} />
                <Contact data={this.state.resumeData.main} />
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default App;



// PORTFOLIO

// "portfolio": {
//     "projects": [
//         {
//             "title": "Skyscanner Clone (ReactJS)",
//             "category": "Final Project from Master in Full Stack Development",
//             "image": "skyscanner-clone-skyreader.png",
//             "url": "https://github.com/jaumeserr/Skyscanner-Nuclio/"
//         },
//         {
//             "title": "Pinterest Clone (ReactJS)",
//             "category": "Project from Master in Full Stack Development",
//             "image": "lipsflyer.jpg",
//             "url": "https://www.youtube.com/watch?v=BtJeH_-XYaA"
//         },
//         {
//             "title": "Netflix Clone",
//             "category": "Built with MERN (MongoDB, ExpressJS, ReactJS, NodeJS)",
//             "image": "lipsflyer.jpg",
//             "url": "#"
//         }
//     ]
