import GamesList from "../components/GamesList/gamesList";
import GlobalStylesWrapper from "../components/GlobalStylesWrapper/GlobalStylesWrapper";
import Layout from "../components/Layout/layout";
import { SideMenuProvider } from "../context/sideMenuContext";
import fsPromises from "fs/promises";
import path from "path";

// Fetching data from the JSON file
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

const Index = (props) => {
  return (
    <GlobalStylesWrapper>
      <SideMenuProvider>
        <Layout gamesList={props.games}>
          <GamesList gamesList={props.games} />
        </Layout>
      </SideMenuProvider>
    </GlobalStylesWrapper>
  );
};
export default Index;
