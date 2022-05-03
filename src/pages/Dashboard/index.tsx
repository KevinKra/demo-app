import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <StyledPaper elevation={2} width="500" padding="1rem">
      <Typography>Hello Wooooorld</Typography>
    </StyledPaper>
  );
};

export default Dashboard;

const StyledPaper = styled(Paper)<{ width: string; padding: string }>`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width}px;
`;
