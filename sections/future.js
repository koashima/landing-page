import {
  Flex,
  // Button,
  Spacer,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Future() {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      backgroundImage={"url(/cover.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={useBreakpointValue({ base: "65%", md: "center" })}
      direction={"column"}
      justify={"center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 24 })}
      >
        <Image src={"/future.svg"} objectFit="cover" mt="64" />
      </VStack>
    </Flex>
  );
}
