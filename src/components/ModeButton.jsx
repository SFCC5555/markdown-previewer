import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeMode } from '../redux/modeSlice';

const ModeButton = () => {
  // Get the current mode from the Redux store
  const mode = useSelector(state => state.mode);

  const dispatch = useDispatch();

  function handleClick() {
    // Dispatch an action to change the mode (toggle between light and dark)
    dispatch(changeMode(mode === 'light' ? 'dark' : 'light'));
  }

  return (
    <button onClick={handleClick} className={`${mode}Button rounded-3 p-2`}>
      {mode === 'light' ? 'Dark' : 'Light'} Mode{" "}
      <i className={`bi bi-lightbulb${mode === 'light' ? '-off' : ''}-fill`} />
    </button>
  );
}

export { ModeButton };