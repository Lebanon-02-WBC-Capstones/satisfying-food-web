import { React, useContext } from "react";
import WhyWeDoIt from "../../components/WhyWeDoIt/WhyWeDoIt";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import TeamCardItem from "../../components/TeamCardItem/TeamCardItem";
import ContactUs from "../../components/ContactUs/ContactUs";
import { StateContext } from "../.././StateProvider";
import { useHistory } from "react-router-dom";
import abed from "../../images/TeamPhotos/AbdallahSafar.jpg";
import adnan from "../../images/TeamPhotos/AdnanSayed.jpeg";
import marwa from "../../images/TeamPhotos/MarwaAwwad.jpeg";
import sukaina from "../../images/TeamPhotos/SukainaCharafEddine.jpeg";
import nour from "../../images/TeamPhotos/NourSarmout.jpeg";
import charbel from "../../images/TeamPhotos/CharbelHbayter.jpeg";
import osama from "../../images/TeamPhotos/OsamaAbdullah.png";

function AboutUs() {
  const [state, dispatch] = useContext(StateContext);
  const history = useHistory();

  const showMenu = () => {
    history.goBack();
    state;
    dispatch({ type: "SET_MENU", menuDisp: true });
  };

  const persons = [
    {
      name: "Osama Abdullah",
      role: "Leader",
      imageURL: osama,
    },
    {
      name: "Marwa Awwad",
      role: "Developer",
      imageURL: marwa,
    },
    {
      name: "Adnan Sayed",
      role: "Developer",
      imageURL: adnan,
    },
    {
      name: "Charbel Hbayter",
      role: "Developer",
      imageURL: charbel,
    },
    {
      name: "Nour Sarmout",
      role: "Developer",
      imageURL: nour,
    },
    {
      name: "Abdallah Safar",
      role: "Developer",
      imageURL: abed,
    },
    {
      name: "Sukaina Charaf Eddine",
      role: "Developer",
      imageURL: sukaina,
    },
  ];

  return (
    <div>
      <div className="bg-about-us-bg-image w-full h-42 p-2">
        <div
          className="border-t-4 border-b-4 border-white w-8 pt-2 pb-2"
          onClick={showMenu}
        >
          <h1 className="border-t-4 border-white w-8"></h1>
        </div>
      </div>
      <div className="m-16 mr-8 ml-8">
        <WhatWeDo />
      </div>
      <div className="m-16 mx-8">
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
