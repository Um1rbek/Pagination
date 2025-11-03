import { useState } from "react";
import { useGetPhotosQuery } from "../api/photosApi";
import PhotoCard from "../components/PhotoCard";





export default function PhotosPage() {
  const [page, setPage] = useState(1);
  const { data: photos = [], isLoading, isError } = useGetPhotosQuery(page);





  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-cyan-400 text-2xl font-semibold">
        Loading ...
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-red-400 text-2xl font-semibold">
        Error
      </div>
    );





  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text
       text-transparent drop-shadow-md">
        Photo Gallery/!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg shadow-cyan-900/30 bg-gray-800/70 backdrop-blur-md 
            border border-gray-700 hover:border-cyan-500 transition-all duration-300"
          >
            <PhotoCard photo={photo} />
      
          </div>
        ))}
      </div>
      
      
      
      
   
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-cyan-300 
          font-semibold shadow-md shadow-cyan-900/30 hover:from-cyan-600 hover:to-blue-600 hover:text-white
           transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page === 1}
        >
          Goo
        </button>

        <span className="text-lg font-bold text-cyan-400 tracking-wide">
          Page {page}
        </span>

        <button
          onClick={() => setPage((p) => p+ 1)}
          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-cyan-300 font-semibold shadow-md shadow-cyan-900/30 
          hover:from-cyan-600 hover:to-blue-600 hover:text-white transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
