import { useSelector } from "react-redux";

const Previewer = () => {

  const mode = useSelector(state=>state.mode);
  const input = useSelector(state=>state.input);

  return (
    <div className={`${mode}Shadow h-100`}>
      <div className={`${mode}Background3 header fs-4 ${mode}Border d-flex align-items-center justify-content-between px-3`}>
        <div className="d-flex align-items-center gap-2" ><i className="bi bi-file-richtext"/> Previewer</div>
        <i className="bi bi-arrows-fullscreen expand-button" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(input)}} id='previewer' className={`w-100 textarea ${mode}Background2 ${mode}Border ${mode}Text text p-3 text-start`}></div>
    </div>
  )
}

export { Previewer };