import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";
import { db } from "./firebase";
import { BathtubTwoTone } from "@mui/icons-material";
import firebase from 'firebase/compat/app';

function Feed() {
  const [input,setInput] = useState('');
const [posts,setposts]= useState([]);

useEffect(()=>{
  db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>(
    setposts(
      snapshot.docs.map(doc => (
        {
          id: doc.id,
          data:doc.data(),
        }
          ))
)
));
},[]);

const sendPost = e =>{
    e.preventDefault();

    db.collection('posts').add({
      name: 'Mamta Bhatt',
      description: 'this is a test',
      message:input,
      photoUrl:" ",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

  };

    return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
          <InputOption Icon={SmartDisplayIcon} title="Video" color="#7CFC00"/>
          <InputOption Icon={EventNoteIcon} title="Event" color="#FF9A14"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#FF5724"/>          
        </div>
      </div>
      {/* posts */}
      {posts.map(({id, data: {name, description, message, photoUrl} })=>(
        <Post  
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}

        />
      ))}
       
    </div>
  );
}

export default Feed;
