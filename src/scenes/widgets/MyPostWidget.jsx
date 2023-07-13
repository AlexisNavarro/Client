import {
    EditOutlined,
    DeleteOutlined,
    AttachedFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
} from "@mui/icons-material";
import { Box, Divider, Typography, InputBase, useTheme, Button, IconButton, useMediaQuery } from "mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const MyPostWidget = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false); //represent the switch if someone clicks the image button to drop the image 
    const [image, setImage] = useState(null); //sets the image if its actually dropped in 
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobilescreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    const handlePost = async () => {
        const formData = new FormData(); //passing an image
        formData.append("userId", _id);
        formData.append("description", post);
        if (image) {
            formData.append("picture", image); //upload this image to the backend
            formData.append("picture", image.name);
        }

        const response = await fetch(`http://localhost:3001/posts`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        }); //send the post info to the backend

        const posts = await response.json();
        dispatch(setPosts({ posts })); //place the new posts into setposts (keep list of posts)
        setImage(null); //reset the state once the api call is made
        setPosts(""); //reset the state once the api call is made

    };//end handle post
};//end MyPostWidget

