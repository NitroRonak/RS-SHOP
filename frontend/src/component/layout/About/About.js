import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.Instagram.com/ronak8119";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "1vmax 0" }}
              src="https://res.cloudinary.com/dfwbszday/image/upload/v1665329186/avatars/AboutUsImg_ptvsnm.jpg"
              alt="Founder"
            />
            <Typography>Ronak Sharma</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Hello, guys I am Ronak Sharma created this website. This is Fully MERN Stack Shopping Website.I have created this website to improve my MERN Stack Skills.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Social</Typography>
            <a
              href="https://www.linkedin.com/in/nitroronak-aa699a198/"
              target="blank"
            >
              <LinkedInIcon style={{transition:"all 0.5s"}} className="instagramSvgIcon"></LinkedInIcon>
            </a>

            <a href="https://www.Instagram.com/ronak8119" target="blank">
              <InstagramIcon style={{transition:"all 0.5s"}} className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;