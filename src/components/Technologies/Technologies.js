import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FiDatabase } from 'react-icons/fi';
import { SiWritedotas } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Front-end.
    </SectionText>
    <List>

   <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <b>Node.js , Express.js and Firebase</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            <b>React.js,   Next.js,  Typescript</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
      <ListItem>
        <picture>
          <FiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database and Cloud Architecture</ListTitle>
          <ListParagraph>
            Experience with tools like <br />
            <b>AWS,  MongoDB</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Structures and Algorithms</ListTitle>
          <ListParagraph>
            Experience with languages like <br />
            <b>C++,  Java</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with frameworks like <br />
            <b>Flask,  Python,  Numpy,  Pandas, Scikit</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
