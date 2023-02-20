import { Badge, Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Dog from './Dog';
import Joke from './Joke';



export default function Sandbox() {

  

  return (
    <div>
      <Flex>
       
       <Dog />

       <Joke />
       
      </Flex>
    </div>
  )
}

