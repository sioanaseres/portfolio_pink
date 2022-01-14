import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>
      Call
      </LinkTitle>
      <LinkItem href='tel:0721.181.760'>
      0721.181.760</LinkItem>
      
      </LinkColumn>

      <LinkColumn>
      <LinkTitle>
      Email
      </LinkTitle>
      <LinkItem href='mailto:sioana.seres@gmail.com'>
      sioana.seres@gmail.com</LinkItem>
      
      </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          Keep on improving
          </Slogan>
        </CompanyContainer>
     <SocialContainer>
     <SocialIcons href='https://github.com/sioanaseres?tab=repositories'>
    <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href='https://www.linkedin.com/in/ioana-cosoreanu-seres-00b381199/'>
    <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
