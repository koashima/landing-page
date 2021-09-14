import {
  Stack,
  Flex,
  Button,
  Image,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Community() {
  return (
    <Flex
      id="community"
      w={"full"}
      h={"100%"}

    >
      <VStack
        w={"full"}
        justify={"center"}
        // px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Image src={"/okinagaboys.png"} objectFit="cover" />
        </Stack>
      </VStack>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            color={"#551a29"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            COMMUNITY/STUDENT BODY
          </Heading>
          <Text
            color={"#551a29"}
            fontWeight={500}
            // lineHeight={1.2}
            align="right"
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
          >
            We serve to go beyond academics by developing individuals of moral
            integrity and personal responsibility. Our faculty provide genuine
            care and support, for both students and their parents, and serve as
            the foundation of our community. Faculty, staff, and administrators
            play many roles – teacher, advisor, mentor, coach – helping students
            discover their potential in the classroom, in the arts, in student
            activities, on the athletics fields and in developing personal
            connections and friendships that will last a lifetime. Our graduates
            enter the world with a sense of purpose that ensures no matter how
            life changes, they are equipped with the skills to navigate and
            contribute to society.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
