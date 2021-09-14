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
        justify={{ base: "space-evenly", md: "space-evenly" }}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack align={"center"} spacing={6}>
          <Heading
            color={"#FFC726"}
            fontWeight={500}
            lineHeight={1.2}
            textAlign="center"
            fontSize={useBreakpointValue({ base: "xl", sm: "2xl", md: "4xl" })}
          >
            ATHLETICS & EXTRACURRICULAR ACTIVITIES
          </Heading>
        </Stack>
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "l",
              sm: "xl",
            })}
            align={"center"}
          >
            At Maryknoll we want our scholar-athletes to demonstrate a
            willingness to accept responsibility for their actions, measure
            themselves against standards of quality, express ideas and solutions
            to problems, and value fair play, honesty, humility, and teamwork.
          </Text>

          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "l",
              sm: "xl",
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
