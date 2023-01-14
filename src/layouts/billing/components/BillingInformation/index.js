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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Test Runs
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="5 hours ago"
            company="32"
            email="0"
            vat="Low"
            bgcolor="success"
          />
          <Bill
            name="1 day ago"
            company="22"
            email="1"
            vat="Medium"
            bgcolor="warning"
          />
          <Bill
            name="36 hours ago"
            company="18"
            email="5"
            vat="High"
            bgcolor="error"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
