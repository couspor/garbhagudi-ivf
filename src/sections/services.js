import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: "We have one of the highest success rates in the industry, over 66 %.",
    heading: "High Success Rates",
    path: "#",
  },
  {
    image: serviceImage2,
    text: "Equipped to handle the most challenging cases with state of the art technology at disposal.",
    heading: "Best in-class Facilities",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "GarbhaGudi is proud to have played a role in bringing more than 6,000 babies into the world.",
    heading: "Worldclass Fertility Care",
    path: "#",
  },
  {
    image: serviceImage4,
    text: "Infertility specialists like Gynecologists, Embryologists, Technicians and staff.",
    heading: "Top Fertility Specialists",
    path: "#",
  },
  {
    image: serviceImage5,
    text: "We offer affordable treatments without any compromise on service, medicines or media.",
    heading: "Affordable Care",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "Patients can meet our doctors online to have a safe consultation during the pandemic.",
    heading: "Online support",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle title="Why Choose GarbhaGudi?" text="Dedicated Services" />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
