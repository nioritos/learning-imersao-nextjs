import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';

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
  const githubUser: string = 'nioritos';
  return (
    <MainGrid>
      <div className='profileArea' style={{ gridArea: 'profileArea' }}>
        <ProfileUserSideBar githubUser={githubUser}/>
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
  )
}
