import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateInput } from "../redux/inputSlice";

const Editor = () => {

  const mode = useSelector(state=>state.mode);
  const font = useSelector(state=>state.font);
  const input = useSelector(state=>state.input);

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateInput(e.target.value))
  }

  return (
    <div className={`${mode}Shadow h-100`}>
      <div className={`${mode}Background3 header fs-4 ${mode}Border d-flex align-items-center justify-content-between px-3`}>
        <div className="d-flex align-items-center gap-2" ><i className="bi bi-pencil-square"/> Editor</div>
        <i className="bi bi-arrows-fullscreen expand-button" />
      </div>
      <textarea id="editor" onChange={handleChange} value={input} className={`w-100 textarea ${font} ${mode}Background2 ${mode}Border ${mode}Text text p-3`} ></textarea>
    </div>

  )
}

export { Editor };