import Movie from "./movie"


export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res = await data.json()
  console.log(res)
  console.log("Image domains:", process.env.NEXT_PUBLIC_IMAGE_DOMAINS);

  
  return (
    <main >
    <h1 className="text-6xl my-5 bg-red-600 p-5 text-white-500 rounded" >  MOVIE RUSH 🚨: Checkout Trending and Latest Movies  </h1>

      <div className="grid gap-16 grid-cols-fluid">
      {res && res.results && res.results.map((movie) => (

        <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
        />
  
      ))}
      </div>
    </main>
  )
}
