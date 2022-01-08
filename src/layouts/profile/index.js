/* eslint-disable */
import { cloneElement } from "react"
import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useAuthContext } from "context/auth"

function Overview() {


  const [controller] = useAuthContext();
  const { user, role } = controller;
  console.log(role)
  const showRole = (role) => {
    if(role == "Doctor") {
      return "Dr.";
    }

    return '';
  }

  const doctorActions = [
    {
      text: "View Appointment History",
      link: "/doctor/appointments"
    }
  ]

  const nurseActions = [
    {
      text: "Add Patient's Vital Signs",
      link: "/patients/add"
    }
  ]

  const staffActions = [
    {
      text: "Schedule Appointment",
      link: "/patients/add"
    }
  ]

  const renderAction = (role) => {
    if(role === "Doctor") {
      doctorActions.map(({ text, link }) => (
        <ListItem>
          <ListItemText>
            <MDTypography
              component={Link}
              to={link}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              {text}
            </MDTypography>
          </ListItemText>
        </ListItem>
        
      ));
    } else if(role === "Nurse") {
      nurseActions.map(({ text, link }) => (
        <ListItem>
          <ListItemText>
            <MDTypography
              component={Link}
              to={link}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              {text}
            </MDTypography>
          </ListItemText>
        </ListItem>
      ));
    } else {
      staffActions.map(({ text, link }) => (
        <ListItem>
          <ListItemText>
            <MDTypography
              component={Link}
              to={link}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              {text}
            </MDTypography>
          </ListItemText>
        </ListItem>
      ));
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />

              <ProfileInfoCard
                title="profile information"
                description="Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."

                info={{
                  fullName: `${showRole(role)} ${user.firstname} ${user.lastname}`,
                  email: `${user.email}`,
                  username: `${user.username}`,
                  gender: `${user.gender}`,
                  speciality: 'None' ?? `${user.speciality}`
                }}
                social={[
                  {
                    link: "https://www.facebook.com/daniel.okoronkwo.52/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/@varsilias",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/_danielokoronkwo/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                // action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <List>
                <ListItem>
                  <ListItemText>
                    <MDTypography
                      component={Link}
                      to="/patients"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      action
                    </MDTypography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>

          </Grid>
        </MDBox>
        {/* <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox> */}

        {/* <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox> */}
      </Header>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
