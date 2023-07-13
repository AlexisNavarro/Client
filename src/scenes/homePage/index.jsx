import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import NavBar from "scenes/navBar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const HomePage = () => {

    const isNonMobilescreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    return (
        <Box>
            <NavBar />
            <Box width="100%"
                padding="2rem 6%"
                display={isNonMobilescreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobilescreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>


                <Box
                    flexBasis={isNonMobilescreens ? "42%" : undefined}
                    mt={isNonMobilescreens ? undefined : "2rem"}
                >
                <MyPostWidget picturePath = {picturePath} />
                </Box>
                {isNonMobilescreens && (<Box flexBasis="26%"></Box>)}
            </Box>
        </Box>
    );
};

export default HomePage;