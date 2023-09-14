// Import statements for necessary libraries and components
import { useSelector } from "react-redux";
import { marked } from "marked"; // Import the marked library for markdown parsing
import { useState } from "react";

// Set marked options for parsing markdown content
marked.setOptions({
  breaks: true,
});

// Create a custom renderer for links in the markdown
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

// Define the Previewer functional component
const Previewer = () => {
  // State variable to control the expand/collapse feature
  const [expand, setExpand] = useState(false);

  // Redux selectors to access application state
  const mode = useSelector((state) => state.mode); // Access the current mode (light/dark)
  const font = useSelector((state) => state.font); // Access the selected font
  const input = useSelector((state) => state.input); // Access the markdown input text

  return (
    <div className={`${mode}Shadow ${expand ? 'expand' : 'h-100'}`}>
      <div className={`${mode}Background3 header fs-4 ${mode}Border d-flex align-items-center justify-content-between px-3`}>
        <div className="d-flex align-items-center gap-2" >
          <div className="d-flex align-items-center gap-2" ><i className="bi bi-file-richtext"/> Previewer</div>
          <div className={`${font} fs-5`} >( {font.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')} )</div>
        </div>
        <i onClick={() => setExpand(prev => !prev)} className={`bi bi-arrows-${expand ? 'angle-contract' : 'fullscreen'} expand-button`} />
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(input, { renderer: renderer }) }} // Render parsed markdown content
        className={`w-100 textarea ${font} ${mode}Background2 ${mode}Border ${mode}Text text p-3 text-start`}
      ></div>
    </div>
  );
}

// Export the Previewer component for use in other parts of the application
export { Previewer };