import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;

  display: grid;
  grid-gap: 1rem;
  padding: 1rem;

  .profileArea {
    display: none ;

    @media (min-width: 860px) {
        display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    grid-template-columns: 160px 1fr 312px;
  grid-template-areas: "profileArea welcomeArea profileRelationsArea";
  }
  `;

  export default MainGrid