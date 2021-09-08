import {
  Stack,
  Flex,
  Text,
  Image,
  Spacer,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";


export default function Faith() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/faith.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={{ base: "flex-start", md: "space-around" }}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"gold"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            OUR MISSION & PHILOSOPHY
          </Text>
        </Stack>
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl" })}
            align={"center"}
            // paddingBottom={10}
          >
            Rooted in the Catholic faith, Maryknoll School is a nurturing and
            welcoming community that values academic excellence, lifelong
            learning, service to others, and the courage to imitate Jesus by
            word and example.
          </Text>
          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl" })}
            align={"center"}
            // paddingBottom={10}
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
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl" })}
            align={"center"}
            // paddingBottom={10}
          >
            “Serving Hawaii’s Keiki since 1927”
          </Text>
        </Stack>
        <Spacer />
        <Image
          src={"/cross.png"}
          layout={`fixed`}
          quality={"100"}
          width={342}
          height={"248px"}
        />
      </VStack>
    </Flex>
  );
}
