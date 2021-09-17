import {
  Stack,
  Flex,
  Button,
  Image,
  Heading,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Community() {
  return (
    <Flex id="community" w={"100%"} h={"100%"}>
      <VStack
        w={"100%"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        justify={"center"}
        align="flex-end"
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={{ base: "flex-end" }} spacing={6}>
          <Image src={"/okinagaboys.png"} objectFit="cover" minHeight={500} />
        </Stack>
        <Spacer />

        <Stack
          maxW={"2xl"}
          align={{ base: "center", sm: "flex-end" }}
          spacing={6}
        >
          <Heading
            my={50}
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" })}
          >
            COMMUNITY/STUDENT BODY
          </Heading>
          <Spacer />
          <Text
            color={"#551a29"}
            fontWeight={500}
            align="right"
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
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
          <Spacer minHeight="50px" />
        </Stack>
      </VStack>
    </Flex>
  );
}
