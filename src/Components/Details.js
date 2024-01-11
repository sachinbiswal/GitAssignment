import React, { useContext } from 'react';
import { Box, Card, CardBody, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import githubContext from './Context';

function Details() {
  const { user } = useContext(githubContext);

  const isValidDate = (dateString) => !isNaN(new Date(dateString).getTime());

  const formattedDate = isValidDate(user.created_at)
    ? new Date(user.created_at).toISOString().split('T')[0]
    : '0';

  return (
    <Card w="100%" h="100%" className='abc' >
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          
        <Box>
            <Heading size='sm' textTransform='uppercase'>
              Profile created
            </Heading>
            <Text pt='2' color="red.900" fontWeight="bold" fontSize='md'>
              {formattedDate}
            </Text>
          </Box>
          
          <Box>
            <Heading size='sm' textTransform='uppercase'>
              Repositories
            </Heading>
            <Text pt='2' color="red.900" fontWeight="bold" fontSize='sm'>
              {user.public_repos || 0}
            </Text>
          </Box>

          <Box>
            <Heading size='sm' textTransform='uppercase'>
              Gists
            </Heading>
            <Text pt='2' color="red.900" fontWeight="bold" fontSize='md'>
              {user.public_gists || 0}
            </Text>
          </Box>

         

          <Box>
            <Heading size='sm' textTransform='uppercase'>
              location
            </Heading>
            <Text pt='2' color="red.900" fontWeight="bold" fontSize='md'>
              {user.location}
            </Text>
          </Box>

        </Stack>
      </CardBody>
    </Card>
  );
}

export default Details;
