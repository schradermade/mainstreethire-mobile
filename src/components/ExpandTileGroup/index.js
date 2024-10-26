import React, { useState } from 'react';

const ExpandTileGroup = ({ children, isExpanded }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpand = (index) => {
    const newExpandedCard = expandedCard === index ? null : index;
    setExpandedCard(newExpandedCard);
    isExpanded(newExpandedCard !== null);
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isExpanded: expandedCard === index,
          onExpand: () => handleExpand(index),
        });
      })}
    </>
  );
};

export default ExpandTileGroup;
