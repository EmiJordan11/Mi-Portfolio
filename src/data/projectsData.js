import spotinsights from '/spotinsights.png'
import potenciarSolidario from '/potenciar-solidario2.png'
import forohub from '/forohub.png'
import layt from '/Layt.png'


export const projectsData = [
    {
        img: spotinsights,
        title: 'SpotInsights',
        description: 'Proyecto que integra el Desarrollo FullStack con el Análisis de Datos. Su objetivo principal es recopilar y analizar los datos de reproducción musical de los usuarios a través de la API de Spotify.',
        techs: ['CSS', 'REACT','JAVA', 'SPRING', 'POSTGRESQL'],
        links: {
            github: 'https://github.com/EmiJordan11/SpotInsights-FrontEnd',
            web: 'https://spotinsights.vercel.app/'
        }
    },
    {
        img: potenciarSolidario,
        title: 'Potenciar Solidario',
        description: 'Dashboard que visualiza un análisis Financiero de la ONG Argentina Potenciar solidario. El objetivo principal es ofrecer una vista clara y comprensible sobre las finanzas de la organización',
        techs: ['SHEETS', 'LOOKER'],
        links:{
            github: 'https://github.com/EmiJordan11/Dashboard-Potenciar-Solidario',
            web: 'http://lookerstudio.google.com/reporting/1e69ca48-ee89-4e08-834c-8431f050a334'
        }
    },
    {
        img: forohub,
        title: 'ForoHub',
        description: 'ForoHub es un proyecto de Backend que ofrece una API REST con operaciones CRUD para gestionar foros de discusión. La seguridad de la aplicación está gestionada utilizando Spring Security y JWT',
        techs: ['JAVA', 'SPRING', 'POSTGRESQL','SUPABASE'],
        links:{
            github: 'https://github.com/EmiJordan11/ForoHub'
        }
    },
    {
        img: layt,
        title: 'Layt International',
        description: 'Análisis de producción enfocado en la cantidad producida, productos devueltos y motivos de devolución, para detectar ineficiencias y mejorar la calidad operativa.',
        techs: ['EXCEL', 'POWERBI'],
        links:{
            github: 'https://github.com/EmiJordan11/Dashboard-Layt-International'
        }
    }
]