// EmojiPicker.jsx
import React from "react";
import { IconButton, Popover, Typography } from "@mui/material";
import { EmojiEmotions as EmojiIcon } from "@mui/icons-material";

const emojis = ["😊", "😂", "😍", "😎", "🥳", "😇", "😜", "😋", "😏", "🤔", 
"😴", "😷", "🥺", "🙄", "😡", "😱", "🤯", "🤩", "🥰", "🤪", 
"😅", "😬", "🥴", "😪", "😤", "😛", "😝", "😒", "😞", "😟", 
"😠", "😡", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", 
"👺", "👻", "👽", "😊", "😂", "😍", "😎", "🥳", "😇", "😜", 
"😋", "😏", "🤔", "😴", "😷", "🥺", "🙄", "😡", "😱", "🤯", 
"🤩", "🥰", "🤪", "😅", "😬", "🥴", "😪", "😤", "😛", "😝", 
"😒", "😞", "😟", "😠", "😡", "🤬", "😈", "👿", "💀", "☠️", 
"💩", "🤡", "👹", "👺", "👻", "👽"];

const EmojiPicker = ({ onSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (emoji) => {
    onSelect(emoji);
    handleClosePopover();
  };

  return (
    <>
      <IconButton onClick={handleOpenPopover}>
        <EmojiIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <Typography variant="h6">Pick an Emoji</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {emojis.map((emoji, index) => (
              <span
                key={index}
                style={{ fontSize: "2rem", cursor: "pointer", padding: "0.5rem" }}
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </Popover>
    </>
  );
};

export default EmojiPicker;
