import { useSelector } from "react-redux";

const Footer = () => {
  // Get the mode from the Redux store
  const mode = useSelector(state => state.mode);

  return (
    <div className={`${mode}Text text mt-5`} >
      Challenge by{" "}
      <a
        className={`${mode}Text hover-full-opacity`}
        href='https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer'
        target="_blank"
        rel="noreferrer"
      >
        freeCodeCamp<span />
      </a>
    </div>
  );
}

export { Footer };