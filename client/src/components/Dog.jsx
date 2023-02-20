import React from 'react'
import { Box, Flex, Badge, Text, Image } from '@chakra-ui/react'

export default function Dog() {
  return (
    <div>
      <Box maxW={500} minW={500} minH={500} maxH={500} p={5} borderWidth="1px">
            <Image borderRadius='md' src="https://i.ytimg.com/vi/mwpwPwWIueM/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHeA4ACngOKAgwIABABGGUgVihDMA8=&rs=AOn4CLAcGQUuoa7QCFb8t0yVypzjv2zBMA" />
            <Flex align='baseline' mt='2'>
                <Badge p={3} colorScheme="messenger">Classic</Badge>
                <Text
                ml={2}
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                colorScheme={'messenger'}
                >
                Verified &bull; Big Nose
                </Text>

                
            </Flex>
        </Box>
    </div>
  )
}
