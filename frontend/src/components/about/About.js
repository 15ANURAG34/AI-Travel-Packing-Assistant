import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> 
                about {firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
              In the world of nutrition and health, every bite matters—especially when managing diabetes. That's where ChefAI steps in, blending the art of cooking with the science of nutrition to serve you not just meals, but personalized dietary experiences. ChefAI is more than just a chatbot; it's your dedicated chef and nutritionist, designed with a singular focus: to support individuals with diabetes in enjoying delicious, health-optimized meals.



            </p>
        </>;
    }

   
    

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            {/* <Terminal text={skillsText()}/> */}
            {/* <Terminal text={miscText()}/> */}
        </Box>
    )
}