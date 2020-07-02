import Head from 'next/head';
import styled from '@emotion/styled'

const Heading = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <div>
      <Heading>Inicio</Heading>
    </div>
  )
}
