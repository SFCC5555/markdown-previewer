import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Title } from './components/Title';
import { ModeButton } from './components/ModeButton';
import { FontsButton } from './components/FontsButton';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';
import { Footer } from './components/Footer';

// Import React Redux function to access the application's state
import { useSelector } from 'react-redux';

// Define the main App component
function App() {
  // Access the 'mode' state variable from Redux
  const mode = useSelector(state => state.mode);

  // Render the main application structure
  return (
    <div className={`main position-relative d-flex flex-column align-items-center p-5 ${mode}Background1 ${mode}Text`}>
      {/* Display the Title component */}
      <Title />

      {/* Button section for fonts and mode selection */}
      <section className='buttonSection position-absolute d-flex gap-3'>
        {/* Display the FontsButton component */}
        <FontsButton />

        {/* Display the ModeButton component */}
        <ModeButton />
      </section>

      {/* Main content section with Editor and Previewer components */}
      <section className='row text-center w-100 gap-3 gap-sm-0 main-container'>
        <div className={`col-12 col-sm-6 minor-container`}>
          {/* Display the Editor component */}
          <Editor />
        </div>
        <div className={`col-12 col-sm-6 minor-container`}>
          {/* Display the Previewer component */}
          <Previewer />
        </div>
      </section>

      {/* Display the Footer component */}
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;
