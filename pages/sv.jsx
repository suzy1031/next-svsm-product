import { makeStyles } from "@material-ui/core/styles";

import Header from "../src/ui/Common/Header";
import SideMenuDrawer from "../src/ui/Common/SideMenuDrawer";
import PageTitle from "../src/ui/Common/PageTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SvAreaOrganization = () => {
  const classes = useStyles();

  return (
    <>
      <PageTitle pageTitle="組織図（SV）" />
      <Header headerTitle="組織図（SV）" />
      <SideMenuDrawer />
      <main className={classes.content}>
        <h1 style={{ color: "black", margin: "60px 0 0 300px" }}>
          組織図（SV）
        </h1>
      </main>
    </>
  );
};
export default SvAreaOrganization;
