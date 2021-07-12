import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";
import testimonialsImage1 from "assets/testimonial-1-1.png";
import testimonialsImage2 from "assets/testimonial-1-2.png";
import testimonialsImage3 from "assets/testimonial-1-3.png";
import testimonialsImage4 from "assets/testimonial-1-4.png";
import testimonialsImage5 from "assets/testimonial-1-5.png";
import testimonialsImage6 from "assets/testimonial-1-6.png";

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "I have been this hospital with lot of medical issues after meeting Dr Chinmayie Maam she is really very soft nature and handles our procedure very professional way and now i got my pregnancy positive with2 month i am very happy with this treatment and staff are very friendly, supporting.. I will highly recommend to all the infertile couple to visit this centre as a first option instead of wasting more time  🥰🥰🥰",
      name: "Manju Nagraj",
    },
    {
      image: testimonialsImage2,
      text: "Best infertility centre and well knowledge, experience, humble doctor who treated me Dr Chinmayie.. thanks",
      name: "Dev Chandrakar",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "Frist I would like to thank Dr Ashamed mam and Dr chinmayiee mam they made my family complete best IVF center",
      name: "Nagavine Nagu",
    },
    {
      image: testimonialsImage4,
      text: "Best IVF treatment in Bangalore..I came along with my friends who is suffering from endometriosis problem..the Dr chinmayie ma'am is treated her well..I will definitely suggest this centre",
      name: "Manjula",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "𝓘 am very happy about the service and we don't feel like hospital it is like homely atmosphere.And Dr.Chinmayie and the staffs were very helpful. I would suggest this hospital if you want treatment for infertility.",
      name: "Moni N.V",
    },
    {
      image: testimonialsImage6,
      text: "One of the best place for infertile couple to get there dream come true .... Dr chinmayie is best doctor",
      name: "Madhu Sudhan",
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: "Best IVF treatment in Bangalore..I came along with my friends who si suffering from endometriosis problem..the Dr chinmayie ma'am is treated her well..I will definitely suggest this centre",
      name: "Pooja Gejge",
    },
    {
      image: testimonialsImage2,
      text: "Garbhagudi is a miracle. We were confused at first but the service we received was amazing. dr chinmayie is an amazing person including all the staff members who were polite and always with a smile on everybody's face. we actually felt like stepping inside the temple it was so peace and calm. best place for your dreams come true.",
      name: "Sureva Healthy Foods",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "I am very happy about the service and we don't feel like hospital it is like homely atmosphere.And Dr.Chinmayie and the staffs were very helpful. I would suggest this hospital if you want treatment for infertility.",
      name: "Simran Jaiswal",
    },
    {
      image: testimonialsImage4,
      text: "We have chosen the best centre for our friend.who are struggling to a baby with in short time and proper guidance of Dr Chinmayie they got pregncy confimed, the atmosphere of hospital is too good,  while getting and getting out I was getting a warm smile, they don't even treat us like a patient they always treated me like a member of the family, thank you Dr.  Chinnamyie and team",
      name: "Monica Seles",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "We had a lots of doubt and resolution for all doubts has been solved very patiently...the Dr. Chinmayie was very patient and clam also supporting Nurse Rozi ..Thanks for supporting us to be a parents... Also we have been amaze that the Front desk and all staff has taken very close follow-ups till our complete treatment It was a great experience with Team Garbhagudi (South End circle) Thanks to all of you with lots of love and wishes 😊.",
      name: "Alhad Narkhede",
    },
    {
      image: testimonialsImage6,
      text: "Me and my wife consulted Dr Chinamayie & Dr Asha for IVF treatment, have to say we are happy with treatment we received from the entire team of Garbagudi. The process of treatment we went through was very tiring mentally and financially draining, the team of experienced doctors and very friendly staff members did a really good task in treating and guiding us through this tough phase. I would like to thank the entire staff of GarbhaGudi for giving us the ray of hope that we always wished for. 🙏🙏🙏",
      name: "Sujay G",
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What couples say about us"
        text="Patient testimonial"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: "#F4F4F6",
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["60px", null, null, null, "80px", null, "120px"],
  },
};
