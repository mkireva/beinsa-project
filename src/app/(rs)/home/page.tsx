export const metadata = {
    title: "Home",
  };
  
  export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-4xl font-bold">Home</h1>
        <p className="text-lg">This is the home page.</p>
      </div>
    );
  }