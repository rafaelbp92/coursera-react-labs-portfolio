import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <VStack  align='stretch' bg='white' borderRadius='lg' p="10px">
    <Image src={imageSrc} alt={title} fallbackSrc='https://via.placeholder.com/100'/>
    <Heading as='h4' size='md' color='black'>{title}</Heading>
    <Text color='grey'>{description}</Text>
    <HStack>
      <Text color='black'>See more</Text>
      <FontAwesomeIcon icon={faArrowRight} color='black'/>
    </HStack>
  </VStack>;
};

export default Card;
