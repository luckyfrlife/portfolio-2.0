import React from "react";
import shapeTwo from "../../assets/shape-2.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItems) => {
        const { id, img, category, title, description } = projectItems;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two "
            key={id}>
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>

            <a href="#pricing" className="link">
              See Pricing
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
