import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={transformImage(user?.avatar?.url)}
        sx={{
          width: 100,
          height: 100,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid orange",
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)',
        }}
      />
      <ProfileCard 
       heading={"Bio"} 
       text={user?.bio} 
      />
      <ProfileCard
        heading={"Username"}
        text={user?.username}
        Icon={<UserNameIcon />}
      />
      <ProfileCard 
       heading={"Name"} 
       text={user?.name} 
       Icon={<FaceIcon />} 
      />
      <ProfileCard
        heading={"Joined"}
        text={moment(user?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1" textAlign={"center"}>{text}</Typography>
      <Typography color={"gray"} textAlign={"center"} variant="caption">
      {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
