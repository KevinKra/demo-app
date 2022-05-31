import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Dashboard = () => {
  return (
    <PageLayout variant="5-column-centered">
      <AssetOverview elevation={2}>
        <Typography>Main</Typography>
      </AssetOverview>
      <SupportWidget>
        <Typography>Widget</Typography>
      </SupportWidget>
    </PageLayout>
  );
};

export default Dashboard;

const PageLayout = styled("div")<{ variant: "5-column-centered" }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "aside-left center-left center center-right aside-right";
  grid-column-gap: 1rem;
  height: 100vh;
`;

const AssetOverview = styled(Paper)<{ width?: string }>`
  //* parent
  grid-area: center;

  //* local
  width: 60vw;
  max-width: 1000px;
  height: fit-content;
  color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.status.danger};
`;

const SupportWidget = styled(Paper)`
  //* parent
  grid-area: center-right;
  justify-self: left;

  //* local
  display: grid;
  place-items: center;
  border: 1px solid red;
  width: 100px;
  height: fit-content;
`;
