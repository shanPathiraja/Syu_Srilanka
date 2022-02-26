import React from 'react';
import {Box, Center, Spinner, Modal} from 'native-base';

export const LoadingSpinner = () => {
  return (
    <Modal isOpen>
      <Modal.Content w="75" h="75">
        <Center h="100%" w="100%">
          <Box>
            <Center>
              <Spinner size="lg" />
            </Center>
          </Box>
        </Center>
      </Modal.Content>
    </Modal>
  );
};
