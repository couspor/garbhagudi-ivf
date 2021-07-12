import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Usps from "sections/Usps";
import CallToAction from "sections/call-to-action";
import Testimonials from "sections/testimonials";
import Blogs from "sections/blogs";
import FAQ from "sections/faq";
import SalesIQ from "./../components/SalesIQ";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="GarbhaGudi IVF Center " />
          <Banner />
          <Services />
          <Usps />
          <CallToAction />
          <Testimonials />
          <Blogs />
          <FAQ />
          <SalesIQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
