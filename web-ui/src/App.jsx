import { Tabs } from "@base-ui-components/react/tabs";
import styles from "./index.module.css";
import { MoviesWithGenreAndActors } from "./components/MoviesWithGenreAndActors";
import { Movies } from "./components/Movies";

function App() {
  return (
    <Tabs.Root className={styles.Tabs} defaultValue="Movies">
      <Tabs.List className={styles.List}>
        <Tabs.Tab className={styles.Tab} value="Movies">
          Movies
        </Tabs.Tab>
        <Tabs.Tab className={styles.Tab} value="MoviesWithGenreAndActors">
          MoviesWithGenreAndActors
        </Tabs.Tab>
        <Tabs.Indicator className={styles.Indicator} />
      </Tabs.List>
      <Tabs.Panel className={styles.Panel} value="Movies">
        <Movies />
      </Tabs.Panel>
      <Tabs.Panel className={styles.Panel} value="MoviesWithGenreAndActors">
        <MoviesWithGenreAndActors />
      </Tabs.Panel>
    </Tabs.Root>
  );
}

export default App;
