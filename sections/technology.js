import {
  Stack,
  Flex,
  Spacer,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Technology() {
  return (
    <Flex
      id="technology"
      w={"100%"}
      h={"100vh"}
      backgroundImage={"url(/facilities.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"flex-start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            mt={12}
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" })}
          >
            FACILITIES & TECHNOLOGY
          </Heading>
          <Text
            color={"#551a29"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "xs",
              sm: "l",
              md: "xl",
            })}
          >
            Maryknoll’s campuses include custom-designed 21st-century classrooms
            with technology and furniture that fosters student collaboration.
            From laptops to iPads, flight simulators to 3-D printers,
            instructional space, and meeting spaces are all purposefully built
            and renovated attentive to the needs of teaching and learning. The
            Maryknoll Community Center which houses the Clarence T.C. Ching
            Gymnasium serves the entire community well in the multitude of
            year-round events it hosts. From athletic games to school masses and
            assemblies, it is truly a hub of exciting activity.
          </Text>
        </Stack>{" "}
        <Spacer minHeight="50px" />
      </VStack>
    </Flex>
  );
}
