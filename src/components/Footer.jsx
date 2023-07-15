import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
//import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
//import { FiTwitter } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
     
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{ color: "#F9FAFB" }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Button
            as={RouterLink}
            to="https://stackoverflow.com/users/22200906/cameron-oberlies"
            target="_blank"
          >
            <Icon
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaStackOverflow}
            />
          </Button>
          <Button
            as={RouterLink}
            to="https://www.linkedin.com/in/cameron-oberlies-415375278/?trk=public-profile-join-page"
            target="_blank"

          >
            <Icon
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Button>
        
          <Button as={RouterLink} to="https://github.com/cameronoberlies" target="_blank">
            <Icon _dark={{ color: "white" }} h="20px" w="20px" as={FaGithub} />
          </Button>
        </HStack>

        <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
          &copy;Copyright. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
