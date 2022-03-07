import EditIcon from "@mui/icons-material/Edit";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import cover from "../assets/cover.png";
import profile from "../assets/profile.png";
import useScreenSize from "../hooks/useScreenSize";
import Form from "./Form";

const MainContent = () => {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#FFFFFF", mt: 3 }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            maxHeight: "260px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src={cover}
            alt=""
            loading="lazy"
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "white",
              color: "black",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            <EditIcon />
          </IconButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            position: "absolute",
            bottom: screenSize > 600 ? -72.5 : -50,
            padding: 8,
            left: 15,
            backgroundColor: "white",
          }}
        >
          <img
            src={profile}
            alt=""
            loading="lazy"
            width={screenSize > 600 ? "140px" : "80px"}
            height={screenSize > 600 ? "140px" : "80px"}
            style={{
              borderRadius: "50%",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              bottom: screenSize > 600 ? 18 : 12,
              right: screenSize > 600 ? 18 : 12,
              boxShadow: "0 0 2px 0.5px gray",
              backgroundColor: "white",
              color: "black",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            size="small"
          >
            <EditIcon />
          </IconButton>
        </div>
      </div>
      <div style={{ marginTop: screenSize > 600 ? 72.5 : 65 }}>
        <div style={{ position: "absolute" }}></div>
        <Form />
      </div>
    </Container>
  );
};

export default MainContent;
