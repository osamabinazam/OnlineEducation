import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/specific/Banner";
import Footer from "../components/Layout/Footer";
import SkillsCareerSection from "../components/specific/SkillsCareerSection";
import CenteredContent from "../components/specific/CenteredContent";
import TracksCardSection from "../components/specific/TracksCardSection";
import NewBanner from "../components/specific/NewBanner";
import TestimonialSection from "../components/specific/Testinomial";
import Instructors from "../components/specific/Instructors";
import NewsletterBanner from "../components/specific/NewsLetterBanner";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <Banner />
        <SkillsCareerSection />
        <CenteredContent  first={true}/>
        <TracksCardSection />
        <NewBanner />
        <TestimonialSection />
        <CenteredContent first={false} />
        <Instructors />
        <NewsletterBanner />
      </div>
      <Footer />
    </>
  );
}

export default Home;
