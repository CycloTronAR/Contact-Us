import './App.css';
import Nav from './component/navbar/Navbar';
import ContactHead from './component/ContactHead/ContactHead';
import ContactForm from './component/ContactForm/ContactForm'

function App() {
  

  return (
  <div>
    <Nav />
    <main className='main_container'>
    <ContactHead />
    <ContactForm />
    </main>
  </div>
  )
}

export default App
