import Image from "next/image";

import HeroSection from "@/app/components/herosection";
import MyBio from "@/app/components/mybio";
import MyExperience from "@/app/components/myexperience";
import MyProjects from "@/app/components/myprojects";
import MyCertificate from "@/app/components/certificate";
import MyFavSkills from "@/app/components/skills";
import MyEducation from "@/app/components/myeducation";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <MyBio />
      
      <MyExperience />
      <MyFavSkills />
      <MyProjects /> */}
      <MyEducation/>
      
      {/* <MyCertificate/> */}
    </>
  );
}
