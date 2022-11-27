import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';
import { AlurakutMenu } from '../src/lib/AluraKutCommons';

function ProfileUserSideBar(props) {
  console.log(props);
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} alt="imagem de perfil do seu usuário" style={
        { borderRadius: '8px' }
      } />
    </Box>
  )
}

export default function Home() {
  const userAleatory = 'nioritos';
  return (
    <>
    <AlurakutMenu/>
      <MainGrid>
      <div className='profileArea' style={{ gridArea: 'profileArea' }}>
        <ProfileUserSideBar githubUser={userAleatory}/>
      </div>
      <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
        <Box>
          bem vindo
        </Box>
      </div>
      <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Pessoas da comunidade

        </Box>

        <Box>
          Comunidade
        </Box>
      </div>

    </MainGrid>
    </>
  )
}
