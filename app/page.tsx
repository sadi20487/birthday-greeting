export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Birthday Greeting Project</h1>
      <p className="mb-8 text-center max-w-md">
        This project was requested as a pure Vanilla HTML/CSS/JS application.
        The main file is located at <code className="bg-gray-800 p-1 rounded">public/index.html</code>.
      </p>
      
      <a 
        href="/index.html" 
        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition-colors"
      >
        Open Birthday Greeting (Vanilla Version)
      </a>
      
      <p className="mt-8 text-sm text-gray-500">
        Note: The audio file is expected at <code>/aset/ultah.mp3</code>. 
        Please ensure this file exists for the full experience.
      </p>
    </div>
  );
}
