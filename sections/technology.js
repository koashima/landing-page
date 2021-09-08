import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Technology() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/facilities.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"#551a29"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            FACILITIES & TECHNOLOGY
          </Text>
          <Text
            color={"#551a29"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
          >
            Rooted in the Catholic faith, Maryknoll School is a nurturing and
            welcoming community that values academic excellence, lifelong
            learning, service to others, and the courage to imitate Jesus by
            word and example.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
