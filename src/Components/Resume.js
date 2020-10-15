// import '@fortawesome/fontawesome-free/js/all.js';
import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                return (
                    <div key={education.school}>
                        <h3>{education.school}</h3>
                        <p className="info">
                            {education.degree} <span>&bull;</span>
                            <em className="duration-and-location"> {education.duration} </em>
                            <span>&bull;</span>
                            <em className="duration-and-location"> {education.location} </em>
                        </p>
                        <ul className="fa-ul custom-list">
                            {education.description1 && (
                                <li>
                                    <i className="fa fa-arrow-right fa-fw"></i>
                                    {education.description1}
                                </li>
                            )}
                            {education.description2 && (
                                <li>
                                    <i className="fa fa-arrow-right fa-fw"></i>
                                    {education.description2}
                                </li>
                            )}
                            {education.description3 && (
                                <li>
                                    <i className="fa fa-arrow-right fa-fw"></i>
                                    {education.description3}
                                </li>
                            )}
                            {education.description4 && (
                                <li>
                                    <i className="fa fa-arrow-right fa-fw"></i>
                                    {education.description4}
                                </li>
                            )}
                        </ul>
                    </div>
                );
            });
            var work = this.props.data.work.map(function (work) {
                return (
                    <div key={work.company}>
                        <h3>{work.company}</h3>
                        <p className="info">
                            {work.title}
                            <span>&bull;</span>{' '}
                            <em className="duration-and-location"> {work.duration} </em>
                            <span>&bull;</span>
                            <em className="duration-and-location"> {work.location} </em>
                        </p>
                        <ul className="fa-ul custom-list">
                            <li>
                                <i className="fa fa-check fa-fw"></i>
                                {work.description1}
                            </li>
                            {work.description2 && (
                                <li>
                                    <i className="fa fa-check fa-fw"></i>
                                    {work.description2}
                                </li>
                            )}
                            {work.description3 && (
                                <li>
                                    <i className="fa fa-check fa-fw"></i>
                                    {work.description3}
                                </li>
                            )}
                            {work.description4 && (
                                <li>
                                    <i className="fa fa-check fa-fw"></i>
                                    {work.description4}
                                </li>
                            )}
                        </ul>
                    </div>
                );
            });
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return (
                    <li key={skills.name}>
                        <span style={{ width: skills.level }} className={className}></span>
                        <em>{skills.name}</em>
                    </li>
                );
            });
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillmessage}</p>

                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
