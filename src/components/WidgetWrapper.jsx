import { Box } from "@mui/material";
import { styled } from "@mui/system";

//represents the styling for each widget
const WidgetWrapper = styled(Box)(({ theme }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem", //top right bottom and left
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}));

export default WidgetWrapper