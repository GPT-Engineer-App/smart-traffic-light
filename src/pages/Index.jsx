import React, { useState } from "react";
import { Box, Button, Container, Heading, Stack, Text, useColorModeValue, VStack, Image } from "@chakra-ui/react";
import { FaCar, FaTrafficLight } from "react-icons/fa";

const Index = () => {
  const [trafficLightStatus, setTrafficLightStatus] = useState("red");

  const handleTrafficLightChange = () => {
    switch (trafficLightStatus) {
      case "red":
        setTrafficLightStatus("green");
        break;
      case "green":
        setTrafficLightStatus("yellow");
        break;
      case "yellow":
        setTrafficLightStatus("red");
        break;
      default:
        setTrafficLightStatus("red");
    }
  };

  const trafficLightColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} as={Stack} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Traffic Light Management System
        </Heading>
        <Text as="p" fontSize="md" textAlign="center">
          This dashboard simulates a traffic light control system.
        </Text>

        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Traffic Light Control</Heading>
          <Text mt={4}>
            Current Status: <strong style={{ color: trafficLightStatus }}>{trafficLightStatus.toUpperCase()}</strong>
          </Text>
          <Button leftIcon={<FaTrafficLight />} colorScheme="blue" mt={3} onClick={handleTrafficLightChange}>
            Change Light
          </Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Traffic Detection</Heading>
          <Text mt={4}>
            <FaCar /> Currently detecting vehicles...
          </Text>
          <Image src="https://images.unsplash.com/photo-1649918028162-fb8f06240499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXN5JTIwdHJhZmZpY3xlbnwwfHx8fDE3MTM1NDI2NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Traffic Image" mt={4} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
