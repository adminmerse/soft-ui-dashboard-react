/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";
import Transaction from "layouts/billing/components/Transaction";


function OrdersOverview() {
  return (
      <Card sx={{ height: "100%" }}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Last Run
          </SoftTypography>
          <SoftBox display="flex" alignItems="flex-start">
            <SoftBox color="text" mr={0.5} lineHeight={0}>
              <Icon color="inherit" fontSize="small">
                date_range
              </Icon>
            </SoftBox>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              12 Jan 2021, 5:45 AM
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox pt={3} pb={2} px={2}>
          <SoftBox mb={2}>
            <SoftTypography
              variant="caption"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Test Suites
            </SoftTypography>
          </SoftBox>
          <SoftBox
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
            sx={{ listStyle: "none" }}
          >
            <Transaction
              color="info"
              icon=""
              name="Login User"
              description="2 APIs"
              value="0 failed"
            />
            <Transaction
              color="info"
              icon=""
              name="Transaction Management"
              description="13 APIs"
              value="2 failed"
            />
          </SoftBox>
          <SoftBox
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
            sx={{ listStyle: "none" }}
          >
            <Transaction
              color="info"
              icon=""
              name="Portfolio"
              description="4 APIs"
              value="1 failed"
            />
            <Transaction
              color="info"
              icon=""
              name="Multiaccount flow"
              description="10 APIs"
              value="2 failed"
            />
          </SoftBox>
        </SoftBox>
      </Card>
    );
}

export default OrdersOverview;
