import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeMode } from '../redux/modeSlice';

const ModeButton = () => {

  const mode = useSelector(state=>state.mode);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(changeMode(mode==='light'?'dark':'light'))
  }


  return (
    <button onClick={handleClick} className={`button ${mode}Button position-absolute rounded-3 p-2`}>{mode==='light'?'Dark':'Light'} Mode <i className={`bi bi-lightbulb${mode==='light'?'-off':''}-fill`} /></button>
  )
}

export {ModeButton};