import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-scroll";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Image from "next/image";
import Logo from "/public/logo.png";

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box sx={styles.sticky}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        {/* <Flex
          justify={{ base: "center" }}
          display={{ base: "none", md: "block" }}
        >
          <Image src={Logo} width={93.75} height={116.875} />
        </Flex> */}
        <Flex display={{ base: "block", md: "none" }}>
          <Button
            fontFamily={"heading"}
            color={"#BF1F4A"}
            _hover={{
              color: "#FFC726",
            }}
            bg={"white"}
            aria-label="Apply Now"
            onClick={() =>
              window.open(
                "https://www.maryknollschool.org/admission/apply-now",
                "_blank"
              )
            }
          >
            APPLY NOW
          </Button>
        </Flex>
        <Spacer display={{ base: "none", md: "flex" }} />
        <Flex
          display={{ base: "none", md: "flex" }}
          direction={"column"}
          justify={"center"}
          // ml={10}
        >
          <DesktopNav />
        </Flex>
        <Flex
          justify={{ base: "center" }}
          display={{ base: "none", md: "block" }}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"xl"}
            fontWeight={500}
            p={2}
            fontFamily={"heading"}
            color={"white"}
            bg={"#BF1F4A"}
            aria-label="Apply Now"
            _hover={{
              color: "#FFC726",
            }}
            onClick={() =>
              window.open(
                "https://www.maryknollschool.org/admission/apply-now",
                "_blank"
              )
            }
          >
            APPLY NOW
          </Button>
        </Flex>
        <Spacer display={{ base: "none", md: "flex" }} />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} sx={styles.navLinks}>
          <Link to={navItem.path} offset={-130} smooth={true} duration={1000}>
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("rgba(255, 255, 255, 0.9)")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ path, label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack sx={styles.navLinks} spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={path}
        smooth={true}
        duration={1000}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600}>{label}</Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MISSION",
    path: "mission",
  },
  {
    label: "ACADEMICS",
    path: "academics",
  },
  {
    label: "COMMUNITY",
    path: "community",
  },
  {
    label: "NUMBERS",
    path: "numbers",
  },
  {
    label: "ATHLETICS",
    path: "athletics",
  },
  {
    label: "TECHNOLOGY",
    path: "technology",
  },
];

const styles = {
  sticky: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
  },
  navLinks: {
    p: 2,
    fontFamily: "heading",
    fontSize: "xl",
    fontWeight: 500,
    color: "#BF1F4A",
    "&:hover": {
      textDecoration: "none",
      color: "#FFC726",
      cursor: "pointer",
    },
  },
};

{
  /* <Flex display={{ base: "block", md: "none" }}>
<Button
  fontFamily={"heading"}
  color={"#BF1F4A"}
  _hover={{
    color: "#FFC726",
  }}
  bg={"white"}
  aria-label="Apply Now"
  onClick={() =>
    window.open(
      "https://www.maryknollschool.org/admission/apply-now",
      "_blank"
    )
  }
>
  APPLY NOW
</Button>
</Flex> */
}

{
  /* <Stack
flex={{ base: 1, md: 0 }}
justify={"flex-end"}
direction={"row"}
spacing={6}
>

</Stack> */
}

// <Stack
// flex={{ base: 1, md: 0 }}
// justify={"flex-end"}
// direction={"row"}
// spacing={6}
// >

// </Stack>
