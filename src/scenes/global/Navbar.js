import React from 'react';
import { Box, Flex, IconButton, Input, useTheme, useColorMode } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaUser, FaLightbulb } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navbar() {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const primaryColor = colorMode === 'dark' ? theme.colors.primary[800] : theme.colors.primary[100];
  const iconColor = colorMode === 'dark' ? theme.colors.grey[100] : theme.colors.grey[900];
  const modeIcon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />;

  return (
    <Box p={4} bg={primaryColor} borderRadius='md'>
      <Flex justify='space-between' align='center'>
        {/* Search bar section */}
        <Flex align='center' backgroundColor={primaryColor} borderRadius='md'>
          <Input
            ml={2}
            flex={1}
            placeholder='Search...'
            variant="filled"
            _placeholder={{ color: theme.colors.grey[400] }}
            bg={iconColor}
          />
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            colorScheme="teal"
            // ml={2}
          />
        </Flex>
        
        {/* Actions section */}
        <Flex align='center' ml={4}>
          <IconButton
            aria-label="Toggle Color Mode"
            icon={modeIcon}
            onClick={toggleColorMode}
            colorScheme="teal"
            ml={2}
          />
          <IconButton
            aria-label="Face Icon"
            icon={<FaUser />}
            colorScheme="teal"
            ml={2}
            color={iconColor}
          />
          <IconButton
            aria-label="Lightbulb Icon"
            icon={<FaLightbulb />}
            colorScheme="teal"
            ml={2}
            color={iconColor}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
