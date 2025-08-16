import React from "react";
import { Box, Container, Typography, Grow, Link as MuiLink } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import NavFooter from "@/utils/Na_Fo";

// Updated color and animation-focused styles
const styles = {
  box: {
    marginTop: { xs: 3, sm: 4, md: 6 },
  },
  box2: {
    marginBottom: "1.5rem",
  },
  heading: {
    color: "#90caf9",
    fontWeight: 700,
    fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
    fontFamily: "sans-serif",
    mb: 1,
    letterSpacing: ".5px",
  },
  subheading: {
    color: "#fff",
    fontWeight: 600,
    fontSize: { xs: "1.1rem", sm: "1.2rem" },
    mb: 1,
    mt: 2,
  },
  mainText: {
    color: "#d0d4d7",
    fontSize: "1.15rem",
    fontWeight: 400,
    fontFamily: "sans-serif",
    lineHeight: 1.8,
    textAlign: "justify",
    mb: 2,
  },
  blueLink: {
    color: "#90caf9",
    fontWeight: 500,
    "&:hover": {
      color: "#64b5f6",
      textDecoration: "underline",
    },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    color: "#bbb",
    fontSize: "1.08rem",
    mb: 1.1,
    mt: 0,
    ml: 1,
  },
  icon: {
    marginRight: "1.2rem",
    color: "#90caf9",
    minWidth: "24px",
  },
};

