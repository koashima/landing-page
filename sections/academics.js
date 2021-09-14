import {
  Stack,
  Flex,
  Text,
  VStack,
  // Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Academics() {
  return (
    <Flex w={"full"} h={"100vh"} direction="column" id={"academics"}>
      <Stack
        // maxW={"2xl"}

        spacing={6}
        backgroundImage={"url(/academics.png)"}
        backgroundSize={"cover"}
        backgroundPosition={"center "}
      >
        <Text
          paddingTop="200"
          color={"#551a29"}
          fontWeight={500}
          textAlign="center"
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          ACADEMIC CURRICULUM
        </Text>
      </Stack>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}></Stack>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"#551a29"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "l", md: "xl" })}
          >
            We believe in empowering students to understand that they can learn,
            even when it doesn’t come easy. Connecting students to discover
            their interests, passion, and talents, in a real-world context,
            develops the student holistically. Our Mandarin Immersion Program is
            offered to students in grades Kindergarten through Fifth Grade and
            complements our curriculum designed to stretch young minds. Faculty
            in the middle school help students hone their talents. Participating
            in a wide range of curricular and extracurricular activities, our
            students develop an increased sense of independence and personal
            responsibility and prepare for high school, college, and career. Our
            academic program at the high school prepares students to use their
            talents and abilities to make a positive impact in the world.
            Students thrive through project- based learning, senior capstone
            projects, and college prep classes in STEM, Medical Innovation,
            Business Diplomacy, and Creative Arts & Expression.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
