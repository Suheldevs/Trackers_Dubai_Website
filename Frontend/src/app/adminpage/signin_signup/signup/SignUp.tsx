"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { serverUrl } from "@/utils/helper";
import NavFooter from "@/utils/Na_Fo";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  city: string;
  area: string;
  zipcode: string;
  locality: string;
  address: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("firstName Name is required"),
  lastName: yup.string().required("lastName Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{8,}$/,
      "Password must contain at least one uppercase letter, one number, and one special character (!@#$%^&*)"
    )
    .required(),
  phoneNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000, "A phone number must be at least 10 digits")
    .required("A phone number is required"),
  city: yup.string().required("city Name is required"),
  area: yup.string().required("area Name is required"),
  zipcode: yup.string().required("zipcode Name is required"),
  locality: yup.string().required("locality Name is required"),
  address: yup.string().required("address Name is required"),
});
const serverAPI = "https://api.injazrent.ae";
const localAPI = "http://localhost:4000";

const SignUp: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (e: any) => {
    const values = getValues();
    let payload = { userName: "", ...values };

    payload.userName = values.firstName + " " + values.lastName;
    axios
      .post(serverUrl + "/user/signUp", {
        ...payload,
      })
      .then(() => {
        reset();
        router.push("/pages/login");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Sorry..",
          text: err.response.data.message,
        });
      });
  };

  return (
    <>
      <NavFooter />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 2, sm: 4 },
        }}
      >
        <Paper data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out"
          elevation={4}
          sx={{
          backgroundColor: "grey.100",
  boxShadow: "0px 2px 10px black", // red shadow
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 5 },
            borderRadius: 4,
            minWidth: { xs: "95vw", sm: 430 },
            maxWidth: 500,
            width: "100%",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              sx={{
                textAlign: "center",
                letterSpacing: 1,
                mb: 1,
              }}
            >
              Register
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: "100%" }}
              autoComplete="off"
            >
              <Stack spacing={2}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("firstName", { required: true })}
                      error={!!formState.errors?.firstName}
                      helperText={formState.errors?.firstName?.message}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("lastName", { required: true })}
                      error={!!formState.errors?.lastName}
                      helperText={formState.errors?.lastName?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("email", { required: true })}
                      error={!!formState.errors?.email}
                      helperText={formState.errors?.email?.message}
                    />
                  )}
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("phoneNumber", { required: true })}
                      error={!!formState.errors?.phoneNumber}
                      helperText={formState.errors?.phoneNumber?.message}
                    />
                  )}
                />
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Address"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("address", { required: true })}
                      error={!!formState.errors?.address}
                      helperText={formState.errors?.address?.message}
                    />
                  )}
                />
                <Controller
                  name="locality"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Locality"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("locality", { required: true })}
                      error={!!formState.errors?.locality}
                      helperText={formState.errors?.locality?.message}
                    />
                  )}
                />
                <Controller
                  name="area"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Area"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("area", { required: true })}
                      error={!!formState.errors?.area}
                      helperText={formState.errors?.area?.message}
                    />
                  )}
                />
                <Controller
                  name="zipcode"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Zipcode"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("zipcode", { required: true })}
                      error={!!formState.errors?.zipcode}
                      helperText={formState.errors?.zipcode?.message}
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="City"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("city", { required: true })}
                      error={!!formState.errors?.city}
                      helperText={formState.errors?.city?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      {...register("password", { required: true })}
                      error={!!formState.errors?.password}
                      helperText={formState.errors?.password?.message}
                    />
                  )}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  fullWidth
                >
                  Sign Up
                </Button>
               <Button
  sx={{
    mt: 1,
    backgroundColor: "success.main",
    color: "white",
    borderColor: "success.main",
    "&:hover": {
      backgroundColor: "success.dark",
      borderColor: "success.dark",
    },
  }}
  variant="outlined"
  size="large"
  color="success"
  fullWidth
  onClick={() => router.push("/pages/login")}
>
  Already have an Account?
</Button>

              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default SignUp;
