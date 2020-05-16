import React, {Component, useEffect, useRef, useState} from "react";
import BottomNavBar from "../components/BottomNavBar";
import VisaCard from "../components/VisaCard";
import Profile from '../components/Profile';

import "./LandingPage.css";
import ProgressBar from "../components/ProgressBar";
import Hero from "../components/Hero";
import QuestCard from "../components/QuestCard.jsx";

const Section = ({section, children}) => (
    <div className="section">
        <h2>{section}</h2>
        {children}
    </div>
);

const defaultQuests = [
    {name: "Direct credit your salary", progress: 2, criteria: 6, exp: 500},
    {name: "Save into fixed deposits", progress: 2200, criteria: 10000, exp: 1000},
    ];

const defaultUser = {
    name: "Shin Chan",
    balance: 5683
}


const LandingPage = ({handleNav, quests=defaultQuests, user: {name, balance}=defaultUser}) => {
    useEffect(() => {
        fetch("/user/123")
            .then((e) => e.json())
            .then(b => console.log(b))
    })

    return (
      <div className="page">
          <Hero
            heroContent={
                <div>
                    <h1>
                        Welcome back, {name}
                    </h1>
                    <p>${balance}</p>
                </div>
            }
            navbarContent={
                <div>
                    <p>${name}</p>
                    <p>${balance}</p>
                </div>
            }
          />
        <div className="content">
            <Section section="Profile">
                <Profile />
            </Section>
            <Section section="Quests">
                {quests.map(q => <QuestCard quest={q} key={q.name}/>)}
            </Section>
        </div>
        <BottomNavBar active={"home"} handleNav={handleNav}/>
      </div>
    );
}


export default LandingPage;
