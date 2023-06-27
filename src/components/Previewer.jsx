import { useSelector } from "react-redux";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
  }
);

const renderer = new marked.Renderer();
renderer.link = function (href,title,text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer = () => {

  const mode = useSelector(state=>state.mode);
  const font = useSelector(state=>state.font);
  const input = useSelector(state=>state.input);

  return (
    <div className={`${mode}Shadow h-100`}>
      <div className={`${mode}Background3 header fs-4 ${mode}Border d-flex align-items-center justify-content-between px-3`}>
        <div className="d-flex align-items-center gap-2" >
          <div className="d-flex align-items-center gap-2" ><i className="bi bi-file-richtext"/> Previewer</div>
          <div className={`${font} fs-5`} >( {font.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ')} )</div>
        </div>
        <i className="bi bi-arrows-fullscreen expand-button" />
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(input,{renderer:renderer})}} className={`w-100 textarea ${font} ${mode}Background2 ${mode}Border ${mode}Text text p-3 text-start`}></div>
    </div>
  )
}

export { Previewer };