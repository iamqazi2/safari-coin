"use client";
import { useEffect, useState } from "react";

import LoadingScreen from "../components/loader";
import SignUpForm from "../components/Signup";

const AboutUsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col ">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {" "}
          <SignUpForm />
        </>
      )}
    </div>
  );
};

export default AboutUsPage;
