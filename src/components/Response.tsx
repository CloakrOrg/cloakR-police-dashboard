'use client'

import { Box, Text, Badge } from '@chakra-ui/react';

export default function Response(props: any) {
  const { id, isVerified, isApproved } = props;

  return (
    <>
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" mb={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Text fontWeight="bold">id #{id}</Text>
            <Box>
                {isApproved ? 
                    <Badge colorScheme="green" ml={1}>Approved</Badge> : <Badge colorScheme="red" ml={1}>Rejected</Badge>
                }
                {isVerified ? 
                    <Badge colorScheme="green" ml={1}>Verfied</Badge> : <Badge colorScheme="yellow" ml={1}>Not Verfied</Badge>
                }
            </Box>
        </Box>
        <Text mb={2}>Title</Text>
        <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text mb={2}>Description</Text>
        <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam minima nesciunt saepe, harum enim labore, debitis facilis minus unde odit exercitationem quidem officia animi accusamus eveniet! Eaque, rem minus.</Text>
        </Box>
    </>
  );
};