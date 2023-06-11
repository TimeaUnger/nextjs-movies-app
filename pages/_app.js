import Layout from "../components/layout";
import "../styles/MenuHamburger.css";
import "../styles/MovieTile.css";
import "../styles/MovieTiles.css";
import "../styles/SearchForm.css";
import "../styles/MovieDetails.css";
import "../styles/Layout.css";
import "../styles/GenreSelect.css";
import "../styles/SortControl.css";

export default function App({ Component, pageProps }) {

   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page)
 
   return getLayout(<Layout><Component {...pageProps} /></Layout>)

  console.log(Component)

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //     <MovieTiles />
  //   </Layout>
  // )
}