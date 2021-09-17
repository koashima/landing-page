import {
  Stack,
  Flex,
  Text,
  Heading,
  VStack,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";

export default function Academics() {
  return (
    <Flex w={"100%"} h={"100%"} direction="column">
      <Stack
        // maxW={"2xl"}
        zIndex={-1}
        minHeight={"100vh"}
        justifyContent="center"
        alignItems="flex-start"
        spacing={6}
        backgroundImage={"url(/academics.png)"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Spacer />
        <Heading
          id={"academics"}
          position="absolute"
          paddingTop="400"
          color={"#551a29"}
          fontWeight={500}
          textAlign="center"
          fontSize={useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" })}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          ACADEMIC CURRICULUM
        </Heading>
        <Stack
          maxW={"2xl"}
          align={"flex-start"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          spacing={6}
          position="absolute"
          pt={1500}
          pb={200}
        >
          <Text
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
          >
            We believe in empowering students to understand that they can learn,
            even when it doesn’t come easy. Connecting students to discover
            their interests, passion, and talents, in a real-world context,
            develops the student holistically.
          </Text>
          <Text
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
          >
            Our Mandarin Immersion Program is offered to students in grades
            Kindergarten through Fifth Grade and complements our curriculum
            designed to stretch young minds.
          </Text>
          <Text
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
          >
            Faculty in the middle school help students hone their talents.
            Participating in a wide range of curricular and extracurricular
            activities, our students develop an increased sense of independence
            and personal responsibility and prepare for high school, college,
            and career.
          </Text>
          <Text
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
          >
            Our academic program at the high school prepares students to use
            their talents and abilities to make a positive impact in the world.
            Students thrive through project- based learning, senior capstone
            projects, and college prep classes in STEM, Medical Innovation,
            Business Diplomacy, and Creative Arts & Expression.
          </Text>
          <Spacer />
        </Stack>
        <Spacer minHeight="1200px" />
      </Stack>
      <VStack
        w={"full"}
        h={400}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      ></VStack>
    </Flex>
  );
}
