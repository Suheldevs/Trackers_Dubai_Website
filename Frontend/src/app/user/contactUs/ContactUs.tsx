import React from "react";
import { Box, Grid, Typography, Fade } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NavFooter from "@/utils/Na_Fo";
import { styles } from "./styles";
import { data, googleMapKey } from "./data";

const ContactUs = () => {
  return (
    <NavFooter footer={true}>
      {/* Background image section with full width */}
      <Box
        sx={{
          backgroundImage: `url('/contact_banner.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: { xs: 250, sm: 350, md: 400 },
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Typography data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
            variant="h2"
            sx={{
              ...styles.typography,
              margin: "5px",
              color: {
                xs: "black",
                md: "white",
              },
            }}
          >
            Contact Us
          </Typography>
          <Typography data-aos="fade-up"
    data-aos-offset="500"
    data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
            variant="h3"
            sx={{
              ...styles.typography2,
              mb: 2,
              color: "white ",
            }}
          >
            Get in touch with us
          </Typography>
        </Box>
      </Box>

      {/* Main content section with map and contact info */}
      <Box 
        sx={{
          backgroundColor: "#121212",
          minHeight: "100vh",
          pt: { xs: 6, md: 10 },
          pb: { xs: 2, md: 2 },
          px: { xs: 4, sm: 2, md: 10 },
          color: "#e0e0e0",
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          justifyContent="center"
          sx={{ maxWidth: 1100, mx: "auto" }}
        >
          {/* Map Section */}
          <Grid data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
            item
            xs={10}
            md={8}
            sx={{
              mb: { md: 0 },
              mt: { xs: 5, md: 10 },
              height: { xs: 260, sm: 350, md: 420 },
              borderRadius: 3,
              overflow: "hidden",
              ml: { xs: 0, md: -4 }, // 👈 Shift map to left on medium+ screens
            }}
          >
            <Fade in timeout={1100}>
              <iframe
                width="100%"
                height="100%"
                src={googleMapKey}
                allowFullScreen
                loading="lazy"
                style={{ border: 0, borderRadius: 12 }}
                title="Location Map"
              />
            </Fade>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={4}>
            <Fade in timeout={1300}>
              <Box data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {data.map((item, index) => (
                  <Box data-aos="fade-up"
    
                    key={index}
                    sx={{
                      ...styles.box2,
                      backgroundColor: "#1e1e1e",
                      p: 3,
                      borderRadius: 3,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Box  sx={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
                      <Box sx={{ mt: 0.5 }}>
                        {index === 0 || index === 1 ? (
                          <LocationOnIcon
                            sx={{ ...styles.icon, color: "#90caf9", fontSize: 30 }}
                          />
                        ) : index === 2 ? (
                          <AlternateEmailIcon
                            sx={{ ...styles.icon, color: "#90caf9", fontSize: 28 }}
                          />
                        ) : null}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            ...styles.typography3,
                            color: "#fff",
                            fontWeight: "bold",
                            mb: 0.5,
                          }}
                        >
                          {item.address1}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ ...styles.typography4, color: "#d0d0d0", mb: 0.3 }}
                        >
                          {item.address2}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ ...styles.typography4, color: "#d0d0d0", mb: 0.3 }}
                        >
                          {item.address3}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ ...styles.typography3, color: "#ccc" }}
                        >
                          {item.address4}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </NavFooter>
  );
};

export default ContactUs;
