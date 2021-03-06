import {
  Stack,
  Flex,
  Text,
  Heading,
  Image,
  HStack,
  Spacer,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Faith() {
  return (
    <Flex
      id={"numbers"}
      mh={"100vh"}
      w={"100%"}
      direction="column"
      align="center"
      justify="center"
      backgroundImage={"url(/numbers.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack maxW={"2xl"} align={"center"}>
        <Heading
          color={"white"}
          fontWeight={500}
          m={50}
          fontSize={useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" })}
        >
          BY THE NUMBERS
        </Heading>
      </VStack>
      <HStack
        w={"100%"}
        direction="column"
        justify="center"
        align="stretch"
        wrap={{ base: "wrap" }}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Image
          src={"/cross.svg"}
          py={useBreakpointValue({ base: 2, md: 2 })}
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
          <Image
            src={"/million.svg"}
            py={useBreakpointValue({ base: 2, md: 2 })}
            width={useBreakpointValue({ base: "171px", md: "342px" })}
            height={useBreakpointValue({ base: "124px", md: "248px" })}
          />
        <Image
          src={"/language.svg"}
          py={useBreakpointValue({ base: 2, md: 2 })}
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
      </HStack>

      <HStack
        w={"100%"}
        direction="column"
        justify="center"
        align="stretch"
        wrap={{ base: "wrap" }}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Image
          src={"/champions.svg"}
          py={useBreakpointValue({ base: 2, md: 2 })}
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/athlete.svg"}
          py={useBreakpointValue({ base: 2, md: 2 })}
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/graduation.svg"}
          py={useBreakpointValue({ base: 2, md: 2 })}
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
      </HStack>
      <Spacer minHeight="50px" />
    </Flex>
  );
}