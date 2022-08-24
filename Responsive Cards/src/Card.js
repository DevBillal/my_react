import React, { Component } from 'react';
import IMG from './img/Photos';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="body">
                <div className="card-grid-wrapper">
                    <div className="name">
                        <h1 className="tc black grow">Responsive Card's .</h1>
                    </div>
                    <div className="tc pa3 ma3 br3 grow dib shadow-5 black bg-washed-blue hover-bg-white">
                        <div className="img-background grow shadow-4 br3 bg-light-yellow">
                            <img src={IMG.dad} alt='al-quran img'/>
                        </div>
                        <div className="grow">
                            <h2>Shydul Hoque</h2>
                            <p className="fw5 silver">Our Father.</p>
                        </div>
                        {/* <div className="grow dib">
                            <p className="fw6">&#2547;&infin;</p>
                        </div> */}
                    </div>
                    <div className="tc pa3 ma3 br3 grow dib shadow-5 black bg-washed-blue hover-bg-white">
                        <div className="img-background grow shadow-4 br3 bg-light-red">
                            <img src={IMG.mom} alt='al-quran img'/>
                        </div>
                        <div className="grow">
                            <h2>Shahanaz Begum</h2>
                            <p className="fw5 silver">Our Mother</p>
                        </div>
                        {/* <div className="grow dib">
                            <p className="fw6">&#2547;&infin;</p>
                        </div> */}
                    </div>
                    <div className="tc pa3 ma3 br3 grow dib shadow-5 black bg-washed-blue hover-bg-white">
                        <div className="img-background grow shadow-4 br3 bg-light-purple">
                            <img src={IMG.boroVai} alt='al-quran img'/>
                        </div>
                        <div className="grow">
                            <h2>Nazrul Islam</h2>
                            <p className="fw5 silver">B.C.S Cadre</p>
                        </div>
                        {/* <div className="grow dib">
                            <p className="fw6">&#2547;&infin;</p>
                        </div> */}
                    </div>
                    <div className="tc pa3 ma3 br3 grow dib shadow-5 black bg-washed-blue hover-bg-white">
                        <div className="img-background grow shadow-4 br3 bg-yellow">
                            <img src={IMG.shah} alt='al-quran img'/>
                        </div>
                        <div className="grow">
                            <h2>Ariyan Shah</h2>
                            <p className="fw5 silver">Programmer.<br />PHP,C++,Python etc.</p>
                        </div>
                        {/* <div className="grow dib">
                            <p className="fw6">&#2547;&infin;</p>
                        </div> */}
                    </div>
                    <div className="tc pa3 ma3 br3 grow dib shadow-5 black bg-washed-blue hover-bg-white">
                        <div className="img-background grow shadow-4 br3 bg-light-green">
                            <img src={IMG.dipu} alt='al-quran img'/>
                        </div>
                        <div className="grow">
                            <h2>Billal Hossan</h2>
                            <p className="fw5 silver">I'm a Web-Developer<br /> React.js & Node.js etc.</p>
                        </div>
                        {/* <div className="grow dib">
                            <p className="fw6">&#2547;&infin;</p>
                        </div> */}
                    </div>
                    <div className="tc pa3 ma3 br3 grow dib shadow-5 black bg-washed-blue hover-bg-white">
                        <div className="img-background grow bg-dark-gray shadow-4 br3 ">
                        {/***/}
                            <img src={IMG.tanha} alt='al-quran img'/>
                        </div>
                        <div className="grow">
                            <h2>Kubra Tanha</h2>
                            <p className="fw5 silver">I'm a Graphic's Designer</p>
                        </div>
                        {/* <div className="grow dib">
                            <p className="fw6">&#2547;&infin;</p>
                        </div> */}
                    </div>
                    <div className="name">
                        <a href="https://github.com/DevBillal">
                            <h4 className="tc grow silver hover-white">
                                gitHub : @Dev.Billal .
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;