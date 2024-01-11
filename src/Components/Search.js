import React, { useContext, useState } from 'react';
import { Box, Heading, Input, Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import githubContext from './Context';
import './style.css';

function Search() {
  const [username, setUsername] = useState([]);
  const { setUser } = useContext(githubContext);

  const getUserData = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => alert('Failed to get data'));
  };

  const handleSearch = () => {
    getUserData();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      getUserData();
    }
  };

  return (
    <Box>
      <Box mb="20px">
        <Heading color="green">Github User Search</Heading>
      </Box>
      <Flex justifyContent="center" mb="10px">
        <Input
          fontSize="xl"
          color="black"
          placeholder="Enter Github Id"
          type="text"
          w="sm"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onKeyUp={handleKeyUp}
        ></Input>
        <Button
          className="searchbtn"
          color="white"
          colorScheme=""
          bgColor="green.600"
          fontSize="xl"
          variant="outline"
          p="10px 20px"
          onClick={handleSearch}> Search
        </Button>
      </Flex>
    </Box>
  );
}

export default Search;
