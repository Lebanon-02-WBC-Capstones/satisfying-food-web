import React from "react";
import PropTypes from "prop-types";
function TeamCardItem(memberprops) {
  const { person } = memberprops;
  return (
    <div className="flex flex-col items-center">
      <img
        src={person.imageURL}
        alt={person.name}
        className="rounded-full mb-1 w-20 h-20"
      />
      <p className="text-sm font-bold">{person.name}</p>
      <p className="text-xs">{person.role}</p>
    </div>
  );
}

TeamCardItem.PropTypes = {
  TeamCardItem: PropTypes.object,
};

export default TeamCardItem;
