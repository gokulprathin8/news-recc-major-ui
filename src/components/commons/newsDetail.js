import React from "react";
import NavbarCustom from "./navbar";
import "./newsDetails.css";
import { useLocation } from "react-router-dom";

const NewsDetail = (props) => {
    const location = useLocation();
    const { title, body } = location.state;

    return (
        <React.Fragment>
            <NavbarCustom />
            <img className="imageSrc" src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"  alt=""/>
            <text className="textOverlay" >{title}</text>
            <div className="core-border">

                {body}

                <div className="about">
                    <br/><br/>
                     <p>Author: <b>{props.author}</b></p>
                     <p>Published: <b>{props.published}</b></p>
                     <p>Views: <b>{props.views}</b></p>
                </div>
            </div>
        </React.Fragment>
    )
}

NewsDetail.defaultProps = {
    title: "Viral Video of Mumbai's Trident Hotel 'Collapsing' in Cyclone Tauktae Turns Out to be from Saudi Arabia",
    body: `
        Amid several images and videos of the damage caused by Cyclone Tauktae that have taken over social media, one particular video showing a chunk of a building collapsing into a parking lot has gone viral. The video surfaced even as the powerful cyclone continued to create wreak havoc in Maharashtra on Monday and caused considerable damage to property. The video alleged that the building was actually the iconic Trident Hotel at Mumbai’s Nariman Point. It claimed that the building sustained considerable damage due to the gusty winds that blew in Mumbai and touched nearly 90 kmph. The video, however, is not from Mumbai. The video was seemingly shot
        Videos of the alleged damage to Trident Hotel went viral on social media.
        watsapp fwd saying infront of trident hotel this morning @IndiaWeatherMan pic.twitter.com/2OnmoAG222— Parag Pai (@equitysoul) May 17, 2021
        With the wind speed of 70 to 90 kilometre per hour this is what happened outside hotel Trident Nariman point Mumbai pic.twitter.com/7EdyCnY5e1— 💝🌹💖jaggirmRanbir💖🌹💝 (@jaggirm) May 17, 2021
    `,
    author: 'Admin',
    published: '12-07-2020',
    views: 40

};

export default NewsDetail;
