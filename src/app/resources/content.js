import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Giovanni',
    lastName:  'Gozzo',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Alternant Data Scientist',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Paris',
    languages: ['Francais', 'Anglais']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Abonnez vous a la Newsletter de {person.firstName}</>,
    description: <>J'écris occasionnellement sur le design, la technologie et je partage des réflexions sur l'intersection entre créativité et ingénierie.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Giovanni-Gozzo',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/giovanni-gozzo-99331a252/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'gio.gozzo84@gmail.com',
    },
    {
        name: 'CV',
        link: '/images/CV.pdf'
    }
];


const home = {
    label: 'Accueil',
    title: `Portfolio de ${person.name}`,
    description: `Site web de portfolio présentant mon travail en tant qu' ${person.role}`,
    headline: <>Étudiant / Data Scientist</>,
    subline: <>Je suis Giovanni, alternant Data-Scientist chez <InlineCode>ABES</InlineCode> passionné par la data science et l'IA.<br/> À mes heures perdues, j'approfondis mes connaissances en deep learning, machine learning plus largement dans l'IA pour développer des solutions innovantes.</>
}

const about = {
    label: 'A propos',
    title: 'A propos de moi',
    description: `Rencontrez ${person.name}, ${person.role} de ${person.location}`, tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Je suis Giovanni, étudiant en BUT Informatique et alternant Data-Scientist. Je me vois évoluer dans le domaine de la data, en me spécialisant davantage en data science et intelligence artificielle. Avec mes compétences en machine learning, big data et NLP, je souhaite contribuer à des projets innovants, développer des solutions concrètes et continuer à approfondir mes connaissances pour devenir expert dans ce domaine.






</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Expérience Professionnelle',
        experiences: [
            {
                company: 'ABES',
                timeframe: 'Septembre 2024 - Présent',
                role: 'Alternant Data-Scientist',
                achievements: [
                    <>Développement de modèles de machine learning (KNN, Régression Logistique, SVM, Random Forest) pour
                        des projets de Big Data.</>,
                    <>Utilisation de la réduction de dimensions (LDA, PCA) pour visualiser des clusters issus de
                        l’analyse de données massives.</>,
                    <>Automatisation d’analyses textuelles avec des LLM et embeddings (HuggingFace, Transformers) pour
                        extraire des informations pertinentes.</>,
                    <>Déploiement de modèles de machine learning sur des serveurs OVH, assurant leur mise à jour et leur
                        efficacité en production.</>
                ],
                images: [] // No images for this experience
            },
            {
                company: 'YOOZ',
                timeframe: 'Avril 2024 - Juin 2024',
                role: 'Stagiaire Data-Scientist',
                achievements: [
                    <>Développement de pipelines de traitement de données textuelles : prétraitement, nettoyage, et
                        optimisation des embeddings.</>,
                    <>Déploiement de solutions NLP sur des serveurs Azure, en mettant en place des systèmes autonomes
                        pour des tâches d’analyse textuelle automatisée.</>,
                    <>Création et maintenance d'API pour l'intégration de modèles NLP dans les processus d'analyse de
                        données.</>
                ],
                images: [] // No images for this experience
            }
        ]
    },
    studies: {
        display: true,
        title: 'Formation',
        institutions: [
            {
                name: 'IUT Montpellier-Sète',
                description: <>Actuellement étudiant en BUT Informatique, avec une spécialisation en RACDV (Réalisation
                    d'applications, conception, développement et validation de systèmes).</>,
            },
            {
                name: 'Lycée Théodore Aubanel',
                description: <>DCG (Diplôme de Comptabilité et Gestion) obtenu en 2021, avec un baccalauréat mention
                    assez bien en 2020, spécialité Mathématiques, SES, et NSI.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Compétences',
        skills: [
            {
                title: 'Machine Learning',
                description: <>Développement et optimisation de modèles de machine learning (KNN, Régression Logistique,
                    SVM, Random Forest).</>,
                // Suggestions d'images/GIF
                images: [
                    {
                        src: '/images/projects/machine-learning/algo.png',
                        alt: 'Illustration d’un graphique de courbes ROC pour évaluer les performances des modèles.',
                        width: 16,
                        height: 9
                    },

                ]
            },
            {
                title: 'Traitement du Langage Naturel (NLP)',
                description: <>Utilisation de LLM, embeddings et techniques NLP pour automatiser l’analyse
                    textuelle.</>,
                // Suggestions d'images/GIF
                images: [
                    {
                        src: '/images/projects/machine-learning/dd.png',
                        alt: 'Illustration de la visualisation de vecteurs d’embeddings dans un espace réduit (PCA).',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/machine-learning/rr.png',
                        alt: 'Capture d’écran d’un tableau de bord montrant les résultats d’une analyse NLP (extraction de mots-clés, résumé automatique).',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Big Data',
                description: <>Requêtage et manipulation de bases de données massives (PostgreSQL, ChromaDB) pour
                    l’analyse et le reporting.</>,
                images: [
                    {
                        src: '/images/projects/machine-learning/big.png',
                        alt: 'Diagramme illustrant une architecture de base de données optimisée pour des requêtes massives.',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/machine-learning/chroma.png',
                        alt: 'Animation montrant une comparaison de temps d’exécution entre différentes optimisations de requêtes SQL.',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Déploiement de Modèles',
                description: <>Déploiement de solutions de machine learning et NLP sur des serveurs OVH et Azure.</>,
                // Suggestions d'images/GIF

            },
            {
                title: 'Vectorisation',
                description: <>Application de techniques de vectorisation (TF-IDF, BOW) pour extraire des informations
                    pertinentes de données textuelles.</>,
                // Suggestions d'images/GIF
                images: [
                    {
                        src: '/images/projects/machine-learning/transfo.png',
                        alt: 'Graphique comparant les résultats entre TF-IDF et BOW sur un ensemble de données.',
                        width: 16,
                        height: 9
                    }

                ]
            }
        ]
    },
}

const blog = {
    label: 'News',
    title: 'Cette page me permet de résumer des articles pour mieux m\'en approprier les concepts et les retrouver rapidement.',
    description: `Lisez ce que ${person.name} a fait récemment`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'Mes projects',
    description: `une selection de project par ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Compétences',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };