import { someStaticDreams } from "../staticData/staticTitle"
export default function Footer() {
    return (
        
    <>
    <div className="bg-gray-800 text-white p-8 mt-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-200">Explore Common Dreams</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {someStaticDreams.map((dream, index) => (
        <a
          key={index}
          href={dream.url}
          className="group block p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
        >
          <div className="text-center">
            <p className="text-lg font-medium group-hover:text-white text-gray-300 transition-colors duration-300">
              {dream.title}
            </p>
            <div className="w-16 h-1 mt-2 mx-auto bg-transparent group-hover:bg-white transition-all duration-300"></div>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>
</>
    )
}  