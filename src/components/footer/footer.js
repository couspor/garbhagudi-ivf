/** @jsx jsx */
import React from "react";
import { jsx, Box, Text, Container } from "theme-ui";
import { SocialIcon } from "react-social-icons";
import Logo from "components/logo";
import logodark from "assets/logo-dark.svg";
export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: ["column", null, null, null, null, "row"],
          }}
        >
          <div sx={styles.logo}>
            <Logo image={logodark} />
          </div>

          <Text
            as="p"
            sx={{
              color: "#000000",
              opacity: "0.8",
              fontSize: "16px",
              mt: ["5px", null, null, null, null, "0"],
              ml: ["15px"]
            }}
          >
            &copy; GarbhaGudi IVF Center Pvt Ltd. {new Date().getFullYear()}
          </Text>
        </Box>
        <Box sx={styles.linksWrap}>
          <SocialIcon
            url="https://www.facebook.com/garbhagudiIVF/"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/garbhagudiivfcentre/?hl=en"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCc4bsnOwkcW0la01qMEtjDg"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/company/garbhagudi/"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/GarbhaGudiIVF"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:dreams@garbhagudi.com"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://api.whatsapp.com/send?phone=919148499992"
            style={{ height: 35, width: 35 }}
          />
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ["20px", null, null, null, null, "30px", "10px"],
    backgroundColor: "#ffffff",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ffffff",
      opacity: "0.05",
    },
  },
  logo: {
    width: "350px",
    height: "75px",
    mr: "25px",
  },
  container: {
    display: "flex",
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: ["center", null, null, null, null, "space-between"],
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
  },
  linksWrap: {
    mt: ["15px", null, null, null, null, "0"],
    display: "flex",
    flexWrap: "wrap",
    a: {
      fontSize: ["14px", null, null, null, "16px"],
      color: "#ffffff",
      transition: "all 500ms ease",
      "&:hover": { opacity: 0.7 },
    },
    "a+a": { ml: ["15px", null, null, null, "20px"] },
  },
};
