import {
  Stack,
  Flex,
  Button,
  Text,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Future() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/cover.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={useBreakpointValue({ base: "65%", md: "center" })}
      direction={"column"}
      justify={"flex-end"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 48 })}
      >
        <Image src={"/future1.svg"} objectFit="cover" />

        {/* <Stack maxW={"2xl"} align={"flex-end"} spacing={6}>
          <Stack direction={"row"}>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              APPLY NOW
            </Button>
          </Stack>
        </Stack> */}
      </VStack>
    </Flex>
  );
}
