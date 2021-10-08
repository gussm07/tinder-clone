import { SwipeableDrawer } from "@material-ui/core";
import { OutlinedFlagOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
    const[people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);

        }

        fetchData();
    }, []);



    const swiped = (direction, nameToDelete) => {
        console.log("removing: "+nameToDelete);
       
    }; 
    
    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }; 

    /* EMPIEZA LA CLASE PARA MOSTRAR PERSONA */
    return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                > 
                <div
                style={{backgroundImage: `url(${person.imgUrl})`}}
                className="card"
                >
                <h1>{person.name}</h1>

                </div>
                </TinderCard>
            ))}
        </div>
    </div>
    
    );
    
    /* TERMINA CLASE PARA MOSTRAR PERSONA */
    
}

export default TinderCards
