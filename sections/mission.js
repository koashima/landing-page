import {
  Stack,
  Flex,
  Text,
  Heading,
  Image,
  Spacer,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Faith() {
  return (
    <Flex
      id={"mission"}
      w={"full"}
      h={"100%"}
      backgroundImage={"url(/faith.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={{ base: "space-around", md: "space-around" }}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"center"}>
          <Heading
            m={50}
            color={"#FFC726"}
            fontWeight={500}
            fontSize={useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" })}
          >
            OUR MISSION & PHILOSOPHY
          </Heading>
        </Stack>
        <Spacer />
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
            align={"center"}
          >
            Rooted in the Catholic faith, Maryknoll School is a nurturing and
            welcoming community that values academic excellence, lifelong
            learning, service to others, and the courage to imitate Jesus by
            word and example.
          </Text>
          <Text
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
            align={"center"}
          >
            Hawaii’s largest coed K-12 Catholic school, Maryknoll School has
            thrived because it has grown and innovated while staying true to our
            founding values and traditions. Our philosophy of education
            cultivates self-discipline, creativity, and spiritual and physical
            growth. We serve to go beyond academics by developing individuals of
            moral integrity and personal responsibility.
          </Text>
          <Text
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({
              base: "l",
              md: "xl",
            })}
            align={"center"}
          >
            “Serving Hawaii’s Keiki since 1927”
          </Text>
        </Stack>
        <Spacer />
        <Image
          src={"/catholic.svg"}
          layout={`fixed`}
          quality={"100"}
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Spacer minHeight="50px" />
      </VStack>
    </Flex>
  );
}
