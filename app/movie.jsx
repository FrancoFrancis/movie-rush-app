import Link from "next/link";
import Image from "next/image";

export default function Movie ({title, id, poster_path, relase_date }) {


    const imagePath = "https://image.tmdb.org/t/p/original";    


    return (
        <div className=" py-4 rounded">
            <h1 className="bg-green-500 text-1.2xl  px-8 py-7 text-bold-white-500 rounded"> {title} </h1>
            {/* <h2> {relase_date} </h2> */}

            <Link href={`/${id}`} >
                <Image src={imagePath + poster_path} width={400} height={500} alt={title}  />
            </Link>
            
        </div>
    )
}