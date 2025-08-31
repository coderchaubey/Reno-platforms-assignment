import Navbar from "@/components/Navbar";

export default function Home(){ //This will work as a hompage
    return(
        <div>
            <Navbar />
            <main className="home-container">
                <h1>School Management Assignment</h1>
                <p>Use the navigation to add or view schools.</p>
            </main>
        </div>
    )
}