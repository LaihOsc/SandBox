import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Box, Text, Button, Center } from '@chakra-ui/react';

export default function Joke() {

    const options = {
        method: 'GET',
        url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        headers: {
          'X-RapidAPI-Key': 'b345a1c0ccmsh73f6021164cfd65p14e677jsn43b16afc9fe0',
          'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
        }
      };
    
      const [reference, setReference] = useState(0)
      const [data, setData] = useState('')
    
      useEffect(() => {
        axios.request(options).then((response) => {
          setData(response);
        }).catch((error) => {
          console.error(error);
        });
        }, [reference]);
    
        const handleButtonClick = () => {
          setReference(reference + 1)
        }
    

  return (
    <div>
      <Box maxW={500} minW={500} height={500} p={5} borderWidth="1px">
           
           <Center flexDir={'column'} justifyContent={'center'} alignItems={'center'} h={'full'}>

            <Text
            fontSize={20}>
              Joke of the day:
            </Text>

            <Text>
            {data.status == 200 ? data.data[0].joke : null}                  
            </Text>


            <Button onClick={handleButtonClick}>Click me to get a new joke!</Button>

            </Center>
        </Box>
    </div>
  )
}
