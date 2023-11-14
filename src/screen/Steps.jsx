import { Link } from 'react-router-dom';
import AccordionItem from '../components/AccordionItem';
import { Accordion } from '@szhsin/react-accordion';

export default function Step() {
    return (
        <div className="flex flex-col items-center py-8">
            <h1 className="text-4xl font-bold mb-4">Bienvenue à l'Hopital</h1>
            <h2 className="text-xl">Etapes de votre onboarding: </h2>
            <Accordion transition transitionTimeout={250} className="flex flex-col gap-y-12 w-5/6 items-center">
                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionItem>
            </Accordion>
            <Link
                className="bg-slate-400 w-[320px] p-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-center me-2 mb-2"
                to="/map"
            >
                Map
            </Link>
        </div>
    );
}
