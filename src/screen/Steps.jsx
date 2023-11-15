import AccordionItem from '../components/AccordionItem';
import { Accordion } from '@szhsin/react-accordion';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Step() {
    return (
        <div className="flex flex-col items-center py-8">
            <Header />
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
            <Footer />
        </div>
    );
}
