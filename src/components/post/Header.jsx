import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { rhythm } from 'styling/typography';
import Fold from './Fold';

const Container = styled.div`
  padding: ${rhythm(1)};

  text-transform: none;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: ${rhythm(0.3)};

  color: ${props => (props.dark ? 'color: rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)')};

  font-size: 1.65rem;
  font-weight: inherit;
`;

const StyledTime = styled.span`
  margin: 0;

  color: ${props => (props.dark ? 'color: rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)')};

  font-size: 1.1rem;
  font-weight: inherit;
`;

const Time = (props) => {
  const { datetime, children, dark } = props;

  return (
    <time dateTime={datetime}>
      <StyledTime dark={dark}>{children}</StyledTime>
    </time>
  );
};

Time.propTypes = {
  datetime: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  dark: PropTypes.bool.isRequired,
};

const Header = (props) => {
  const {
    date,
    interactive,
    mrDate,
    title,
  } = props;

  return (
    <Fold {...props}>
      <Container>
        <Title dark={!interactive}>{title}</Title>
        <Time dark={!interactive} datetime={mrDate}>{date}</Time>
      </Container>
    </Fold>
  );
};

Header.propTypes = {
  date: PropTypes.string.isRequired,
  interactive: PropTypes.bool.isRequired,
  mrDate: PropTypes.string.isRequired,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  slug: undefined,
};

export default Header;
