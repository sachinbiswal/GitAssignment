import React, { useContext } from 'react';
import Search from './Search';
import Details from './Details';
import Profile from './Profile';
import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import githubContext from './Context';
import './style.css';

function Home() {
  const mobileMarginTop = useBreakpointValue({ base: '0', md: '100px' });
  const { user } = useContext(githubContext);

  return (
    <Container
      className='homebox'
      p='10px'
      borderRadius='10'
      mt={mobileMarginTop}
      boxShadow='dark-lg'
      maxH='100%'
      maxW='1100px'
    >
      <Box mb='20px'>
        <Search />
      </Box>
      <Flex direction={{ base: 'column', md: 'row' }} justify='space-between'>
        {user!=0 ? (
          <>
            <Box borderRadius='8' w={{ base: '100%', md: '40%' }} boxShadow='dark-lg white' mb={{ base: '20px', md: '0' }}>
              <Profile />
            </Box>
            <Box w={{ base: '100%', md: '60%' }} color='white'>
              <Details />
            </Box>
          </>
        ) : (
          <>
          <img
              src="https://rapidapi.com/blog/wp-content/uploads/2017/01/octocat.gif"
              alt="Octocat GIF"
              style={{ maxWidth: '100%', maxHeight: '300px', margin: '20px auto' }}
            />
          </>
        )}
      </Flex>
    </Container>
  );
}

export default Home;
