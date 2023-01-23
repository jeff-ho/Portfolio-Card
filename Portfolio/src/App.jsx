import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <img className="profile-picture" src="../public/profile.jpg"></img>
      <div className="name-title-container">
        <h1 className="name">Jeffrey Ho</h1>
        <p className="title">Full Stack Web Developer</p>
      </div>
      <Button isOpen={setIsOpen}>Email</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
