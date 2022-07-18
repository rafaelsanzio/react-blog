import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) =>
      size === 'small' ? '0 20px 50px' : '0 20px 150px'};
    display: flex;
    align-items: center;
    justify-content: center;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  section {
    padding: 0px 280px;
    display: flex;

    img {
      margin-right: 80px;
      border-radius: 50%;
      max-width: 220px;
      max-height: 210px;
    }

    div {
      h1 {
        color: #fff;
        font-size: 36px;
        font-weight: normal;
        line-height: 54px;
      }

      p {
        color: #fff;
      }
    }
  }
`;
