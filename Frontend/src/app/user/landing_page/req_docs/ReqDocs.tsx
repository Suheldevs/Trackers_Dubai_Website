// import React from "react";
// // import "../req_docs/reqdocs.css";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Chip,
//   Stack
// } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";
// import Image from "next/image";
// import UAEImg from "../../../../../public/uae card.webp";
// import touristImg from "../../../../../public/uae card 1.webp";
// import Link from "next/link";

// const ReqDocs = () => {
//   const leftCard = [
//     "UAE Driving License",
//     "Emirates ID (Residential Visa may be acceptable)",
//   ];

//   const rightCard = [
//     "Passport",
//     "Visit Visa",
//     "Home Country Driving License",
//     "International Driving Permit (IDP)",
//   ];

//   // Reusable document bullet list
//   const renderDocs = (docs) => (
//     <Stack spacing={1} mt={2} alignItems="center">
//       {docs.map((doc, index) => (
//         <Chip
//           key={index}
//           icon={<CircleIcon sx={{ fontSize: "0.5rem", color: "#01437d" }} />}
//           label={doc}
//           sx={{
//             backgroundColor: "#f9f9f9",
//             fontSize: "0.9rem",
//             fontWeight: 500,
//             "& .MuiChip-label": { padding: "4px 8px" },
//           }}
//         />
//       ))}
//     </Stack>
//   );

//   return (
//     <section className="required_documents" style={{ padding: "60px 0" }}>
//       <Container maxWidth="xl">
        
//         {/* ----- Heading ----- */}
//         <Typography
//           variant="h4"
//           sx={{
//             color: "#01437d",
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 2,
//           }}
//         >
//           <Link
//             href="https://www.moec.gov.ae/en/-/renting-a-car"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#01437d", textDecoration: "none" }}
//           >
//             Documents Required
//           </Link>{" "}
//           for Car Rental in the UAE
//         </Typography>

//         {/* ----- Paragraph ----- */}
//         <Typography
//           variant="body1"
//           sx={{
//             maxWidth: 900,
//             margin: "auto",
//             textAlign: "center",
//             color: "#555",
//             lineHeight: 1.7,
//           }}
//         >
//           For travelers{" "}
//           <Link
//             href="https://u.ae/en/information-and-services/visiting-and-exploring-the-uae/what-to-do-in-the-uae/explore-the-uae-by-emirate-"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#01437d", textDecoration: "none" }}
//           >
//             exploring the UAE
//           </Link>
//           , you will discover that its major attractions are scattered across vast distances.
//           From iconic shopping havens like the Mall of the Emirates to revered landmarks such as the{" "}
//           <Link
//             href="https://www.szgmc.gov.ae/"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#01437d", textDecoration: "none" }}
//           >
//             Sheikh Zayed Grand Mosque
//           </Link>{" "}
//           in Abu Dhabi, and luxurious accommodations nestled in Abu Dhabi & Dubai,
//           a car offers the ultimate freedom of mobility. To rent a car across the emirates,
//           ensure you have the following valid documents at hand:
//         </Typography>

//         {/* ----- Cards Section ----- */}
//         <Grid container spacing={4} sx={{ mt: 0 }}>
          
//           {/* UAE Residents */}
//           <Grid item xs={12} md={6}>
//             <Card
//               elevation={4}
//               sx={{
//                 height: "100%",
//                 borderRadius: "14px",
//                 overflow: "hidden",
//                 textAlign: "center",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: 8,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: 600,
//                     color: "#01437d",
//                     mb: 2,
//                   }}
//                 >
//                   For UAE Residents
//                 </Typography>

//                 <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//                   <Image
//                     src={UAEImg}
//                     alt="UAE Residents"
//                     loading="lazy"
//                     style={{
//                       width: "200px",
//                       height: "150px",
//                       borderRadius: "8px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>

//                 {renderDocs(leftCard)}
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Tourists */}
//           <Grid item xs={12} md={6}>
//             <Card
//               elevation={4}
//               sx={{
//                 height: "100%",
//                 borderRadius: "14px",
//                 overflow: "hidden",
//                 textAlign: "center",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: 8,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: 600,
//                     color: "#01437d",
//                     mb: 2,
//                   }}
//                 >
//                   For Tourists visiting the UAE
//                 </Typography>

//                 <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//                   <Image
//                     src={touristImg}
//                     alt="Tourists visiting UAE"
//                     loading="lazy"
//                     style={{
//                       width: "200px",
//                       height: "150px",
//                       borderRadius: "8px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>

//                 {renderDocs(rightCard)}
//               </CardContent>
//             </Card>
//           </Grid>

//         </Grid>
//       </Container>
//     </section>
//   );
// };

// export default ReqDocs;


