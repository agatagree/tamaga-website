import { IntroSection } from "./IntroSection/IntroSection";
import { Offer } from "./OfferSection/Offer";
import { useState } from "react";

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <Offer />
    </>
  );
};
