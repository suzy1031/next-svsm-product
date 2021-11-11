import React, { useState, useEffect } from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { stores, initData, area, otherArea } from "../src/services/data";
import switchRole from "../src/libs/SwitchRole";

import Header from "../src/ui/Common/Header";
import SideMenuDrawer from "../src/ui/Common/SideMenuDrawer";
import PageTitle from "../src/ui/Common/PageTitle";
import StoreRadarChart from "../src/ui/Sv/StoreRadarChart";
import CheckButtonGroup from "../src/ui/Sv/CheckButtonGroup";
import AllAreaOrganization from "../src/ui/Sv/AllAreaOrganization";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mainColor: {
    background: "#17b397",
    "&:hover": {
      background: "#008080",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    marginLeft: 300,
  },

  formControl: {
    margin: theme.spacing(3),
  },
  title: {
    fontSize: 14,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  tagCircle: {
    height: 20,
    width: 20,
    borderRadius: "50%",
    margin: "16px 5px",
  },
  levelButton: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "20px",
    marginLeft: 3,
    color: "#FFF",
  },
  selectFormControl: {
    margin: theme.spacing(1),
    width: 200,
  },
}));

export default function Report() {
  const classes = useStyles();

  const [checked, setChecked] = useState({
    id_0: true,
    id_1: true,
    id_2: true,
  });
  const [areaStoreData, setAreaStoreData] = useState(stores);

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.id]: event.target.checked });
  };

  const [chartData, setChartData] = useState(initData);
  const [chartDataB, setChartDataB] = useState(initData);
  const [chartDataC, setChartDataC] = useState(initData);
  useEffect(() => {
    areaStoreData.map((store) => {
      if (store.storeName === "渋谷店") {
        setChartData(store.skills);
      }
      if (store.storeName === "原宿店") {
        setChartDataB(store.skills);
      }
      if (store.storeName === "新宿店") {
        setChartDataC(store.skills);
      }
      return {};
    });
  }, []);

  const [radioChecked, setRadioChecked] = useState("myArea");
  const handleAreaChange = (event) => {
    setRadioChecked(event.target.value);
  };

  const [myAreaData, setMyAreaData] = useState(area);
  const [otherAreaData, setOtherAreaData] = useState(otherArea);
  const [selected, setSelected] = useState("");
  const [targetData, setTargetData] = useState(null);
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
    const selectedValue = event.target.value;

    if (selectedValue) {
      otherAreaData.map((store) => {
        if (store.areaName === selectedValue) {
          setTargetData(store);
        }
        return {};
      });
    }
  };

  return (
    <>
      <PageTitle pageTitle="組織図（SV）" />
      <Header headerTitle="組織図（SV）" />
      <SideMenuDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ width: 400 }}
          >
            <Grid>
              <FormLabel component="legend">エリア選択</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={radioChecked}
                onChange={handleAreaChange}
                row
              >
                <FormControlLabel
                  value="myArea"
                  control={<Radio />}
                  label="自エリア"
                />
                <FormControlLabel
                  value="allArea"
                  control={<Radio />}
                  label="全エリア"
                />
              </RadioGroup>
            </Grid>
            {radioChecked === "myArea" ? (
              <CheckButtonGroup
                labelName="店舗選択"
                data={areaStoreData}
                handleChange={handleChange}
                checked={checked}
              />
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <FormControl
                  variant="outlined"
                  className={classes.selectFormControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    比較エリア
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selected}
                    onChange={handleSelectChange}
                    label="比較エリア"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {otherArea.map((store, index) => (
                      <MenuItem key={index} value={store.areaName}>
                        {store.areaName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}
          </Grid>
        </Grid>
        {radioChecked === "myArea" ? (
          <Grid container>
            <Grid item xs={5}>
              {areaStoreData.map((store, index) => (
                <React.Fragment key={index}>
                  {checked[`id_${index}`] && (
                    <React.Fragment>
                      <Box display="flex">
                        <div
                          className={classes.tagCircle}
                          style={store.style}
                        ></div>
                        <Link href="/sm">
                          <a>
                            <h3 id={`id_${index}`}>{store.storeName}</h3>
                          </a>
                        </Link>
                      </Box>
                      <Card
                        key={index}
                        className={classes.cardRoot}
                        variant="outlined"
                      >
                        <CardContent>
                          <Box
                            display="flex"
                            flexWrap="wrap"
                            sx={{ minWidth: 335 }}
                          >
                            {store.members.map((profile, index) => (
                              <Box mr={2} key={index}>
                                <div>{switchRole(profile.role)}</div>
                                <Button
                                  size="small"
                                  key={index}
                                  variant="outlined"
                                  onClick={() => console.log("click")}
                                >
                                  <Avatar
                                    alt={profile.staffName}
                                    src={profile.image}
                                    className={classes.small}
                                  />
                                  {profile.staffName}
                                </Button>
                              </Box>
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <StoreRadarChart
                  chartData={chartData}
                  chartDataB={chartDataB}
                  chartDataC={chartDataC}
                  checked={checked}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <AllAreaOrganization
            data={myAreaData}
            otherArea={otherAreaData}
            classes={classes}
            checked={checked}
            selected={selected}
            handleSelectChange={handleSelectChange}
            targetData={targetData}
          />
        )}
      </main>
    </>
  );
}
