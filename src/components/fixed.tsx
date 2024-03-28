import '../styles/fixedBar.css';
import githubIcon from '../images/github_logo_icon_143772.png';
import linkedinIcon from '../images/linkedin_socialnetwork_17441.png'
'https://www.linkedin.com/in/luis-felipe-alves-fernandes-190198201/'
function FixedBar() {
  return (
    <div className="fixedInfo">
      <div className="test">
        <div className="infos topic" >
          Developed By Luis Felipe.
        </div>
        <div className="topic">
          <img src={githubIcon} className="icon" alt="github" />
          <a href="https://github.com/LuisFelipee1">Github</a>
        </div>
        <div className="topic">
            <img className="icon" src={linkedinIcon} alt="github" />
            <a href="https://www.linkedin.com/in/luis-felipe-alves-fernandes-190198201/">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default FixedBar;
