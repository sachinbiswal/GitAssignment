import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import githubContext from './Context'
import "./style.css"

function Profile() {
  const {user}=useContext(githubContext)
   return (

    <Box >
        <img  style={{margin:"auto",width:"300px",height:"300px",borderRadius:"8px"}} src={user.avatar_url || "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/05/data_science_projects_github.png"}   alt="" />  

     <Flex m="20px 0 20px 0" alignItems="center"  justifyContent="space-around">
         <Box textAlign="start">
         <Text  color="red.900" fontWeight="bold" fontSize='lg'>
              {user.name}
            </Text>
             <Text   color="gray.700" fontWeight="" fontSize='lg'>
              {user.login || 0}
            </Text>
         </Box>
                
        <a  href={`https://github.com/${user.login}`}> 
          <Button colorScheme='blue'    color="white">Profile</Button>
        </a>
     </Flex>

   </Box>

    )
}

export default Profile
