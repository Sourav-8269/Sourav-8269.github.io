import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Heading } from '@chakra-ui/react';
import "../CSS/skill.css"

const Skills = () => {
  useEffect(()=>{
    AOS.init({delay:400});
},[])
  return (
    <div name="Skills"  padding="5%" >
      {/* <h1>Projects</h1> */}
      <Heading padding="6%" data-aos="zoom-in-up" id="heading">TECHNICAL SKILLS</Heading>
      <div data-aos="zoom-in">
      <div id="skill" style={{display:"grid",marginTop:"0%",gridTemplateColumns:"repeat(auto-fit,minmax(150px,min-content))",justifyContent:"center",gap:"2%",width:"80%",margin:"auto"}}>
        <div data-aos="fade-right"  style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/html.8664168d5bc90b1a24396f85aadbf623.svg" alt="" />
          <p>HTML</p>
        </div>
        <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg" alt="" />
          <p>CSS</p>
        </div>
        <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/javascript.4c1b5332c1b1057928f6f06cf972c91c.svg" alt="" />
          <p>JavaScript</p>
        </div>
        <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg" alt="" />
          <p>React</p>
        </div>
        <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/redux.7fe607aacc31f6e6199e70f16aae407e.svg" alt="" />
          <p>Redux</p>
        </div>
        <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/typescript.17936c69824e11a996c4.png" alt="" />
          <p>TypeScript</p>
        </div>
        <div data-aos="fade-left" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%" ,cursor:"pointer"}} >
          <img src="https://debobrota-haldar.netlify.app/static/media/chakra.15320604467d004df871.png" alt="" />
          <p>Chakra UI</p>
        </div>
        <div data-aos="fade-left" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%" ,cursor:"pointer"}}>
          <img src="https://debobrota-haldar.netlify.app/static/media/nodejs.10c9e2aa0ca7edf36fceae25fec038a1.svg" alt="" />
          <p>Node JS</p>
        </div>
        <div data-aos="fade-left" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/express.4925c0127df8857c18b38329795ce88f.svg" alt="" />
          <p>Express</p>
        </div>
        <div data-aos="fade-left" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="https://debobrota-haldar.netlify.app/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg" alt="" />
          <p>MongoDB</p>
        </div>
        <div data-aos="fade-left" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%" ,cursor:"pointer"}}>
          <img src="https://debobrota-haldar.netlify.app/static/media/git.c08353563539c6459b353f29d8dd7bf2.svg" alt="" />
          <p>Git</p>
        </div>
        <div data-aos="fade-left" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%" ,cursor:"pointer"}}>
          <img src="https://debobrota-haldar.netlify.app/static/media/npm.87689eab730642c86d2b01f3ef4a19e3.svg" alt="" />
          <p>npm</p>
      </div>
      <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%" ,cursor:"pointer"}}>
          <img src="https://debobrota-haldar.netlify.app/static/media/database.24991eee32623f453b1c.png" alt="" />
          <p>DS & Algo</p>
        </div>
        <div data-aos="fade-right" style={{width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%" ,cursor:"pointer"}}>
          <img style={{height:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/cypress.bb8c9887bc48838c8d07.webp" alt="" />
        
          <p>Cypress</p>
        </div>
        <div data-aos="fade-right" style={{marginBottom:"40%",width:"120px",backgroundColor:"#9b9ea8",borderRadius:"15px",height:"140px",marginLeft:"5%",padding:"10%",cursor:"pointer" }}>
          <img src="data:image/png;base64,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" alt="" />
          <p>Postman</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Skills