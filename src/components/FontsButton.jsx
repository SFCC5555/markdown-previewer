import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFont } from '../redux/fontSlice';
import { useState } from 'react';

const FontsButton = () => {
  // List of available fonts
  const fontsList = ['Arial', 'Courier New', 'Russo One', 'Sans Serif', 'Times New Roman', 'Verdana'];

  // State to track the active button
  const [activeButton, setActiveButton] = useState(false);

  // Select the mode from the Redux store
  const mode = useSelector(state => state.mode);

  // Create a dispatch function to update the Redux store
  const dispatch = useDispatch();

  // Function to handle font selection
  function handleClick(e) {
    dispatch(changeFont(e.target.id));
  }

  return (
    <>
      <button onClick={() => setActiveButton(prev => !prev)} className={`${mode}Button rounded-3 p-2`}>
        Fonts <i className={`bi bi-fonts`} />
      </button>
      {activeButton && (
        <section className={`position-absolute fonts-menu fs-5 ${mode}Background1 ${mode}Text ${mode}Shadow rounded-2 ${mode}Border p-1`}>
          {fontsList.map(f => (
            <div
              id={f.replaceAll(' ', '-').toLowerCase()}
              className={`${mode}Font ${f.replaceAll(' ', '-').toLowerCase()} px-2 py-1 rounded-1`}
              onClick={handleClick}
              key={f}
            >
              {f}
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export { FontsButton };