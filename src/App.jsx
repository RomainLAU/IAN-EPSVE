export default function App() {
    return (
        <div className="flex justify-center align-center flex-col gap-4">
            <h1 className="text-4xl font-bold">Bienvenue à l'Hopital</h1>
            <h2 className="text-xl">Etapes de votre onboarding: </h2>
            <ul className="flex flex-col gap-y-8 justify-center items-center">
                <li className="bg-slate-400 rounded-md w-fit p-4  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-center me-2 mb-2">Récupérer votre ordinateur</li>
                <li className="bg-slate-400 rounded-md w-fit p-4 bg-slate-400 rounded-md w-fit p-4  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-center me-2 mb-2">Récupérer votre badge</li>
                <li className="bg-slate-400 rounded-md w-fit p-4 bg-slate-400 rounded-md w-fit p-4  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-center me-2 mb-2">Aller à la cantine</li>
            </ul>
        </div>
    );
}
