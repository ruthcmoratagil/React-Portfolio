import React, { Component } from 'react';

class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = 'images/' + this.props.data.image;
            var bio1 = this.props.data.bio1;
            var bio2 = this.props.data.bio2;
            var street = this.props.data.address.street;
            var country = this.props.data.address.country;
            var city = this.props.data.address.city;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src={profilepic}
                            alt="Profile Pic"
                            title="Photo by Justin P Brown Photography - www.justinpbrown.com"
                        />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{bio1}</p>
                        <p>{bio2}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact</h2>
                                <p className="address">
                                    <span>{name}</span>
                                    <span>
                                        {street}
                                        <br />
                                        {city}, {country}
                                    </span>
                                    <br />
                                    <span>
                                        <a href={'tel:' + phone}>{phone}</a>
                                    </span>
                                    <br />
                                    <span>
                                        <a href={'mailto:' + email}>{email}</a>
                                    </span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a
                                        href={resumeDownload}
                                        className="button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                    </a>
                                    <p>Not available at the moment.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
