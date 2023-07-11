import { Container, Text, useColorModeValue, fontSize} from "@chakra-ui/react";
import React from "react";

function Resume() {
  return (
    <Container
      color={useColorModeValue("gray.500", "gray.400")}
      fontSize={"1xl"}
      fontWeight={"300"}
    >
      <Text fontSize={"lg"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid
        amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam
        officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.
      </Text>
    </Container>
  );
}

export default Resume;