const AboutUs = () => {
  const coreValues = [
    {
      heading: "1. Customer Satisfaction:",
      points: [
        "Flexibility and competitive pricing.",
        "Dedicated specialists for long-term lease plans.",
      ],
    },
    {
      heading: "2. Safety & Maintenance:",
      points: [
        "Regular safety checks and meticulous vehicle maintenance to ensure client peace of mind.",
      ],
    },
    {
      heading: "3. Diverse Fleet:",
      points: [
        "A broad selection of vehicles to accommodate individual preferences and corporate requirements.",
      ],
    },
  ];

  const ourFleet = [
    { text: "Hatchback Cars", route: "HATCHBACK" },
    { text: "Sedan Cars", route: "SEDAN" },
    { text: "Compact Cars", route: "COMPACT" },
    { text: "SUV Cars", route: "SUV" },
    { text: "Luxury Cars", route: "LUXURY" },
    { text: "Crossover Cars", route: "CROSSOVER" },
    { text: "Economy Cars", route: "ECONOMY" },
  ];

  const ourVision = [
    "To be the go-to car rental service in the UAE by delivering trust, quality, and flexibility, backed by a diverse fleet and exceptional customer care.",
    "Whether you're seeking a budget-friendly ride for personal use or a luxury vehicle for business needs, INJAZ Rental Cars guarantees a seamless and reliable experience.",
    <>
      Drive with Confidence. Rent with
      <MuiLink component={Link} href="/" sx={styles.blueLink}>
        {" "}INJAZ
      </MuiLink>{" "}
      Website!
    </>,
  ];

  const whyChoose = [
    {
      point: "Wide Selection:",
      content: "Access to a vast and versatile fleet of vehicles.",
    },
    {
      point: "Flexibility:",
      content: "Customized rental plans to suit individuals and businesses.",
    },
    {
      point: "Reliability:",
      content: "A strong focus on vehicle maintenance and customer satisfaction.",
    },
    {
      point: "Competitive Pricing:",
      content: "Affordable rates without compromising on quality.",
    },
  ];

  const whyChoosePara = [
    "Whether you need a dependable car for a day, a month, or longer, or you're seeking premium vehicles for your business operations, INJAZ Rental Cars is your trusted partner.",
    "Experience convenience, quality, and value with INJAZ—your ultimate car rental solution in the UAE!",
  ];

  const mobility = [
    "At INJAZ Rental Cars, your peace of mind is our priority. With a focus on delivering exceptional value, quality service, and unmatched flexibility, we strive to be your trusted partner in car rentals, whether for personal use or business operations.",
    "Let INJAZ Rental Cars take the wheel—experience reliable, affordable, and customer-focused car rental services today!",
  ];

  return (
    <NavFooter footer>
      <Box sx={{ background: "white", minHeight: "100vh", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <Grow in timeout={700}>
            <Box>
              <Typography variant="h1" sx={{ ...styles.heading, color: 'darkblue' }} gutterBottom>
  About INJAZ RENT A CAR
</Typography>

              <Typography sx={{styles, color: 'darkblue'}}>
                <MuiLink component={Link} href="/" sx={{ ...styles, color: 'darkblue' }}>
                  INJAZ RENTAL CARS
                </MuiLink>{" "}
                premier car rental service in United Arab Emirates started Rent A Car business in 2016 based in Abu Dhabi, catering to both individuals and corporate clients with flexible{" "}
                <MuiLink component={Link} href="/pages/carWithLocation/?daily=daily" sx={{ ...styles, color: 'darkblue' }}>
                  SHORT-TERM
                </MuiLink>{" "}
                and{" "}
                <MuiLink component={Link} href="/pages/carWithLocation/?monthly=monthly" sx={{ ...styles, color: 'darkblue' }}>
                  LONG-TERM
                </MuiLink>{" "}
                rental plans. With a fleet exceeding 70 models spanning 1000+ car brands, we provide a wide variety of vehicles, including{" "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=ECONOMY" sx={{ ...styles, color: 'darkblue' }}>ECONOMY</MuiLink>
                {", "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=HATCHBACK" sx={{ ...styles, color: 'darkblue' }}>HATCHBACK</MuiLink>
                {", "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=SUV" sx={{ ...styles, color: 'darkblue' }}>SUV</MuiLink>
                {", "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=SEDAN" sx={{ ...styles, color: 'darkblue' }}>SEDAN</MuiLink>
                {", "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=COMPACT" sx={{ ...styles, color: 'darkblue' }}>COMPACT</MuiLink>
                {", "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=LUXURY" sx={{ ...styles, color: 'darkblue' }}>LUXURY</MuiLink>
                {", "}
                <MuiLink component={Link} href="/pages/carWithLocation/?category=CROSSOVER" sx={{ ...styles, color: 'darkblue' }}>CROSSOVER</MuiLink>
                {" "}cars tailored to meet diverse client needs.
              </Typography>
            </Box>
          </Grow>

          {/* Core Values */}
          <Grow in timeout={1000}>
            <Box sx={styles.box}>
              <Typography variant="h2" sx={{ ...styles.heading, color: 'darkblue' }}>Our Core Values</Typography>
              {coreValues.map((item, i) => (
                <Box key={i} sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ ...styles.subheading, color: 'black'}}>{item.heading}</Typography>
                  {item.points.map((point, idx) => (
                    <Box key={idx} sx={{ ...styles.listItem, color: 'black' }}>
                      <ArrowRightAltIcon sx={{ ...styles.icon, color: 'blue'}} />
                      <span>{point}</span>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Grow>

          {/* Our Fleet */}
          <Grow in timeout={1300}>
            <Box sx={styles.box}>
              <Typography variant="h2" sx={{ ...styles.heading, color: 'darkblue'}}>Our Fleet</Typography>
              <Typography sx={{ ...styles.mainText, color: 'black'}}>
                With a fleet featuring over 70 vehicle models from 1,000+ global car brands, we provide an extensive range of options, including:
              </Typography>
              <Box sx={{ mt: 1, mb: 2 }}>
                {ourFleet.map((item, idx) => (
                  <Box sx={styles.listItem } key={idx}>
                    <ArrowRightAltIcon sx={{ ...styles.icon, color: 'blue'}} />
                    <MuiLink
                      component={Link}
                      href={`/pages/carWithLocation/?category=${item.route}`}
                      sx={styles.blue}
                    >
                      {item.text}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
              <Typography sx={{ ...styles.mainText, color: 'black'}}>
                This diversity ensures we can meet the unique needs of every client, from practical everyday rentals to premium luxury experiences.
              </Typography>
            </Box>
          </Grow>

          {/* Our Vision */}
          <Grow in timeout={1600}>
            <Box sx={styles.box}>
              <Typography variant="h2" sx={{ ...styles.heading, color:'darkblue'}}>Our Vision</Typography>
              {ourVision.map((item, i) => (
                <Typography key={i} sx={{ ...styles.mainText, color: 'black'}}>{item}</Typography>
              ))}
            </Box>
          </Grow>

          {/* Our Mission */}
          <Grow in timeout={1900}>
            <Box sx={styles.box}>
              <Typography variant="h2" sx={{ ...styles.heading, color: 'darkblue'}}>Our Mission</Typography>
              <Typography sx={{ ...styles.mainText, color:'black'}}>
                Our goal is to create a customer-centric environment where clients feel comfortable and valued. Whether you need a compact hatchback for daily commutes, a stylish sedan for business travel, or a robust SUV for off-road adventures, INJAZ Rental Cars ensures you get a vehicle that matches your needs while prioritizing safety and regular maintenance.
              </Typography>
            </Box>
          </Grow>

          {/* Why Choose Us */}
          <Grow in timeout={2200}>
            <Box sx={styles.box}>
              <Typography variant="h2" sx={{ ...styles.heading, color:'darkblue'}}>Why Choose INJAZ Rental Cars?</Typography>
              {whyChoose.map((item, i) => (
                <Box sx={{ ...styles.listItem, color:'black'}} key={i}>
                  <ArrowRightAltIcon sx={{ ...styles.icon, color:'blue'}} />
                  <strong>{item.point}</strong>&nbsp;{item.content}
                </Box>
              ))}
              {whyChoosePara.map((item, i) => (
                <Typography sx={{ ...styles.mainText, color:'black'}} key={i}>{item}</Typography>
              ))}
            </Box>
          </Grow>

          {/* Partner in Mobility */}
          <Grow in timeout={2500}>
            <Box sx={styles.box} mb={10}>
              <Typography variant="h2" sx={{ ...styles.heading, color:'darkblue'}}>Your Partner in Mobility</Typography>
              {mobility.map((item, i) => (
                <Typography sx={{ ...styles.mainText, color:'black'}} key={i}>{item}</Typography>
              ))}
            </Box>
          </Grow>
        </Container>
      </Box>
    </NavFooter>
  );
};

export default AboutUs;
