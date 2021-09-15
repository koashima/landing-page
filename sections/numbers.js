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
        wrap={{base: "wrap"}}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Image
          src={"/catholic.svg"}
          // objectFit="cover"
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/language.svg"}
          // objectFit="cover"
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/million.svg"}
          // objectFit="cover"
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/champions.svg"}
          // objectFit="cover"
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/athlete.svg"}
          // objectFit="cover"
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
        <Image
          src={"/graduates.svg"}
          // objectFit="cover"
          width={useBreakpointValue({ base: "171px", md: "342px" })}
          height={useBreakpointValue({ base: "124px", md: "248px" })}
        />
      </HStack>
      <Spacer minHeight="50px"/>

    </Flex>
  );
}

// align-items: center;
// flex-direction: column;
// width: 100vh;
// flex-wrap: wrap;
// align-content: center;
// justify-content: space-evenly
