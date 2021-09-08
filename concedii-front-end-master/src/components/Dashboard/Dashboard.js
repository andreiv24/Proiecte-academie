import React from "react";
// import classes from "../../styles/Dashboard/Dashboard.module.css";
import classes from "../../sass/components/Dashboard/Dashboard.module.sass";

import DashboardList from "./DashboardList";
import DashboardProfile from "./DashboardProfile";
import DashboardAbsence from "./DashboardAbsence";
import AccountInfoCard from "../Account/AccountInfoCard";

import Icon from "../common/Icons/Icon";

import styled from "styled-components";
import umbrellaIcon from "../../img/svg/dashboard/vacantion-icon.svg";

const Arrow = styled.i`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  line-height: 0;
  cursor: pointer;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

//First controller
const Controller = styled.div`
  width: 100%;
  border-radius: 0px 0px 4px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.75rem;
  font-size: 0.8125rem;
  background-color: #8f69e1;
`;

const Dashboard = () => {
  //Dashboard absences contains 3 items (controllers)

  const dashboardProfileStyle = {
    padding: "0.5rem",
  };

  const FirstController = (
    <Controller
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      Show in calendar
    </Controller>
  );

  const SecondController = (
    <Controller style={{ backgroundColor: "#5d91d5" }}>
      <span>Show in calendar</span>
      <span>Show in reports</span>
    </Controller>
  );

  const ThirdController = (
    <Controller style={{ padding: "0 0.5rem" }}>
      <span>Please choose...</span>
      <Arrow />
    </Controller>
  );

  return (
    <main className={classes["dashboard-page-container"]}>
      <div className={classes["dashboard-container"]}>
        <h1 className={classes["dashboard-container__title"]}>
          Welcome Dima Mihai
        </h1>

        <div className={classes["dashboard-container__first-section"]}>
          <DashboardAbsence
            value="0"
            title="ABSENCE REQUESTS"
            controller={FirstController}
            props={{
              style: {},
            }}
          />

          <DashboardAbsence
            value="0"
            title="ABSENCE TODAY"
            controller={SecondController}
            props={{
              style: {
                backgroundColor: "#3475cb",
              },
            }}
          />

          <DashboardAbsence
            value="0"
            title="ABSENCE REQUESTS"
            controller={ThirdController}
            icon={umbrellaIcon}
            props={{
              style: {},
            }}
          />
        </div>

        <div className={classes["dashboard-container__second-section"]}>
          <div className={classes["dashboard-container__second-section-first"]}>
            <DashboardList
              title={"ABSENCE REQUESTS"}
              //NOT IMPLEMENTED
              // selectOptions={<option>Approval</option>}
              hasSeparator={true}
              // message={"No results found..."}
              isFirst={true}
              props={{}}
            >
              <DashboardProfile
                aditionalAvatarInfo={[
                  "Admin Name Surname",
                  "Vacantion",
                  "2 day",
                ]}
                name="Mihai Dima"
                firstInfo="Mon.11.10.2021"
                secondInfo="Fri.15.10.2021"
                props={{
                  style: dashboardProfileStyle,
                }}
              >
                <Icon
                  type="tick"
                  props={{
                    style: {
                      margin: "1rem",
                    },
                  }}
                />
                <Icon
                  type="cross"
                  props={{
                    style: {
                      marginRight: "1rem",
                    },
                  }}
                />
              </DashboardProfile>
            </DashboardList>

            <DashboardList
              title={"DELETE REQUESTS"}
              // message={"No results found..."}
              isFirst={true}
              props={{}}
            >
              <DashboardProfile
                aditionalAvatarInfo={[
                  "Admin Name Surname",
                  "Vacantion",
                  "2 day",
                ]}
                name="Mihai Dima"
                firstInfo="Mon.11.10.2021"
                secondInfo="Fri.15.10.2021"
                props={{
                  style: dashboardProfileStyle,
                }}
              >
                <Icon
                  type="tick"
                  props={{
                    style: {
                      margin: "1rem",
                    },
                  }}
                />
                <Icon
                  type="cross"
                  props={{
                    style: {
                      marginRight: "1rem",
                    },
                  }}
                />
              </DashboardProfile>
            </DashboardList>

            <DashboardList
              title={"TODAY'S ABSENCES"}
              // message={"No results found..."}
              isFirst={true}
              props={{}}
            >
              <DashboardProfile
                aditionalAvatarInfo={[
                  "Admin Name Surname",
                  "Vacantion",
                  "2 day",
                ]}
                name="Mihai Dima"
                firstInfo="Mon.11.10.2021"
                secondInfo="Fri.15.10.2021"
                props={{
                  style: dashboardProfileStyle,
                }}
              >
                <Icon
                  type="tick"
                  props={{
                    style: {
                      margin: "1rem",
                    },
                  }}
                />
                <Icon
                  type="cross"
                  props={{
                    style: {
                      marginRight: "1rem",
                    },
                  }}
                />
              </DashboardProfile>
            </DashboardList>

            <DashboardList
              title={"MISSING DOCUMENTATION"}
              // message={"No results found..."}
              isFirst={true}
              props={{}}
            >
              <DashboardProfile
                aditionalAvatarInfo={[
                  "Admin Name Surname",
                  "Vacantion",
                  "2 day",
                ]}
                name="Mihai Dima"
                firstInfo="Mon.11.10.2021"
                secondInfo="Fri.15.10.2021"
                props={{
                  style: dashboardProfileStyle,
                }}
              >
                <Icon
                  type="tick"
                  props={{
                    style: {
                      margin: "1rem",
                    },
                  }}
                />
                <Icon
                  type="mail"
                  props={{
                    style: {
                      marginRight: "1rem",
                    },
                  }}
                />
              </DashboardProfile>
              <DashboardProfile
                aditionalAvatarInfo={[
                  "Admin Name Surname",
                  "Vacantion",
                  "2 day",
                ]}
                name="Mihai Dima"
                firstInfo="Mon.11.10.2021"
                secondInfo="Fri.15.10.2021"
                props={{
                  style: dashboardProfileStyle,
                }}
              >
                <Icon
                  type="tick"
                  props={{
                    style: {
                      margin: "1rem",
                    },
                  }}
                />
                <Icon
                  type="mail"
                  props={{
                    style: {
                      marginRight: "1rem",
                    },
                  }}
                />
              </DashboardProfile>
            </DashboardList>
          </div>

          <div
            className={classes["dashboard-container__second-section-second"]}
          >
            <DashboardList
              title={"UPCOMING BIRTHDAYS"}
              isFirst={false}
              props={{
                style: {
                  marginLeft: "2rem",
                },
              }}
            >
              <DashboardProfile
                name="Mihai Dima"
                firstInfo="Mon.11.10.2021"
                props={{
                  style: dashboardProfileStyle,
                }}
              ></DashboardProfile>
            </DashboardList>

            <DashboardList
              title={"PENDING QUESTIONNAIRES"}
              isFirst={false}
              props={{
                style: {
                  marginLeft: "2rem",
                },
              }}
            >
              <DashboardProfile
                name="Mihai Dima"
                props={{
                  style: dashboardProfileStyle,
                }}
              ></DashboardProfile>
            </DashboardList>

            <DashboardList
              title={"VACANTION LEFT & RESIDUAL"}
              isFirst={false}
              props={{
                style: {
                  marginLeft: "2rem",
                },
              }}
            >
              <AccountInfoCard
                name="Dima Mihai"
                firstInfo="24"
                secondInfo="08.02.2021"
                props={{
                  style: {
                    margin: "0.9375rem 0.9375rem 1rem 1rem",
                  },
                }}
              />
            </DashboardList>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
