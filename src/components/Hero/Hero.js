import React from "react";
import Link from 'next/link';

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection, ImgContainer, ImgName,Slogan } from "./HeroStyles";
import { Img } from "../../constants/constants";
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';

const Hero = (props) => (
  <>
  
    <Section row nopadding>
    
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          An avid technology enthusiast interested in Computer Science and
          Software Engineering. Possesses strong work ethics, be it in
          independent projects or collaborative projects in a team.
        </SectionText>
        <Link href="#about">
        <Button onClick={props.handleClick} >Learn More</Button>
        </Link>
        
      </LeftSection>
    </Section>

    <RightSection>
      <div>
        <ImgContainer src="https://i.postimg.cc/rwTd96tD/Shourya-Image.jpg" />
        <ImgName>
          <div>
            <b>Shourya Gupta</b>
            <Slogan><i><b>"  Formed of Passion,  Defined by work  "</b></i></Slogan>
          </div>
        </ImgName>
      </div>
    </RightSection>
    
  </>
);

export default Hero;
