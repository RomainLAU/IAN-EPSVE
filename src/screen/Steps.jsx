import AccordionItem from '../components/AccordionItem';
import { Accordion } from '@szhsin/react-accordion';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Step() {
    return (
        <div className="flex flex-col">
            <Header />
            <h1 className="text-[44px] font-calibri mb-4 ml-9">Intégration</h1>
            <Accordion transition transitionTimeout={250} className="flex flex-col pb-32 gap-y-12 w-full items-center">
                <AccordionItem header="Premier jour" initialEntered>
                    <p className="font-calibri text-[16px]">
                        Direction les Ressources Humaines pour récupérer votre badge. Il vous sera utile pour déjeuner
                        et ouvrir certaines portes de Ville-Évrard. Devant la porte entrez ce code : <br />
                        <br />
                        <strong className="text-[32px] font-bold">4567</strong>
                        <br />
                        <br />
                        Une fois le badge récupéré, vous pouvez continuer votre intégration en suivant la prochaine
                        étape, juste en dessous.
                    </p>
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
