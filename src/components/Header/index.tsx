import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'small' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <nav>
        <Link to="/">Blog</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/description">Descrição</Link>
      </nav>
    </header>
    <section>
      <img
        src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg"
        alt="total"
      />
      <div>
        <h1>Rafael Sanzio</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  </Container>
);

export default Header;
