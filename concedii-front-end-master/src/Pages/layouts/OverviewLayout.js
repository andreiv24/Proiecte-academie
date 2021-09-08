import React from "react";
import Overview from "../../components/Overview/Overview";
import Header from "../../components/layout/Page/Header";
import Footer from "../../components/layout/Page/Footer";
// import classes from "../styles/OverviewLayout.module.css";
import ListCard from "../../components/Overview/ListCard";
// import Overview from "../../components/Overview/Overview";
import TableCard from "../../components/Overview/TableCard";

const OverviewLayout = () => {
  const itemsName = [
    {
      label: "Salutation",
      data: "",
      doc: false,
    },
    {
      label: "Title",
      data: "",
      doc: false,
    },
    {
      label: "First Name",
      data: "Name",
      doc: false,
    },
    {
      label: "Last Name",
      data: "Username",
      doc: false,
    },
    {
      label: "Documents",
      data: "",
      doc: false,
    },
  ];

  const itemsAddress = [
    {
      label: "Street",
      data: "",
      doc: false,
    },
    {
      label: "Postal Code",
      data: "",
      doc: false,
    },
    {
      label: "City",
      data: "",
      doc: false,
    },
    {
      label: "Country",
      data: "",
      doc: false,
    },
    {
      label: "Documents",
      data: "",
      doc: false,
    },
  ];

  const itemsContact = [
    {
      label: "Email (Work)",
      data: "",
      doc: false,
    },
    {
      label: "Phone (Work)",
      data: "",
      doc: false,
    },
    {
      label: "Phone (Mobile)",
      data: "",
      doc: false,
    },
    {
      label: "Email (Private)",
      data: "",
      doc: false,
    },
    {
      label: "Phone (Private)",
      data: "",
      doc: false,
    },
    {
      label: "Documents",
      data: "",
      doc: true,
    },
  ];

  const itemsOther = [
    {
      label: "Gender",
      data: "",
      doc: false,
    },
    {
      label: "Date of Birth",
      data: "",
      doc: false,
    },
    {
      label: "Nationality",
      data: "",
      doc: false,
    },
    {
      label: "Nationality 2",
      data: "",
      doc: false,
    },
    {
      label: "Marital Status",
      data: "",
      doc: false,
    },
    {
      label: "Confession",
      data: "",
      doc: false,
    },
    {
      label: "Qualification",
      data: "",
      doc: true,
    },
  ];

  const itemsGeneral = [
    {
      label: "Subsidiary",
      data: "",
      doc: false,
    },
    {
      label: "Position",
      data: "",
      doc: false,
    },
    {
      label: "Employee Number",
      data: "",
      doc: true,
    },
  ];

  const itemsContract = [
    {
      label: "Status",
      data: "Active",
      doc: true,
    },
    {
      label: "Start Date",
      data: "",
      doc: false,
    },
    {
      label: "End Date",
      data: "",
      doc: false,
    },
    {
      label: "Duration of Probation",
      data: "",
      doc: false,
    },
    {
      label: "Cost Center",
      data: "",
      doc: false,
    },
    {
      label: "Supervisor",
      data: "",
      doc: false,
    },
    {
      label: "Hours (Weekly)",
      data: "",
      doc: false,
    },
    {
      label: "Salary",
      data: "",
      doc: true,
    },
  ];

  const emergencyHeader = [
    {
      label: "Name",
      mr: 8.75,
    },
    {
      label: "Phone Number",
      mr: 8.75,
    },
    {
      label: "Documents",
      mr: 0,
    },
  ];

  const salaryHeader = [
    {
      label: "Start",
      mr: 3.5,
    },
    {
      label: "End",
      mr: 3.5,
    },
    {
      label: "Gross Salary",
      mr: 3.5,
    },
    {
      label: "Salary Type",
      mr: 3.5,
    },
    {
      label: "Hours (Weekly)",
      mr: 3.5,
    },
    {
      label: "Notes",
      mr: 3.5,
    },
    {
      label: "Documents",
      mr: 0,
    },
  ];

  const salaryHeader2 = [
    {
      label: "Date",
      mr: 4.5,
    },
    {
      label: "Amount",
      mr: 4.5,
    },
    {
      label: "Type",
      mr: 4.5,
    },
    {
      label: "Text",
      mr: 4.5,
    },
    {
      label: "Documents",
      mr: 0,
    },
  ];

  const salaryHeader3 = [
    {
      label: "Start",
      mr: 4.5,
    },
    {
      label: "End",
      mr: 4.5,
    },
    {
      label: "Type",
      mr: 4.5,
    },
    {
      label: "Amount",
      mr: 4.5,
    },
    {
      label: "Text",
      mr: 4.5,
    },
    {
      label: "Documents",
      mr: 0,
    },
  ];

  const emergencyData = [
    {
      name: "Testul Test",
      pNumber: "0712345678",
      doc: false,
    },
    {
      name: "Testul Test 2",
      pNumber: "0798765432",
      doc: true,
    },
    {
      name: "Testul Test 2",
      pNumber: "0798765432",
      doc: false,
    },
  ];

  // const salaryData1 = [];

  // const salaryData2 = [];

  // const salaryData3 = [];

  return (
    <>
      <Header />
      <Overview title={"Overview"}>
        <ListCard
          title={"Name"}
          items={itemsName}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <ListCard
          title={"Address"}
          items={itemsAddress}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <ListCard
          title={"Contact"}
          items={itemsContact}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <ListCard
          title={"Other"}
          items={itemsOther}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <TableCard
          title={"Emergency Contacts"}
          btnLabel={"New Entry"}
          btnId={"new"}
          tHeader={emergencyHeader}
          emergencyData={emergencyData}
        />
      </Overview>
      <Overview title={"Contract Information"}>
        <ListCard
          title={"General"}
          items={itemsGeneral}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <ListCard
          title={"Contract / Status"}
          items={itemsContract}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <ListCard
          title={"Payroll"}
          items={itemsContact}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
        <ListCard
          title={"Bank Details"}
          items={itemsOther}
          btnLabel={"Edit"}
          btnId={"edit"}
        />
      </Overview>
      <Overview title={"REMUNERATION & BENEFITS"}>
        <TableCard
          title={"Salary/Wages"}
          btnLabel={"New Entry"}
          btnId={"new"}
          tHeader={salaryHeader}
        />{" "}
        {/*salaryData1={salaryData1}*/}
        <TableCard
          title={"Salary/Wages"}
          btnLabel={"New Entry"}
          btnId={"new"}
          tHeader={salaryHeader2}
        />
        <TableCard
          title={"Salary/Wages"}
          btnLabel={"New Entry"}
          btnId={"new"}
          tHeader={salaryHeader3}
        />
      </Overview>
      <Footer />
    </>
  );
};

export default OverviewLayout;
