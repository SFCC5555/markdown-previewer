import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateInput } from "../redux/inputSlice";
import { useState } from 'react';

const Editor = () => {
  // State to track the expansion of the editor
  const [expand, setExpand] = useState(false);

  // Select relevant states from Redux store
  const mode = useSelector(state => state.mode);
  const font = useSelector(state => state.font);
  const input = useSelector(state => state.input);

  // Create a dispatch function to update the Redux store
  const dispatch = useDispatch();

  // Function to handle input change and dispatch an action to update input state
  function handleChange(e) {
    dispatch(updateInput(e.target.value));
  }

  // Function to generate and download a Markdown file
  function generateMarkdownFile() {
    const blob = new Blob([input], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.md';
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className={`${mode}Shadow ${expand ? 'expand' : 'h-100'}`}>
      <div className={`${mode}Background3 header fs-4 ${mode}Border d-flex align-items-center justify-content-between px-3`}>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-2"><i className="bi bi-pencil-square" /> Editor</div>
          <div className={`${font} fs-5`}>({font.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')})</div>
        </div>
        <div className="d-flex aling-items-center gap-3">
          <i onClick={generateMarkdownFile} className="bi bi-download expand-button" />
          <i onClick={() => setExpand(prev => !prev)} className={`bi bi-arrows-${expand ? 'angle-contract' : 'fullscreen'} expand-button`} />
        </div>
      </div>
      <textarea
        id="editor"
        onChange={handleChange}
        value={input}
        className={`w-100 textarea ${font} ${mode}Background2 ${mode}Border ${mode}Text text p-3`}
      ></textarea>
    </div>
  );
}

export { Editor };