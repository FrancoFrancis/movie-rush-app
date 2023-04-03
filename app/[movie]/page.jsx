import Image from "next/image";
export async function generateStaticParams () {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

    const res = await data.json()

    return res.results.map((movie) => ({

        movie: toString(movie.id)
    })) 
}

export default async function MovieDetail({ params }) {
    const {movie} =  params
    const imagePath = "https://image.tmdb.org/t/p/original";    
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: revalidate}  )
    console.log(params)
     
    const res  = await data.json()

    return(

        <div>
            <div >
                <h2 className="text-7xl">
                    {res.title}
                </h2>
                <h1 className="text-3xl color-red" > RELEASE DATE:  {res.release_date}  </h1>
                <h1 className="text-3xl color-red text-red-500"  > RUNTIME:  {res.runtime} minutes </h1>
                <h1 className="bg-green-600 inline-block my-2 py-2 px-4 rounded" > STATUS: {res.status}  </h1>

                <h1 className="bg-gray-600 p-5 rounded my-2 text-3xl color-red" > OVERVIEW:  {res.overview}  </h1>
                <Image
                className="my-12 w-full"
                src={imagePath  + res.backdrop_path}
                width={1000}
                height={1000}
                priority
                />

            </div>

        </div>
    )
}