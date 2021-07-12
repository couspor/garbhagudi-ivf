import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "What is Infertility?",
    contents: (
      <div>
        Infertility is defined as the inability of a couple to conceive even
        after one year of unprotected, well-timed intercourse and the woman is
        under 35 years of age. If the woman is over 35 years old, it is
        diagnosed after 6 months of unprotected, well-timed intercourse. This is
        not just a one sided problem. Approximately, 30% of infertility is due
        to a female factor and 30% is due to a male factor. In the balance of
        the cases, infertility also can result from problems in both partners
        and often the outlying cause of the infertility cannot be explained. In
        this case it is known as an “unexplained infertility” diagnosis. All of
        which, equally frustrating. According to latest data, about 17% to 20%
        of couples are facing this problem and the levels of infertility is
        increasing.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "How does age affect a woman's ability to have children?",
    contents: (
      <div>
        There are many options for treating infertility, however deciding on
        which one is best for you and your partner can feel a bit overwhelming
        at first. Start with learning about all of the options that are
        available to you. With advancing medical technology there are more
        choices for both men and women trying to conceive. It can be a broad
        spectrum of hormonal treatments, ovulation induction and Intrauterine
        insemination to more advanced technologies like IVF or In-vitro
        fertilization, ICSI to surrogacy, egg/sperm donation and even embryo
        donation.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What causes infertility in women?",
    contents: (
      <div>
        Problems with ovulation account for most cases of infertility in women.
        Without ovulation or with improper ovulation, there are no eggs to be
        fertilized or the eggs are not fertilize-able. Some signs that a woman
        is not ovulating normally include irregular or absent menstrual periods.
        Less common causes of fertility problems in women include:
        <ul>
          <li>
            Fallopian tubes due to pelvic inflammatory disease, endometriosis,
            or surgery for an ectopic pregnancy
          </li>
          <li> Physical problems with the uterus</li>
          <li> Uterine fibroids </li> <li> Endometriosis </li>
          <li> PCOD/PCOS </li>
          <li>
            Unexplained reasons: An unexplained infertility is when the causes
            are not clearly defined or identifiable and it happens in 20% of the
            infertility cases.
          </li>
          <li>Pelvic inflammatory disease More than one miscarriage</li>
        </ul>
        No matter how old you are, it’s always a good idea to talk to a doctor
        before you start trying to get pregnant. Doctors can help you prepare
        your body for a healthy baby. They can also answer questions on
        fertility and give tips on conceiving.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What are some ways to treat infertility?",
    contents: (
      <div>
        There are many options for treating infertility, however deciding on
        which one is best for you and your partner can feel a bit overwhelming
        at first. Start with learning about all of the options that are
        available to you. With advancing medical technology there are more
        choices for both men and women trying to conceive. It can be a broad
        spectrum of hormonal treatments, ovulation induction and Intrauterine
        insemination to more advanced technologies like IVF or In-vitro
        fertilization, ICSI to surrogacy, egg/sperm donation and even embryo
        donation.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "How long should women try to get pregnant before calling their doctors?",
    contents: (
      <div>
        Most healthy women under the age of 30 shouldn’t worry about infertility
        unless they’ve been trying to get pregnant for at least a year. At this
        point, women should talk to their doctors about a fertility evaluation.
        Men should also talk to their doctors if this much time has passed.
        <br /> In some cases, women should talk to their doctors sooner. Women
        in their 30s who’ve been trying to get pregnant for six months should
        speak to their doctors as soon as possible. A woman’s chances of having
        a baby decreases rapidly every year after the age of 30. So getting a
        complete and timely fertility evaluation is very important.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Asked Question"
          text="Answers to the most commonly asked questions  regarding Infertility"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please use the link below to raise a request.
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free contact us with your query
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
