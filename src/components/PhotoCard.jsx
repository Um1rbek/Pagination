export default function PhotoCard({ photo }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg shadow-cyan-900/30 bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-cyan-500 transition-all duration-300">
      <img
        src={`https://picsum.photos/400/400?random=${photo.id}`}
        alt={photo.title}
        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
      />
    </div>
  );
}
