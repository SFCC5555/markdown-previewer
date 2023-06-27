import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Title } from './components/Title';
import { ModeButton } from './components/ModeButton';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';
import { Footer } from './components/Footer';
import { useSelector } from 'react-redux';


function App() {

  const mode = useSelector(state=>state.mode);

  return (
    <div className={`main position-relative d-flex flex-column align-items-center p-5 ${mode}Background1 ${mode}Text`}>
      <Title />
      <ModeButton />
      <section className='row text-center w-100 gap-3 gap-sm-0 main-container' >
        <div className={`col-12 col-sm-6 minor-container`}>
         <Editor />
        </div>
        <div className={`col-12 col-sm-6 minor-container`}>
          <Previewer />
        </div>
      </section> 
      <Footer />
    </div>
  )
}

export default App
