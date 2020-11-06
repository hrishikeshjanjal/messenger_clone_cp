import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core/";
import Message from "./Message";
import db from "./firebase"; //from config file
import firebase from "firebase"; //from actual firebase db online
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // console.log(input);
  // console.log(messages);

  //useState: variable in REACT
  //useEffect: run code on a condition in React

  //useeffect for db
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here
    setUsername(prompt("Please Enter Your User Name!"));
    //if [] is blank , this code runs ONCE when the app loads
  }, []); //[]  in here we write a condition

  //function to send message:
  const sendMessage = (e) => {
    e.preventDefault(); //since form is used it refreshes the app after clicking the submit button!

    //add messages to db
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setmessages([...messages, input]);
    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=80" />
      <h1>🚀 Hello Clever Programmer! 🚀</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="app_input"
            placeholder="Enter a Message..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <IconButton
            className="app_iconbutton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          // <Message username={msg.username} text={msg.text} />
          <Message key={id} username={username} message={message} />
        ))}
        {/*without id all messages are re rendered even after sending a single message*/}
      </FlipMove>
    </div>
  );
};

export default App;

//add a time functionality to display at what time the message was sent
