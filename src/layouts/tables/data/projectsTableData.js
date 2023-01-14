/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "type", align: "left" },
    { name: "Run", align: "left" },
    { name: "Priority", align: "left" },
    { name: "Risk", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      type: [logoSpotify, "Login"],
      Run: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          5 hours ago
        </SoftTypography>
      ),
      Priority: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          P0
        </SoftTypography>
      ),
      Risk: <Completion value={60} color="error" />,
      action,
    },
    {
      type: [logoSpotify, "Transaction"],
      Run: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          18 hours ago
        </SoftTypography>
      ),
      Priority: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          P0
        </SoftTypography>
      ),
      Risk: <Completion value={4} color="success" />,
      action,
    },
    {
      type: [logoSpotify, "Portfolio Management"],
      Run: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          12 hours ago
        </SoftTypography>
      ),
      Priority: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          P1
        </SoftTypography>
      ),
      Risk: <Completion value={40} color="info" />,
      action,
    },
    {
      type: [logoSpotify, "Multiaccount Management"],
      Run: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          1 day ago
        </SoftTypography>
      ),
      Priority: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          P2
        </SoftTypography>
      ),
      Risk: <Completion value={70} color="error" />,
      action,
    }
  ],
};

export default projectsTableData;
