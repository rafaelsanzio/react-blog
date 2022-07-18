import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardDescription = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

export const Description = styled.div`
  background: '#FF872C';
  padding: 22px 32px;
  border-radius: 5px;
  color: '#fff';

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;
