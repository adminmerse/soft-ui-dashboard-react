// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "time", align: "left" },
      { name: "commits", align: "left" },
      { name: "API", align: "center", title:"API Covered"},
      { name: "risk", align: "center" },
    ],

    rows: [
      {
        time: [logoXD, "5 hours ago"],
        commits: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </SoftBox>
        ),
        API: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            24
          </SoftTypography>
        ),
        risk: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={90} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        time: [logoXD, "24 hours ago"],
        commits: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </SoftBox>
        ),
        API: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            27
          </SoftTypography>
        ),
        risk: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={50} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        time: [logoXD, "2 days ago"],
        commits: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </SoftBox>
        ),
        API: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            27
          </SoftTypography>
        ),
        risk: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={10} color="error" variant="gradient" label={false} />
          </SoftBox>
        ),
      }
    ],
  };
}
