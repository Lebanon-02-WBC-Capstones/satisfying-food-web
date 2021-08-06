import React from "react";
import aboutUsLogo from "./About_Us.svg";
import WhyWeDoIt from "../../components/WhyWeDoIt/WhyWeDoIt";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import TeamCardItem from "../../components/TeamCardItem/TeamCardItem";
import ContactUs from "../../components/ContactUs/ContactUs";

function AboutUs() {
  const persons = [
    {
      name: "Osama Abdullah",
      role: "Leader",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922510.png",
    },
    {
      name: "Marwa Awwad",
      role: "Developer",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922561.png",
    },
    {
      name: "Adnan Sayed",
      role: "Developer",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922510.png",
    },
    {
      name: "Charbel Hbayter",
      role: "Developer",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922510.png",
    },
    {
      name: "Nour Sarmout",
      role: "Developer",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922561.png",
    },
    {
      name: "Abdallah Safar",
      role: "Developer",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922510.png",
    },
    {
      name: "Sukaina Charaf Eddine",
      role: "Developer",
      imageURL: "https://image.flaticon.com/icons/png/512/2922/2922561.png",
    },
  ];

  return (
    <div>
      <div>
        <img src={aboutUsLogo} alt="About us logo" className="w-full" />
      </div>
      <div className="m-16 mr-12 ml-12">
        <WhatWeDo />
      </div>
      <div className="m-16 mr-12 ml-12">
        <WhyWeDoIt />
      </div>
      <div className="mt-20">
        <WhoWeAre />
      </div>
      <div className="mt-20 pl-4 flex flex-wrap">
        {persons.map((person, index) => {
          if ((index + 1) % 3 === 0) {
            return (
              <div key={person.name} className="mb-5">
                <TeamCardItem person={person} />
              </div>
            );
          } else {
            return (
              <div key={person.name} className="mb-5 mr-2">
                <TeamCardItem person={person} />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-10 mr-5 ml-5">
        <ContactUs />
      </div>
    </div>
  );
}

export default AboutUs;
