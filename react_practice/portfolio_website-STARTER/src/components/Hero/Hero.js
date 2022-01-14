import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
Welcome To <br />
My Personal Portfolio
     </SectionTitle>
    
     <SectionText>
     My name is Ioana Seres, and I am currently an email marketing developer. I've been coding for more than 1 year, and I enjoy it more every day.
     </SectionText>
     <Button onClick={()=> window.location= "https://www.linkedin.com/in/ioana-cosoreanu-seres-00b381199/"}>Learn More</Button>
   </LeftSection>
   </Section>
);

export default Hero;