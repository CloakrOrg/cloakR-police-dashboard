'use client';

import React from 'react';
import { Box, FormControl, FormLabel, Button, Icon, Center } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useDropzone } from 'react-dropzone';
import { MdCloudUpload } from 'react-icons/md';

function MyDropzone(props: { onFileChange: (file: File) => void }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    onDrop: (acceptedFiles: File[]) => {
      props.onFileChange(acceptedFiles[0]);
    },
  });

  return (
    <Box {...getRootProps()} style={{ marginBottom: '16px' }}>
      <input {...getInputProps()} />
      <Button
        colorScheme="teal"
        size="lg"
        fontWeight="bold"
        leftIcon={<Icon as={MdCloudUpload} boxSize={6} />}
      >
        Upload File
      </Button>
    </Box>
  );
}

export default function Upload() {
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission here
    console.log(values, 'vaal');
    setSubmitting(false);
  };

  return (
    <Center p={4} mt={10}>
      <Formik initialValues={{ name: '', file: null }} onSubmit={handleSubmit}>
        {({ isSubmitting, setFieldValue }: any) => (
          <Form>
            <FormControl>
              <FormLabel>Upload CSV File</FormLabel>
              <MyDropzone onFileChange={(file: File) => setFieldValue('file', file)} />
            </FormControl>
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Center>
  );
};
