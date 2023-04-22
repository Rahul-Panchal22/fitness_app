import React from "react";
import { Stack, Typography } from "@mui/material";
import ShoulderIcon from "../assets/icons/shoulder.png";
import BackIcon from "../assets/icons/back.webp";
import CardioIcon from "../assets/icons/cardio.jpeg";
import UpperLegsIcons from "../assets/icons/upperLegs.png";
import ArmsIcon from "../assets/icons/lowerArms.webp";
import AbsIcon from "../assets/icons/abdominal.png";
import chestIcon from "../assets/icons/chest.webp";
import gymIcon from "../assets/icons/dumbbell.png";
import foreArms from "../assets/icons/forearm.png";
import lowerLegsIcon from "../assets/icons/lowerLegs.jpeg";
import neckIcon from "../assets/icons/side.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  let imageIcon;
  switch (item) {
    case "shoulders":
      imageIcon = ShoulderIcon;
      break;
    case "cardio":
      imageIcon = CardioIcon;
      break;
    case "chest":
      imageIcon = chestIcon;
      break;
    case "lower arms":
      imageIcon = foreArms;
      break;

    case "lower legs":
      imageIcon = lowerLegsIcon;
      break;

    case "neck":
      imageIcon = neckIcon;
      break;

    case "upper arms":
      imageIcon = ArmsIcon;
      break;

    case "upper legs":
      imageIcon = UpperLegsIcons;
      break;

    case "waist":
      imageIcon = AbsIcon;
      break;

    case "back":
      imageIcon = BackIcon;
      break;

    default:
      imageIcon = gymIcon;
      break;
  }

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart == item ? "4px solid #ff2625" : "",
        bgcolor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: "smooth",
        });
      }}
    >
      <img
        src={imageIcon}
        alt="dummbell"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="Bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
