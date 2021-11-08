import { makeStyles } from "@material-ui/core/styles";

import Header from "../src/ui/Common/Header";
import SideMenuDrawer from "../src/ui/Common/SideMenuDrawer";
import PageTitle from "../src/ui/Common/PageTitle";

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
      <PageTitle pageTitle="クリップ" />
      <Header headerTitle="クリップ" />
      <SideMenuDrawer />
      <main className={classes.content}>
        <h1 style={{ color: "black", margin: "60px 0 0 300px" }}>クリップ</h1>
      </main>
    </>
  );
}
