import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core/";
import "./Message.css";

//forwardRef is Higher order function:
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message_user"}`}>
      {/* adding classes to user and differentiating between u and others */}
      <Card className={isUser ? "message_usercard" : "message_guestcard"}>
        {/*class name word: first word component name and second actual element name called as BEM */}
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"} :`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

//deploy
// npm i -g firebase-tools
// firebase init =>hosting=>existing proj=>messenger-clone=>build=>y=>initiliazation complete
// npm run build
// firebase deploy
