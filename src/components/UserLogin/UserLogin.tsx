import { Link, styled, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../../_molecules/Button/Button";

const UserLogin = () => {
  return (
    <Wrapper>
      <div>
        <Typography>Stackhawk</Typography>
        <Typography variant="overline">Login With</Typography>
        <div className="user-login-buttons-container">
          <StyledButton text="Github" icon="github" variant="outlined" />
          <StyledButton text="Google" icon="google" variant="contained" />
          <StyledButton text="Email" icon="email" variant="contained" />
        </div>
        <Typography>Or Login with</Typography>
        <Link>Single SignOn</Link>
        <Typography>New here?</Typography>
        <Link>Sign up for an account</Link>
      </div>
      <div>
        <Typography>Terms of Service</Typography>
        <Typography>Privacy Policy</Typography>
      </div>
    </Wrapper>
  );
};

export default UserLogin;

const Wrapper = styled("div")`
  border: 1px solid red;
  display: grid;

  .user-login-buttons-container {
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 1rem;
  }
`;
