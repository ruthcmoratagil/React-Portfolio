import React, { useState } from 'react';

const Contact = ({ data }) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setMessage(message.replace('\n', '%0D%0A'));
        window.open(
            `mailto:${data?.email}
            ?subject=New message from ruthcmoratagil.dev: ${subject}
            &body=Dear ${name},%0D%0A%0D%0AThank you in advance for your message. Feel free to attach any file if needed or just hit "Send" and I will get back to you as soon as possible :)%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}%0D%0A`
        );
    };

    // A IMPORTS:
    // import * as emailjs from 'emailjs-com';

    // function sendEmail(e) {
    //     e.preventDefault();
    //     emailjs
    //         .sendForm(
    //             'service_esf484m',
    //             'template_q74iozl',
    //             e.target,
    //             'user_GJvEX9ClPz7BoOhSvR0rw'
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );

    // A IMPORTS:
    // import { message } from 'antd';

    // message.success({
    //     content: 'Successfully logged in!',
    //     duration: 3,
    //     className: 'success-message',
    // });
    // }

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
                        // onSubmit={sendEmail}
                    >
                        <fieldset>
                            <div>
                                <label htmlFor="from_name">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    value={name}
                                    type="text"
                                    // defaultValue=""
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
                                    type="email"
                                    // defaultValue=""
                                    size="35"
                                    id="from_email"
                                    name="from_email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject">
                                    Subject <span className="required">*</span>
                                </label>
                                <input
                                    value={subject}
                                    type="text"
                                    // defaultValue=""
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    cols="50"
                                    rows="15"
                                    id="message"
                                    name="message"
                                ></textarea>
                            </div>

                            <div className="button-container">
                                <button
                                    type="submit"
                                    onClick={handleClick}
                                    className="submit"
                                >
                                    Submit
                                </button>

                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning">
                        {' '}
                        There was an error. Please try again.
                    </div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent,
                        thank you!
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
                                <a href={'mailto:' + data?.email}>
                                    {data?.email}
                                </a>
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
