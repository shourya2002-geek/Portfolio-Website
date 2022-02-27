import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        An avid technology enthusiast interested in Computer Science and
        Software Engineering. Possesses strong work ethics, be it in independent
        projects or collaborative projects in a team.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
