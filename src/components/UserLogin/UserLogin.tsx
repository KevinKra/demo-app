import { Button, Link, styled, Typography } from "@mui/material";

const UserLogin = () => {
  return (
    <Wrapper>
      <div>
        <Typography>Stackhawk</Typography>
        <Typography variant="overline">Login With</Typography>
        <div className="user-login-buttons-container">
          <Button variant="contained">Github</Button>
          <Button variant="contained">Google</Button>
          <Button variant="contained">Email</Button>
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
