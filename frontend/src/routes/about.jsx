import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">About Me</h1>
      <p className="p">I am a full stack developer uses <i>React</i> and <i>GoLang</i> for <b>Web Development</b> and <i>Java</i> for <b>Android Development</b>. Recently, I am exploring C++.</p>
      <h2 className="t-6 p">Software</h2>
      <div className="m-3">
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">VS Code</span>
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">Android Studio</span>
      </div>
      <h2 className="t-6 p">Languages</h2>
      <div className="m-3">
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">Go/GoLang</span>
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">JavaScript</span>
      </div>
      <h2 className="t-6 p">Interested In</h2>
      <div className="m-3">
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">React</span>
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">C++</span>
      </div>
      <h2 className="t-6 p">Other Interests</h2>
      <div className="m-3">
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">Japanese</span>
        <span className="bs-3 br-4 bg-1 m-1 p-2 courier-prime">Sketching</span>
      </div>
      <h2 className="t-6 p">Work</h2>
      <p className="p">Currently I am working as a founding member of <Link className="td-0 c-1 courier-prime" to="https://bnstech.online/">BnS Tech</Link>.</p>
      <h2 className='t-6 p'>Sponser</h2>
      <iframe src="https://github.com/sponsors/ishushreyas/button" title="Sponsor ishushreyas" height="32" width="114" style={{border: '0', borderRadius: '6px'}}></iframe>
    </div>
  );
};

export default AboutMe;
