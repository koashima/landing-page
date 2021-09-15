import {
  Stack,
  Flex,
  Text,
  Image,
  Spacer,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Athlectics() {
  return (
    <Flex
      id={"athletics"}
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/athletics.jpg)"}
      backgroundPosition={useBreakpointValue({
        base: "35%",
        md: "center top",
        lg: "80% 25%",
      })}
      backgroundSize={"cover"}
    >
      <VStack
        w={"full"}
        justify={{ base: "flex-start" }}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack align={"center"} spacing={6}>
          <Heading
            my={50}
            color={"#FFC726"}
            fontWeight={500}
            textAlign="center"
            fontSize={useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" })}
          >
            ATHLETICS & EXTRACURRICULAR ACTIVITIES
          </Heading>
        </Stack>
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            mt={{ base: 36, sm: 36 }}
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
            align={"center"}
          >
            At Maryknoll we want our scholar-athletes to demonstrate a
            willingness to accept responsibility for their actions, measure
            themselves against standards of quality, express ideas and solutions
            to problems, and value fair play, honesty, humility, and teamwork.
          </Text>

          <Text
            // my={25}
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
            align={"center"}
          >
            Maryknoll’s wide array of student clubs and organizations give
            students a world of possibilities to discover and excel in their
            special interests. Families are invited to have their children
            participate in programs year-round, including after school care,
            enrichment activities, and summer programs that complement
            Maryknoll’s curriculum.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
