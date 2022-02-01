// usestate: short-term memory && variable in react
// useeffect: block of code that get executed under a condition or run code under a condition
import { useEffect, useState } from "react";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // to store the messages
  const [username, setUsername] = useState(""); //to remember the user

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("enter your name"));
  }, []);

  const sendMessage = (event) => {
    //all the logic to send the message goes here
    event.preventDefault(); // prevent to being refreshed

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBtt1U_NRbP2Nl6ktD-MPHqUgB7hZl7Bsaw&usqp=CAU"
        alt="messenger"
      />
      <h1>Fb clone</h1>
      <h2>Hello,{username}</h2>

      <form className="app-form ">
        <FormControl className="app-formControl">
          <Input
            className="app-input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app-iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* message themeselves */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
