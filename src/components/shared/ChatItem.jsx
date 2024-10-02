import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";
import { useSpring, animated } from 'react-spring'; // Import useSpring and animated from 'react-spring'

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
const animationProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-100%)" },
    delay: 0.1 * index,
  });
  return (
    <Link
      sx={{
        padding: "0",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <animated.div
        style={{
          ...animationProps, // Spread animationProps here
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "lightpink" : "unset",
          color: sameSender ? "black" : "unset",
          position: "relative",
          padding: "1rem",
        }}
      >
        <AvatarCard avatar={avatar} />

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </animated.div>
    </Link>
  );
};

export default memo(ChatItem);
