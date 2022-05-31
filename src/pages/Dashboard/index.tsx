import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Dashboard = () => {
  return (
    <StyledPaper elevation={2} width="500">
      <Typography>Hello Wooooorld</Typography>
    </StyledPaper>
  );
};

export default Dashboard;

const StyledPaper = styled(Paper)<{ width: string }>`
  color: ${(props) => props.theme.palette.primary.main};
  width: ${(props) => props.width}px;
  border: 1px solid ${(props) => props.theme.status.danger};
`;
