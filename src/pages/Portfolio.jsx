import React, { useState } from "react";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";




const Portfolio = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      img: "https://github.com/cameronoberlies/Paws-Claws-and-Tails/blob/main/screenshots/screenshot_login.png?raw=true",
      label: <a href="https://github.com/cameronoberlies/Paws-Claws-and-Tails/blob/main/screenshots/screenshot_login.png?raw=true" target="_blank" rel="noopener noreferrer">Paws, Claws, and Tails</a>,
      description: < a href="https://github.com/cameronoberlies/Paws-Claws-and-Tails" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      
    },
    {
      img: "https://github.com/cameronoberlies/Paws-Claws-and-Tails/raw/main/screenshots/screenshot_gallery.png",
      label: <a href="https://github.com/cameronoberlies/Paws-Claws-and-Tails/blob/main/screenshots/screenshot_gallery.png?raw=true" target="_blank" rel="noopener noreferrer">Paws, Claws, and Tails</a>,

      description: < a href="https://github.com/cameronoberlies/Paws-Claws-and-Tails" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    },
    {
      img: "https://github.com/cameronoberlies/PetGPT/blob/main/client/screenshots/243EBDA7-C6B9-4301-88D2-FA7770F0B626_1_105_c.jpeg?raw=true",
      label: <a href="https://github.com/cameronoberlies/PetGPT/blob/main/client/screenshots/243EBDA7-C6B9-4301-88D2-FA7770F0B626_1_105_c.jpeg?raw=true" target="_blank" rel="noopener noreferrer">PetGPT</a>,
      description: <a href="https://github.com/cameronoberlies/PetGPT" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
       
    },
    {
      img: "https://github.com/cameronoberlies/PetGPT/blob/main/client/screenshots/4AD6CD31-2DC6-4EC4-9190-47E0C2639E64_1_105_c.jpeg?raw=true",
      label: <a href="https://github.com/cameronoberlies/PetGPT/blob/main/client/screenshots/4AD6CD31-2DC6-4EC4-9190-47E0C2639E64_1_105_c.jpeg?raw=true" target="_blank" rel="noopener noreferrer">PetGPT</a>,
      description: <a href="https://github.com/cameronoberlies/PetGPT" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    },
    {
      img: "https://github.com/cameronoberlies/PetGPT/blob/main/client/screenshots/D7A5FFD8-B8BF-4D88-B34B-65CD03FFBB22_1_105_c.jpeg?raw=true",
      label: <a href="https://github.com/cameronoberlies/PetGPT/blob/main/client/screenshots/D7A5FFD8-B8BF-4D88-B34B-65CD03FFBB22_1_105_c.jpeg?raw=true" target ="_blank" rel="noopener noreferrer">PetGPT</a>,
      description: <a href="https://github.com/cameronoberlies/PetGPT" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    },
  ];

  

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
    w="full"
    bg="#edf3f8"
    _dark={{ bg: "#3e3e3e" }}
    p={10}
    alignItems="center"
    justifyContent="center"
  >
    <Flex w="full" pos="relative" overflow="hidden">
      <Flex h="400px" w="full" {...carouselStyle}>
        {slides.map((slide, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
            <Box pos="relative" h="400px" w="full">
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
            >
              {sid + 1} / {slidesCount}
            </Text>
           
           <a href={slide.description} target="_blank" rel="noopener noreferrer">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                display="block"
                WebkitUserSelect="none"
                margin="auto"
                cursor="zoom-in"
                backgroundColor="hsl(0, 0%, 90%)"
                transition="background-color 300ms"
                w="900px" 
                h="590px"
              />
            </a>
           </Box>
            <Stack
              p="8px 12px"
               pos="absolute"
              bottom="24px"
              textAlign="center"
              mt="10"
              w="full"
              mb="8"
              color="white"
              bg="rgba(0, 0, 0, 0.6)" // Add semi-transparent background to the text elements
              borderRadius="md" // Optional: add rounded corners to the background
            >
              <a href={slide.description} target="_blank" rel="noopener noreferrer">
                <Text fontSize="2xl" color="white"> {slide.label}</Text>
                <Text fontSize="lg" color="white" mt="2"> {slide.description}</Text>
              </a>
            </Stack>
          </Box>
        ))}
      </Flex>
      <Text {...arrowStyles} left="0" onClick={prevSlide}>
        &#10094;
      </Text>
      <Text {...arrowStyles} right="0" onClick={nextSlide}>
        &#10095;
      </Text>
      <HStack justify="center" pos="absolute" bottom="8px" w="full">
        {Array.from({ length: slidesCount }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["7px", null, "15px"]}
            m="0 2px"
            bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{ bg: "blackAlpha.800" }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    </Flex>
  </Flex>
  );
};
export default Portfolio;


