export default function App() {
    return (
        <div>
            <h1 className="text-4xl font-bold">Bienvenue à l'Hopital</h1>
            <h2 className="text-xl">Etapes de votre onboarding: </h2>
            <ul className="flex flex-col gap-y-8 justify-center items-center">
                <li className="bg-slate-400 rounded-md w-fit p-4">Récupérer votre ordinateur</li>
                <li className="bg-slate-400 rounded-md w-fit p-4">Récupérer votre badge</li>
                <li className="bg-slate-400 rounded-md w-fit p-4">Aller à la cantine</li>
                <button className= "bg-red-400">
                    <img className="Image" src="./logo512.png">
                    </img>
                </button>
            </ul>
        </div>
    );
}
