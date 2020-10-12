import { message } from 'antd';
import * as emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = ({ data }) => {
    // const [url, setUrl] = useState('mailto:ruth.morata@gmail.com?subject=subject&body=body');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     window.open(`mailto:${email}?subject=${subject}&body=${name}: ${body}`);
    // };

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm('service_esf484m', 'template_q74iozl', e.target, 'user_GJvEX9ClPz7BoOhSvR0rw')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );

        message.success({
            content: 'Successfully logged in!',
            duration: 3,
            className: 'success-message',
        });
    }

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1>
                        <span>Get In Touch.</span>
                    </h1>
                </div>

                <div className="ten columns">
                    <p className="lead"> {data?.contactmessage}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    {/* <form id="contactForm" name="contactForm"> */}
                    <form
                        className="contact-form"
                        id="contactForm"
                        name="contactForm"
                        onSubmit={sendEmail}
                    >
                        <fieldset>
                            <div>
                                <label htmlFor="from_name">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    value={name}
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="from_name"
                                    name="from_name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="from_email">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    value={email}
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="from_email"
                                    name="from_email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    value={subject}
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="subject"
                                    name="subject"
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    cols="50"
                                    rows="15"
                                    id="message"
                                    name="message"
                                ></textarea>
                            </div>

                            <div className="button-container">
                                {/* <button type="submit" onClick={handleClick} className="submit">
                                    Submit
                                </button> */}
                                <button type="submit" className="submit">
                                    Submit
                                </button>

                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> There was an error. Please try again.</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!
                        <br />
                    </div>
                </div>

                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Contact Details</h4>
                        <p className="address">
                            {data?.name}
                            {data?.address.street} <br />
                            {data?.address.city}, {data?.address.country}
                            <br />
                            <span>
                                <a href={'tel:' + data?.phone}>{data?.phone}</a>
                            </span>
                            <br />
                            <span>
                                <a href={'mailto:' + data?.email}>{data?.email}</a>
                            </span>
                        </p>
                    </div>

                    <div className="widget widget_tweets"></div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;
