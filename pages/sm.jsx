import { makeStyles } from "@material-ui/core/styles";

import Header from "../src/ui/Common/Header";
import SideMenuDrawer from "../src/ui/Common/SideMenuDrawer";
import PageTitle from "../src/ui/Common/PageTitle";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Report() {
  const classes = useStyles();

  return (
    <>
      <PageTitle pageTitle="組織図" />
      <Header headerTitle="組織図" />
      <SideMenuDrawer />
      <main className={classes.content}>
        <h1 style={{ color: "black", margin: "60px 0 0 300px" }}>組織図 </h1>
      </main>
    </>
  );
}
