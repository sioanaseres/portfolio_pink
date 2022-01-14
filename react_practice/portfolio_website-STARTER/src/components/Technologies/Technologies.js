import React from 'react';
import { DiHtml5, DiReact, DiPhotoshop, DiCss3} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
 <SectionDivider/>
 <br />
 <SectionTitle>
   Technologies
 </SectionTitle>
  <SectionText>
On a daily basis I develop HTML emails using HTML, CSS, build responsive/adaptive dynamic emails. 
<br />

Also I make changes to email code on the fly while still maintaining the code structure and build/update HTML templates.
<br />
For all emails I perform thorough QA to ensure campaigns are executed to perfection, including proper rendering across all major devices and email clients.

<br /><br />

Beside day by day activities, I like to watch all kind of tutorials & challenges in order to practice both Javascript and React.
  </SectionText>
<List>
<ListItem>
    <DiHtml5 size="3rem"/>
<ListContainer>
  <ListTitle>
    Front-End
  </ListTitle>
  <ListParagraph>
   Experience with HTML 
  </ListParagraph>
</ListContainer>
  </ListItem>
  <ListItem>
    <DiCss3 size="3rem"/>
<ListContainer>
  <ListTitle>
   Styling
  </ListTitle>
  <ListParagraph>
    Experience with CSS
  </ListParagraph>
</ListContainer>
  </ListItem>
  <br />
  <ListItem>
    <DiReact size="3rem"/>
<ListContainer>
  <ListTitle>
    Framework
  </ListTitle>
  <ListParagraph>
    Practice with React.js
  </ListParagraph>
</ListContainer>
  </ListItem>
  <ListItem>
    <DiPhotoshop size="3rem"/>
<ListContainer>
  <ListTitle>
    UI/UX
  </ListTitle>
  <ListParagraph>
  Experience with Photoshop
  </ListParagraph>
</ListContainer>
  </ListItem>
</List>
 </Section>
);

export default Technologies;
