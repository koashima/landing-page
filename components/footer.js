import { Flex, Button, Spacer } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex sx={{ bg: "white" }}>
      <Spacer />
      <Button
        fontFamily={"heading"}
        fontWeight={500}
        color={"#BF1F4A"}
        fontSize="xl"
        _hover={{
          color: "#FFC726",
        }}
        bg={"white"}
        aria-label="Apply Now"
        onClick={() =>
          window.open(
            "https://www.maryknollschool.org/admission/virtual-tour",
            "_blank"
          )
        }
      >
        VIRTUAL TOUR
      </Button>
      <Spacer />
      <Button
        fontFamily={"heading"}
        fontWeight={500}
        color={"#BF1F4A"}
        fontSize="xl"
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
        APPLY
      </Button>
      <Spacer />
    </Flex>
  );
}

// const styles = {
//   stick: {
//     zIndex: 999,
//     width: "100%",
//     position: "fixed !important",
//     bottom: 0,
//     left: 0,
//     padding: "16px 0px 16px",
//     position: "relative",
//     marginTop: "-1px",
//   },
// };

// sticky: {
//     position: "-webkit-sticky",
//     position: "sticky",
//     top: "0",
//   },
//   navLinks: {
//     p: 2,
//     fontFamily: "heading",
//     fontSize: "xl",
//     fontWeight: 500,
//     color: "#BF1F4A",
//     "&:hover": {
//       textDecoration: "none",
//       color: "#FFC726",
//       cursor: "pointer",
//     },
//   },
