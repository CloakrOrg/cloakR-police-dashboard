'use client'

import { useState } from 'react';
import { Box, Text, Button, Badge } from '@chakra-ui/react';

export default function Request(props: any) {
  const { id, verified } = props;

  const [approvalStatus, setApprovalStatus] = useState<string | null>(null);

  const handleApprove = () => {
    setApprovalStatus('approved');
  };

  const handleDisapprove = () => {
    setApprovalStatus('disapproved');
  };

  return (
    <>
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" mb={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Text fontWeight="bold">id #{id}</Text>
            {verified ? 
                <Badge colorScheme="green" ml={1}>Verfied</Badge> : <Badge colorScheme="yellow" ml={1}>Not Verfied</Badge>
            }
        </Box>
        <Text mb={2}>Title</Text>
        <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text mb={2}>Description</Text>
        <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam minima nesciunt saepe, harum enim labore, debitis facilis minus unde odit exercitationem quidem officia animi accusamus eveniet! Eaque, rem minus.</Text>
        <Button
            size="sm"
            onClick={handleApprove}
            colorScheme="green"
            mr={2}
        >
            Approve
        </Button>
        <Button
            size="sm"
            onClick={handleDisapprove}
            colorScheme="red"
        >
            Disapprove
        </Button>
        {approvalStatus === 'approved' && (
            <Text mt={3} color="green.500">
            Post Approved!
            </Text>
        )}
        {approvalStatus === 'disapproved' && (
            <Text mt={3} color="red.500">
            Post Disapproved!
            </Text>
        )}
        </Box>
    </>
  );
};