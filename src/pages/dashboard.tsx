'use client'

import React, { useState } from 'react';
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Request from '@/components/Request';
import Response from '@/components/Response';

export default function Dashboard() {
  const numberOfRequests = 5;
  const startingId = 1000;

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Navbar />
      <Flex height="100vh" p={3}>
        <Box p="10" width="100%">
          <Tabs isFitted size='lg' variant="enclosed">
            <TabList>
              <Tab fontSize={'2xl'} onClick={() => setCurrentTab(0)}>Request</Tab>
              <Tab fontSize={'2xl'} onClick={() => setCurrentTab(1)}>AI Generated</Tab>
              <Tab fontSize={'2xl'} onClick={() => setCurrentTab(2)}>Response</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {Array.from({ length: numberOfRequests }).map((_, index) => (
                  <Request key={startingId + index} id={String(startingId + index)} isVerified={true} />
                ))}
              </TabPanel>
              <TabPanel>
                {Array.from({ length: numberOfRequests }).map((_, index) => (
                  <Request key={startingId + index} id={String(startingId + index)} isVerified={true} />
                ))}
              </TabPanel>
              <TabPanel>
                {Array.from({ length: numberOfRequests }).map((_, index) => (
                  <Response key={startingId + index} id={String(startingId + index)} isVerified={false} isApproved={false}/>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};