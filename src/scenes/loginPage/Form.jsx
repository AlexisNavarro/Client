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

    const register = async (values, onSubmitProps) =>{
        //allows to send form info with image
        const formData = new FormData();
    }
}

const handleFormSubmit = async (values, onSubmitProps) => {
    if(isLogin) await login(values, onSubmitProps);
    if(isRegister) await registerSchema(values, onSubmitProps);
 }

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
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastname"
                                error={Boolean(touched.lastName) && Boolean(errors.lastName)} /*check if it has been touched or has an error */
                                helperText={touched.lastName && errors.lastName} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
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
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                label="Occupation"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.occupation}
                                name="lastname"
                                error={Boolean(touched.occupation) && Boolean(errors.occupation)} /*check if it has been touched or has an error */
                                helperText={touched.occupation && errors.occupation} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
                                sx={{ gridColumn: "span 4" }}
                            />

                            <Box
                                gridColumn="span 4"
                                border={`1px solid ${palette.neutral.medium}`}
                                borderRadius="5px"
                                p="1rem"
                            >
                                <Dropzone
                                    acceptedFiles=".jpg, jpeg, .png"
                                    multiple={false}
                                    onDrop={(acceptedFiles) =>
                                        setFieldValue("picture", acceptedFiles[0])
                                    }
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <Box
                                            {...getRootProps()}
                                            border={`2px dashed ${palette.primary.main}`}
                                            p="1rem"
                                            sx={{ "&:hover": { cursor: "pointer" } }}
                                        >
                                            <input {...getInputProps()} />
                                            {!values.picture ? (
                                                <p>Add Picture Here</p>
                                            ) : (
                                                <FlexBetween>
                                                    <Typography> {values.picture.name} </Typography>
                                                    <EditOutlinedIcone />
                                                </FlexBetween>
                                            )}
                                        </Box>
                                    )}
                                </Dropzone>
                            </Box>

                        </>
                    )}

                    <TextField
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="lastname"
                        error={Boolean(touched.email) && Boolean(errors.email)} /*check if it has been touched or has an error */
                        helperText={touched.email && errors.email} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
                        sx={{ gridColumn: "span 4" }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="lastname"
                        error={Boolean(touched.password) && Boolean(errors.password)} /*check if it has been touched or has an error */
                        helperText={touched.password && errors.password} /*if it has been touched but we have an error, we will show the error or if touched show if it was touched*/
                        sx={{ gridColumn: "span 4" }}
                    />
                </Box>

                {/* BUTTONS */}

                <Box>
                    <Button
                        fullWidth
                        type="submit"
                        sx={{
                            m: "2rem 0",
                            p: "1rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": { color: palette.primary.main }
                        }}
                    >
                        {isLogin ? "LOGIN" : "REGISTER"}
                    </Button>
                    <Typography
                        onClick={() => {
                            setPageType(isLogin ? "register" : "login")
                            resetForm();
                        }}
                        sx={{
                            textDecoration: "underline",
                            color: palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                color: palette.primary.light,
                            },
                        }}
                    >
                        {isLogin ? "Don't have an account? sign up here." : "Already have an account? Login here."}

                    </Typography>
                </Box>
            </form>
        )}

    </Formik>
)