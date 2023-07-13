import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import React from "react";
import Atropos from "atropos/react";

export default function AboutMe() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <div id="app">
          <Atropos className="my-atropos">
            <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"></img>
          </Atropos>
        </div>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Cameron Oberlies
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Full Stack Web Developer
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"1xl"}
                fontWeight={"300"}
              >
                I am a full stack web developer with expertise in front-end and
                back-end technologies. With a strong eye for design and a
                problem -solving mindset, I enjoy creating seamless and engaging
                web experiences. From building intuitive user interfaces to
                designing robust server-side solutions, I am dedicated to
                delivering high-quality web applications that meet user needs
                and drive business success.
              </Text>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"1xl"}
                fontWeight={"300"}
              >
                On the front-end, I am proficient in HTML, CSS, and JavaScript,
                leveraging modern frameworks like React to build interactive
                user interfaces that are both intuitive and visually appealing.
                I have a keen eye for design and strive to create seamless user
                experiences that engage and delight.
              </Text>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"1xl"}
                fontWeight={"300"}
              >
                In the back-end realm, I am experienced in server-side
                programming languages such as Node.js, along with frameworks
                like Express. I am adept at designing and implementing RESTful
                APIs, working with databases, and ensuring the security and
                efficiency of server-side operations.
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              ></Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Text here</ListItem>
                  <ListItem>Text here</ListItem> <ListItem>Text here</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Text here</ListItem>
                  <ListItem>Text here</ListItem>
                  <ListItem>Text here</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              ></Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text>{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
