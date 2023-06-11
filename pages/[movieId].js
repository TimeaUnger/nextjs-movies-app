import { useRouter } from 'next/router';
import MovieDetails from '../components/MovieDetails';

export default function MovieDetailsHeader() {
  const router = useRouter()
  return (
    <>
      <MovieDetails />
    </>
  )
}

// ID.getLayout = function PageLayout(page) {
//   return (
//     <>
//       {page}
//     </>
//   )
// }