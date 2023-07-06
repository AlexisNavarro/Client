import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material"
import EditOutlinedIcone from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    location: yup.string().required("required"),
    occupation: yup.string().required("required"),
    picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
};

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
}

const handleFormSubmit = async (values, onSubmitProps) => { }

return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
    >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
        }) => (
            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))" /**  split the text forms into 4 sections */
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                    }}
                >
                    {isRegister && (
                        <>
                            <TextField
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstname}
                                name="firstName"
                                error={Boolean(touched.firstName) && Boolean(errors.firstName)} /*check if it has been touched or has an error */
                                helperText={touched.firstName && errors.firstName} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextField
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                name="lastname"
                                error={Boolean(touched.location) && Boolean(errors.location)} /*check if it has been touched or has an error */
                                helperText={touched.location && errors.location} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
                                sx={{ gridColumn: "span 2" }}
                            />

<TextField
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastname"
                                error={Boolean(touched.lastName) && Boolean(errors.lastName)} /*check if it has been touched or has an error */
                                helperText={touched.lastName && errors.lastName} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
                                sx={{ gridColumn: "span 2" }}
                            />

                        </>
                    )}
                </Box>
            </form>
        )}

    </Formik>
)