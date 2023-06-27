import { useState } from "react";

const Section = ({ title, description, isVisible, handleClick }) => {
  return (
    <div
      className="border-black"
      style={{ border: "2px solid yellow", margin: "3px" }}
    >
      <h3 className="font-bold">{title}</h3>
      {isVisible === title && (
        <p style={{ color: "pink", fontStyle: "italic" }}>{description}</p>
      )}
      <button style={{ background: "red" }} onClick={() => handleClick()}>
        {isVisible === title ? "hide" : "Show"}
      </button>
    </div>
  );
};

const InstaMartAccordian = () => {
  const [isVisible, setIsVisible] = useState("");
  return (
    <>
      <Section
        title={"About InstaMartAccordian"}
        description={
          "About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veniam cum eligendi saepe dolor itaque dolorum aperiam quia similique vero. Tenetur, nostrum beatae. "
        }
        isVisible={isVisible}
        handleClick={() =>
          setIsVisible(
            isVisible == "About InstaMartAccordian"
              ? ""
              : "About InstaMartAccordian"
          )
        }
      />
      <Section
        title={"Team InstaMartAccordian"}
        description={
          " team Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veniam cum eligendi saepe dolor itaque dolorum aperiam quia similique vero. Tenetur, nostrum beatae."
        }
        isVisible={isVisible}
        handleClick={() =>
          setIsVisible(
            isVisible == "Team InstaMartAccordian"
              ? ""
              : "Team InstaMartAccordian"
          )
        }
      />
      <Section
        title={"Carrer InstaMartAccordian"}
        description={
          " Carrer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veniam cum eligendi saepe dolor itaque dolorum aperiam quia similique vero. Tenetur, nostrum beatae."
        }
        isVisible={isVisible}
        handleClick={() =>
          setIsVisible(
            isVisible == "Carrer InstaMartAccordian"
              ? ""
              : "Carrer InstaMartAccordian"
          )
        }
      />
      <h3>InstaMartAccordian</h3>
      <p>100% off</p>
      {/* <DetailsOfInstamarat />
      <CareerInstaMartAccordian/>
      <Products/> */}
      <p></p>
    </>
  );
};
export default InstaMartAccordian;
