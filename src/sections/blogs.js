import React from "react";
import { Container, Box, Grid } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import BlogCard from "components/cards/blog-card";

import blogImage1 from "assets/blog-1-1.jpg";
import blogImage2 from "assets/blog-1-2.png";
import blogImage3 from "assets/blog-1-3.png";
import blogImage4 from "assets/blog-1-4.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "GarbhaGudi Recognised as Best IVF & Fertility Hospital in India",
    description:
      "Being conferred with the most prestigious award as being one of the Best IVF & Fertility Hospital in India in the whole nation tells that we have been successful in what we dreamt.",
    path: "https://garbhagudi.com/best-ivf-fertility-hospital-in-india/",
    linkLabel: "Learn More",
  },
  {
    image: null,
    title:
      "“WOMEN ENTREPRENEUR OF THE YEAR” by Indian women’s achievers awards(IWAA) 2021",
    description: null,
    path: "/",
    linkLabel: null,
  },
  {
    image: blogImage3,
    title: "Suffering from Infertility? Pelvic Adhesions could be the Culprit",
    description: null,
    path: "/",
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: "Hyperprolactinemia",
    description:
      "A condition in which a person has higher-than-normal levels of hormone prolactin in blood.",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: blogImage4,
    title: "Sperm Bank and Legal Aspects: All you need to know",
    description: null,
    path: "/",
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular Blog Post"
          text="Latest in the field of Intertility"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "140px", null, "100px"],
  },
  blogWrapper: {
    mx: "-15px",
  },
};
