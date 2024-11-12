import ExperienceLineItem from './ExperienceLineItem';

const ExperienceList = ({ experienceItems }) => {
  return (
    <>
      {experienceItems.map((item, index) => (
        <ExperienceLineItem key={index} item={item} />
      ))}
    </>
  );
};

export default ExperienceList;
