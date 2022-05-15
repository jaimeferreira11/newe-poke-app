import React from "react";
import PropTypes from "prop-types";

interface IProps {
  title: string;
  description: string;
}

export const InfoComponent = ({ title, description }: IProps) => {
  if (description === null) return null;
  return (
    <div className="box-content">
      <span className="mr-2 md:text-lg font-bold">{title}</span>
      <span className=" md:text-lg">{description}</span>
    </div>
  );
};

InfoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
