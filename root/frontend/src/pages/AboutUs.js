import React from 'react';
import Navigation from '../components/Navba';

const AboutUsPage = () => {
    return (
        <div>
            <Navigation/>

            <br/> <br/><br/> <br/>
            <div style={{
                textAlign: 'center',
                margin: '0 auto',
                maxWidth: '600px',
                padding: '20px',
                border: '1px solid #ccc',
                borderColor: '#5b4db7',
                borderRadius: '10px',
                boxShadow: '0 10px 20px 0 rgba(232,181,232,1)',
                borderStyle: 'solid',
            }}
            >
                <h1
                    style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textDecoration: 'underline black',
                        color: '#701d8d',
                    }}>

                    Ueber uns
                </h1>
                <p>
                    Willkommen auf unserer Website!<br/> Wir sind ein studentisches Team aus Zeliha, Ibrahim und
                    Aleksandr und arbeiten mit Begeisterung an innovativen Loesungen. Dieser Generator ist unser
                    gemeinsames Projekt.
                </p>
                <p>
                    Als Studierende suchen wir staendig nach neuen Moeglichkeiten, zu lernen und zu wachsen.
                    Wir glauben daran, dass Technologie den Alltag erleichtern kann. Deshalb bauen wir Tools,
                    die Informationen sammeln, filtern und uebersichtlich darstellen.
                </p>
                <p>
                    Unser Fokus liegt auf Benutzerfreundlichkeit und Qualitaet. Wir verbessern unseren
                    Generator laufend und ergaenzen neue Funktionen, damit er die Beduerfnisse unserer
                    Nutzerinnen und Nutzer optimal unterstuetzt.
                </p>
                <p>
                    Danke, dass du unsere Website besuchst und unser Projekt unterstuetzt. <br/> Wir hoffen,
                    dass dir der Generator weiterhilft und angenehm zu nutzen ist. <br/> Bei Fragen oder
                    Feedback kannst du dich jederzeit bei uns melden.
                </p>
            </div>
            <br/>
        </div>
    );
};

export default AboutUsPage;
