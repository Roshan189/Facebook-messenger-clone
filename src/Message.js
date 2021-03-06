import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message-user"}`}>
      <Card className={isUser ? "message-userCard" : "message-guestCard"}>
        <CardContent>
          <Typography varient="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"} : `}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
