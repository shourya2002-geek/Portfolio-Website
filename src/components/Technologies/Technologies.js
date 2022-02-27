import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I've worked on a wide range fo technologies centered around web
      development
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <b>React.js Next.js TypeScript HTML5 CSS3 Bootstrap</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <b>Node.js Express.js</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Database Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            <b>MongoDB AWS S3</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      


    </List>
  </Section>
);

export default Technologies;
