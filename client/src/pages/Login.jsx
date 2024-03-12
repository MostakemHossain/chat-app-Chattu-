import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { usernameValidator } from "../utils/validator";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const name = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const bio = useInputValidation("");
    const password = useStrongPassword("");

    const avater = useFileHandler("single");

    const toggleLogin = () => setIsLogin((prev) => !prev);
    return <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyItems: "center"
    }}>
        <Paper
            elevation={3}
            sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >

            {
                isLogin ? (
                    <>
                        <Typography variant="h5">Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem"
                        }} >
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant="outlined"
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem"
                                }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >

                                Login
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button
                                variant="text"
                                fullWidth
                                onClick={toggleLogin}

                            >
                                Sign up

                            </Button>
                        </form>
                    </>
                ) : <>
                    <Typography variant="h5">Register</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem"
                    }} >

                        <Stack
                            position={"relative"}
                            width={"10rem"}
                            margin={"auto"}

                        >

                            <Avatar
                                sx={{
                                    width: "10rem",
                                    height: "10rem",
                                    objectFit: "contain"
                                }}
                                src={avater.preview}
                            />



                            <IconButton

                                sx={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0",
                                    color: "white",
                                    bgcolor: "rgba(0,0,0,0.5)",
                                    "hover": {
                                        "bgcolor": "rgba(0,0,0,0.7)"
                                    }
                                }}
                                component="label"

                            >
                                <>
                                    <CameraAlt />
                                    <VisuallyHiddenInput type="file"
                                        onChange={avater.changeHandler}
                                    />
                                </>
                            </IconButton>
                        </Stack>
                        {
                            avater.error && (
                                <Typography m={"1rem auto"}
                                    width={"fit-content"}
                                    display={"block"}
                                    color="error"
                                    variant="caption"
                                >{avater.error}</Typography>
                            )
                        }

                        <TextField
                            required
                            fullWidth
                            label="Name"
                            margin="normal"
                            variant="outlined"
                            value={name.value}
                            onChange={name.changeHandler}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Username"
                            margin="normal"
                            variant="outlined"
                            value={username.value}
                            onChange={username.changeHandler}
                        />
                        {
                            username.error && (
                                <Typography

                                    color="error"
                                    variant="caption"
                                >{username.error}</Typography>
                            )
                        }
                        <TextField
                            required
                            fullWidth
                            label="Bio"
                            margin="normal"
                            variant="outlined"
                            value={bio.value}
                            onChange={bio.changeHandler}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={password.value}
                            onChange={password.changeHandler}
                        />
                        {
                            password.error && (
                                <Typography

                                    color="error"
                                    variant="caption"
                                >{password.error}</Typography>
                            )
                        }
                        <Button
                            sx={{
                                marginTop: "1rem"
                            }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >

                            Sign up
                        </Button>
                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button
                            variant="text"
                            fullWidth
                            onClick={toggleLogin}

                        >
                            Login

                        </Button>
                    </form>
                </>
            }

        </Paper>

    </Container >
}

export default Login