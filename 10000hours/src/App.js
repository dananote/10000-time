import './style.css'
import './reset.css'
import Title from './components/Title/Title';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import { useState } from 'react'

function App() {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false)
  }

  function openModal() {
    setModal(true)
  }


  return (
    <div>
      <Title />
      <Main openModal={openModal} />
      <Footer />
      {modal && <Modal closeModal={closeModal}/>}
    </div>
  );
}
export default App;
