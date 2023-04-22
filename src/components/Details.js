import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetPartImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { name, bodyPart, gifUrl, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetPartImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: {
          lg: "row",
        },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: {
            lg: "35px",
            xs: "20px",
          },
        }}
      >
        <Typography variant="h3" textTransform="capitalize">{name}</Typography>
        <Typography variant="h6">
          Exercise keep you strong. {name} {` `}
          is one of the best exercise to target your {target}. It will help
          improve your mood and energy
        </Typography>
        <Typography>
          {extraDetail.map((item) => {
            return (
              <Stack
                key={item.name}
                direction="row"
                gap="25px"
                alignItems="center"
                mb="20px"
              >
                <Button
                  sx={{
                    background: "#fff2db",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={bodyPart}
                    style={{
                      width: "50px",
                      heigth: "50px",
                    }}
                  />
                </Button>
                <Typography variant="h5" textTransform="capitalize">
                  {item.name}
                </Typography>
              </Stack>
            );
          })}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Details;