import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Paper,
  IconButton
} from "@mui/material";
import {
  Description as DocumentIcon,
  LocationOn as LocationIcon,
  Flight as TouristIcon,
  Home as ResidentIcon,
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";

const ReqDocs = () => {
  const leftCard = [
    "UAE Driving License",
    "Emirates ID (Residential Visa may be acceptable)",
  ];

  const rightCard = [
    "Passport",
    "Visit Visa", 
    "Home Country Driving License",
    "International Driving Permit (IDP)",
  ];

  // Enhanced document renderer with modern styling
  const renderDocs = (docs: string[], cardType: string) => (
  <Stack spacing={2} mt={3}>
    {docs.map((doc: string, index: number) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            p: 2,
            backgroundColor: cardType === 'resident' ? 'rgba(1, 67, 125, 0.05)' : 'rgba(255, 107, 107, 0.05)',
            border: `1px solid ${cardType === 'resident' ? 'rgba(1, 67, 125, 0.1)' : 'rgba(255, 107, 107, 0.1)'}`,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: cardType === 'resident' ? 'rgba(1, 67, 125, 0.08)' : 'rgba(255, 107, 107, 0.08)',
              transform: 'translateX(4px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }
          }}
        >
          <CheckIcon 
            sx={{ 
              color: cardType === 'resident' ? '#01437d' : '#ff6b6b',
              fontSize: '1.2rem'
            }} 
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: '#2c3e50',
              fontSize: '0.95rem'
            }}
          >
            {doc}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          background: 'linear-gradient(45deg, rgba(1, 67, 125, 0.05), rgba(255, 107, 107, 0.05))',
          borderRadius: '50%',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          background: 'linear-gradient(225deg, rgba(1, 67, 125, 0.03), rgba(255, 107, 107, 0.03))',
          borderRadius: '50%',
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Box 
            sx={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(1, 67, 125, 0.1)',
              px: 3,
              py: 1,
              borderRadius: '50px',
              mb: 3
            }}
          >
            <DocumentIcon sx={{ color: '#01437d', fontSize: '1.2rem' }} />
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#01437d', 
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              Documentation Guide
            </Typography>
          </Box>

          <Typography data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
            variant="h3"
            sx={{
              color: '#1a202c',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
              lineHeight: 1.2
            }}
          >
            Documents Required for{' '}
            <Box component="span" sx={{ color: '#01437d', position: 'relative' }}>
              Car Rental
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '100%',
                  height: 3,
                  background: 'linear-gradient(90deg, #01437d, #ff6b6b)',
                  borderRadius: '2px'
                }}
              />
            </Box>
            {' '}in the UAE
          </Typography>

          <Typography data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
            variant="h6"
            sx={{
              maxWidth: 800,
              margin: 'auto',
              color: '#4a5568',
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Experience the freedom to explore the UAE&apos;s magnificent attractions, 
            from Dubai&apos;s iconic landmarks to Abu Dhabi&apos;s cultural treasures. 
            Ensure you have the right documents for a seamless rental experience.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          
          {/* UAE Residents Card */}
          <Grid data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" item xs={12} lg={6}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(1, 67, 125, 0.02) 100%)',
                border: '1px solid rgba(1, 67, 125, 0.1)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(1, 67, 125, 0.15)',
                  '& .card-icon': {
                    transform: 'scale(1.1) rotate(5deg)'
                  }
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Card Header */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mb: 3 
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      className="card-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #01437d, #0066cc)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <ResidentIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#01437d',
                          fontSize: '1.4rem',
                          mb: 0.5
                        }}
                      >
                        UAE Residents
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#718096',
                          fontSize: '0.9rem'
                        }}
                      >
                        Living in the Emirates
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(1, 67, 125, 0.1)',
                      '&:hover': { backgroundColor: 'rgba(1, 67, 125, 0.2)' }
                    }}
                  >
                    <ArrowIcon sx={{ color: '#01437d' }} />
                  </IconButton>
                </Box>

                {/* Decorative UAE Flag Colors */}
                <Box
                  sx={{
                    height: 4,
                    background: 'linear-gradient(90deg, #00732f, #ffffff, #000000, #ce1126)',
                    borderRadius: '2px',
                    mb: 3
                  }}
                />

                {renderDocs(leftCard, 'resident')}
              </CardContent>
            </Card>
          </Grid>

          {/* Tourists Card */}
          <Grid data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" item xs={12} lg={6}>
            <Card 
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 107, 107, 0.02) 100%)',
                border: '1px solid rgba(255, 107, 107, 0.1)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(255, 107, 107, 0.15)',
                  '& .card-icon': {
                    transform: 'scale(1.1) rotate(-5deg)'
                  }
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Card Header */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mb: 3 
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      className="card-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #ff6b6b, #ff5252)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <TouristIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#ff6b6b',
                          fontSize: '1.4rem',
                          mb: 0.5
                        }}
                      >
                        Tourists & Visitors
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#718096',
                          fontSize: '0.9rem'
                        }}
                      >
                        Exploring the UAE
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(255, 107, 107, 0.1)',
                      '&:hover': { backgroundColor: 'rgba(255, 107, 107, 0.2)' }
                    }}
                  >
                    <ArrowIcon sx={{ color: '#ff6b6b' }} />
                  </IconButton>
                </Box>

                {/* Decorative Travel Element */}
                <Box
                  sx={{
                    height: 4,
                    background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f)',
                    borderRadius: '2px',
                    mb: 3
                  }}
                />

                {renderDocs(rightCard, 'tourist')}
              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default ReqDocs;