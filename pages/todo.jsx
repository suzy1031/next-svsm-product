import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Header from "../src/ui/Common/Header";
import SideMenuDrawer from "../src/ui/Common/SideMenuDrawer";
import PageTitle from "../src/ui/Common/PageTitle";
import SpCommonLayout from "../src/ui/Common/SpCommonLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Report() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <PageTitle pageTitle="ToDo" />
        <Header headerTitle="ToDo" />
        <SideMenuDrawer />
        <main className={classes.content}>
          <h1 style={{ color: "black", margin: "60px 0 0 300px" }}>ToDo</h1>
        </main>
      </Hidden>
      <Hidden smUp>
        <SpCommonLayout headerTitle="ToDo">
          <h2>ToDo</h2>
        </SpCommonLayout>
      </Hidden>
    </>
  );
}
