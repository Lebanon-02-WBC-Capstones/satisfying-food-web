import React from "react" ;
import PropTypes from "prop-types";
function TeamCardItem(TeamCardItem) {
    return (
    <div className="flex flex-col items-center">
        <img src={TeamCardItem.person.imageURL} alt={TeamCardItem.person.name} className="rounded-full mb-1 w-20 h-20" />
        <p className="text-sm font-bold">{TeamCardItem.person.name}</p>
        <p className="text-xs">{TeamCardItem.person.role}</p>
    </div>
    );
}

TeamCardItem.defaultProps={
    person: {image:"https://image.flaticon.com/icons/png/128/2922/2922510.png",
    name:"0",
    role: "0"}
    };

TeamCardItem.PropTypes = {
        person:PropTypes.object
      };

export default TeamCardItem;