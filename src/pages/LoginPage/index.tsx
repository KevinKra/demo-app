import { Link, styled, Typography } from "@mui/material";
import UserLogin from "../../components/UserLogin/UserLogin";

const LoginPage = () => {
  return (
    <PageLayout>
      <Wrapper>
        <LearnMoreWidget>
          <Typography variant="h5" fontWeight={500}>
            StackHawk
          </Typography>
          <Typography className="learn-more-widget-italic" variant="caption">
            [ /stak/ /hôk/ ]
          </Typography>
          <Typography>
            Automate application scanning throughout your pipeline to find and
            fix security bugs before they hit production.
          </Typography>
          <Link href="#">Learn More</Link>
        </LearnMoreWidget>
        <UserLogin />
      </Wrapper>
    </PageLayout>
  );
};

export default LoginPage;

const PageLayout = styled("div")`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-gap: 3rem;
`;

const LearnMoreWidget = styled("div")`
  border: 1px solid red;

  // TODO add italic optional prop to Typography component, then remove this
  .learn-more-widget-italic {
    font-style: italic;
  }
`;
