import { Flex, Heading } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations();
  const title = "Compétences - Portfolio";
  const description = "Liste des compétences AC et CE avec leur association aux projets.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/${locale}/competences`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

const projects = [
  {
    title: "Plateforme de Recherche de Stages et d'Alternances",
    description:
      "Développement d'une plateforme facilitant la recherche de stages et d'alternances pour les étudiants.",
    competences: [
      {
        ac: "AC 31.01",
        ce: ["CE1.01", "CE1.03", "CE1.06"],
        level: "Professionnel",
        justification:
          "Vous avez sélectionné une architecture logicielle adaptée aux besoins des utilisateurs, en appliquant des principes algorithmiques efficaces et en choisissant des technologies appropriées pour assurer la performance et la scalabilité de la plateforme.",
      },
      {
        ac: "AC 31.03",
        ce: ["CE1.01", "CE1.06", "CE3.01"],
        level: "Professionnel",
        justification:
          "Vous avez déployé la plateforme dans un environnement de production, configuré les services nécessaires et assuré leur bon fonctionnement pour offrir une expérience utilisateur optimale.",
      },
      {
        ac: "AC 32.01",
        ce: ["CE2.01", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez optimisé la plateforme en tenant compte des performances, de la consommation de ressources et de la capacité à gérer une augmentation du nombre d'utilisateurs, en justifiant vos choix techniques.",
      },
      {
        ac: "AC 32.02",
        ce: ["CE2.02", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez analysé le code de la plateforme pour identifier les points d'amélioration, modélisé des solutions optimisées et validé leur efficacité.",
      },
      {
        ac: "AC 33.01",
        ce: ["CE3.01", "CE3.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place des processus d'intégration et de déploiement continus pour automatiser les mises à jour de la plateforme, assurant ainsi sa disponibilité et sa fiabilité.",
      },
      {
        ac: "AC 33.03",
        ce: ["CE3.02", "CE3.03"],
        level: "Professionnel",
        justification:
          "Vous avez implémenté des mesures de sécurité conformes aux normes pour protéger les données des utilisateurs et assurer l'intégrité de la plateforme.",
      },
      {
        ac: "AC 34.01",
        ce: ["CE4.01", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez conçu des bases de données capables de gérer efficacement des volumes importants de données variées, tout en garantissant leur qualité et leur cohérence.",
      },
      {
        ac: "AC 34.02",
        ce: ["CE4.02", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place des processus pour préparer et extraire les données en conformité avec les réglementations sur la protection des données personnelles, assurant leur qualité pour une exploitation efficace.",
      },
      {
        ac: "AC 35.01",
        ce: ["CE5.02", "CE5.03"],
        level: "Professionnel",
        justification:
          "Vous avez évalué les implications économiques, sociales et technologiques de la plateforme, en veillant à une gestion éthique et responsable du projet.",
      },
      {
        ac: "AC 36.01",
        ce: ["CE5.04", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place une veille technologique pour suivre les évolutions pertinentes et partagé ces informations avec l'équipe, favorisant une culture d'innovation et de collaboration.",
      },
      {
        ac: "AC 36.04",
        ce: ["CE5.01", "CE5.04"],
        level: "Professionnel",
        justification:
          "Vous avez participé activement à la gestion du projet de la plateforme, en communiquant efficacement avec les membres de l'équipe et en proposant des solutions innovantes aux défis rencontrés.",
      },
      {
        ac: "AC 36.03",
        ce: ["CE6.02", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez facilité l'adoption de la nouvelle plateforme par les utilisateurs et les parties prenantes, en assurant une transition en douceur et en communiquant clairement les avantages et les changements apportés.",
      },
      {
        ac: "AC 36.02",
        ce: ["CE5.02", "CE5.03"],
        level: "Professionnel",
        justification:
          "Vous avez analysé les tendances actuelles de l'innovation numérique et identifié les opportunités pour améliorer la plateforme, tout en veillant à respecter les normes légales et éthiques.",
      },
      {
        ac: "AC 36.01",
        ce: ["CE5.04", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place une veille technologique pour suivre les évolutions pertinentes et partagé ces informations avec l'équipe, favorisant une culture d'innovation et de collaboration.",
      },
    ],
  },
  {
    title: "Automatisation de l'Imputation Comptable",
    description:
      "Mise en place d'un système automatisé pour l'imputation comptable, réduisant les erreurs et augmentant l'efficacité.",
    competences: [
      {
        ac: "AC 31.01",
        ce: ["CE1.01", "CE1.06"],
        level: "Professionnel",
        justification:
          "Vous avez conçu une architecture logicielle adaptée pour automatiser l'imputation comptable, en tenant compte des besoins spécifiques du client et en sélectionnant les technologies appropriées pour assurer l'efficacité et la fiabilité du système.",
      },
      {
        ac: "AC 31.03",
        ce: ["CE1.01", "CE3.01"],
        level: "Professionnel",
        justification:
          "Vous avez déployé la solution d'automatisation dans l'environnement de production du client, en assurant une intégration fluide avec les systèmes existants et en garantissant la continuité des opérations comptables.",
      },
      {
        ac: "AC 32.01",
        ce: ["CE2.01", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez optimisé l'application pour assurer un traitement rapide et précis des opérations comptables, en minimisant l'utilisation des ressources et en justifiant vos choix techniques pour répondre aux exigences de performance.",
      },
      {
        ac: "AC 32.02",
        ce: ["CE2.02", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez analysé le code existant pour identifier les inefficacités, modélisé des solutions améliorées et validé les améliorations apportées pour optimiser le processus d'imputation comptable.",
      },
      {
        ac: "AC 33.01",
        ce: ["CE3.01", "CE3.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place des processus automatisés pour le traitement des opérations comptables, garantissant une gestion efficace et une continuité des activités sans interruption.",
      },
      {
        ac: "AC 33.03",
        ce: ["CE3.02", "CE3.03"],
        level: "Professionnel",
        justification:
          "Vous avez implémenté des mesures de sécurité conformes aux normes pour protéger les données comptables sensibles et assurer l'intégrité du système d'information.",
      },
      {
        ac: "AC 34.01",
        ce: ["CE4.01", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez développé des mécanismes pour capturer et stocker efficacement des volumes importants de données comptables, en veillant à leur cohérence et à leur qualité pour une exploitation fiable.",
      },
      {
        ac: "AC 34.02",
        ce: ["CE4.02", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place des processus pour préparer et extraire les données comptables en conformité avec les réglementations sur la protection des données personnelles, garantissant leur qualité pour une exploitation efficace.",
      },
      {
        ac: "AC 35.01",
        ce: ["CE5.02", "CE5.03"],
        level: "Professionnel",
        justification:
          "Vous avez évalué les implications économiques, sociales et technologiques de l'automatisation de l'imputation comptable, en veillant à une gestion éthique et responsable du projet.",
      },
      {
        ac: "AC 36.01",
        ce: ["CE5.04", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place une veille technologique pour suivre les évolutions pertinentes dans le domaine de l'automatisation comptable et partagé ces informations avec l'équipe, favorisant une culture d'innovation et de collaboration.",
      },
      {
        ac: "AC 36.04",
        ce: ["CE5.01", "CE5.04"],
        level: "Professionnel",
        justification:
          "Vous avez participé activement à la gestion du projet d'automatisation de l'imputation comptable, en communiquant efficacement avec les membres de l'équipe et en proposant des solutions innovantes aux défis rencontrés.",
      },
      {
        ac: "AC 36.03",
        ce: ["CE6.02", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez facilité l'adoption de la nouvelle solution automatisée par les utilisateurs et les parties prenantes, en assurant une transition en douceur et en communiquant clairement les avantages et les changements apportés.",
      },
      {
        ac: "AC 36.02",
        ce: ["CE5.02", "CE5.03"],
        level: "Professionnel",
        justification:
          "Vous avez analysé les tendances actuelles de l'innovation numérique dans le domaine comptable et identifié les opportunités pour améliorer la solution, tout en veillant à respecter les normes légales et éthiques.",
      },
      {
        ac: "AC 36.01",
        ce: ["CE5.04", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place une veille technologique pour suivre les évolutions pertinentes dans le domaine de l'automatisation comptable et partagé ces informations avec l'équipe, favorisant une culture d'innovation et de collaboration.",
      },
    ],
  },
  {
    title:
      "Remplacement des APIs d'intelligence artificielle par des modèles open source",
    description:
      "Mise en œuvre d'une solution intégrant des modèles open source pour remplacer les APIs d'intelligence artificielle propriétaires.",
    competences: [
      {
        ac: "AC 31.01",
        ce: ["CE1.01", "CE1.06"],
        level: "Professionnel",
        justification:
          "Vous avez conçu une architecture logicielle permettant d'intégrer efficacement des modèles d'intelligence artificielle open source, en tenant compte des besoins spécifiques du client et en sélectionnant les technologies appropriées pour assurer l'efficacité et la fiabilité du système.",
      },
      {
        ac: "AC 31.03",
        ce: ["CE1.01", "CE3.01"],
        level: "Professionnel",
        justification:
          "Vous avez déployé les modèles open source dans l'environnement de production du client, en assurant une intégration fluide avec les systèmes existants et en garantissant la continuité des opérations liées à l'intelligence artificielle.",
      },
      {
        ac: "AC 32.01",
        ce: ["CE2.01", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez optimisé l'application pour assurer un traitement rapide et précis des tâches d'intelligence artificielle, en minimisant l'utilisation des ressources et en justifiant vos choix techniques pour répondre aux exigences de performance.",
      },
      {
        ac: "AC 32.02",
        ce: ["CE2.02", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez analysé le code existant pour identifier les inefficacités, modélisé des solutions améliorées et validé les améliorations apportées pour optimiser le processus d'intégration des modèles open source.",
      },
      {
        ac: "AC 33.01",
        ce: ["CE3.01", "CE3.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place des processus automatisés pour le déploiement et la gestion des modèles open source, garantissant une gestion efficace et une continuité des activités sans interruption.",
      },
      {
        ac: "AC 33.03",
        ce: ["CE3.02", "CE3.03"],
        level: "Professionnel",
        justification:
          "Vous avez implémenté des mesures de sécurité conformes aux normes pour protéger les données sensibles et assurer l'intégrité du système d'information lors de l'intégration des modèles open source.",
      },
      {
        ac: "AC 34.01",
        ce: ["CE4.01", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez développé des mécanismes pour capturer et stocker efficacement des volumes importants de données nécessaires à l'entraînement et à l'évaluation des modèles open source, en veillant à leur cohérence et à leur qualité pour une exploitation fiable.",
      },
      {
        ac: "AC 34.02",
        ce: ["CE4.02", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place des processus pour préparer et extraire les données en conformité avec les réglementations sur la protection des données personnelles, garantissant leur qualité pour une exploitation efficace dans les modèles open source.",
      },
      {
        ac: "AC 35.01",
        ce: ["CE5.02", "CE5.03"],
        level: "Professionnel",
        justification:
          "Vous avez évalué les implications économiques, sociales et technologiques du remplacement des APIs d'intelligence artificielle propriétaires par des modèles open source, en veillant à une gestion éthique et responsable du projet.",
      },
      {
        ac: "AC 36.01",
        ce: ["CE5.04", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez mis en place une veille technologique pour suivre les évolutions pertinentes dans le domaine des modèles d'intelligence artificielle open source et partagé ces informations avec l'équipe.",
      },
    ],
  },
  {
    title: "Deep Neural Network",
    description:
      "Implémentation d'un réseau de neurones profond pour des applications avancées en intelligence artificielle.",
    competences: [
      {
        ac: "AC 31.01",
        ce: ["CE1.01", "CE1.03", "CE1.06"],
        level: "Professionnel",
        justification:
          "Vous avez sélectionné et implémenté une architecture de réseau de neurones profonde adaptée aux besoins spécifiques du projet, en appliquant des principes algorithmiques avancés et en choisissant des ressources techniques appropriées pour assurer la performance du modèle.",
      },
      {
        ac: "AC 32.01",
        ce: ["CE2.01", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez optimisé le réseau de neurones pour améliorer des métriques telles que le temps d'exécution et la précision, tout en justifiant vos choix techniques et en validant les résultats obtenus.",
      },
      {
        ac: "AC 32.02",
        ce: ["CE2.02", "CE2.04"],
        level: "Professionnel",
        justification:
          "Vous avez analysé le comportement du code du réseau de neurones, identifié des points d'amélioration potentiels et modélisé des solutions pour optimiser les performances, en justifiant vos choix et en validant les résultats obtenus.",
      },
      {
        ac: "AC 34.03",
        ce: ["CE4.03", "CE4.05"],
        level: "Professionnel",
        justification:
          "Vous avez appliqué des techniques d'apprentissage automatique pour entraîner le réseau de neurones, en vous basant sur des fondements mathématiques solides et en veillant à la qualité et à la cohérence des données utilisées.",
      },
      {
        ac: "AC 35.01",
        ce: ["CE5.02", "CE5.03"],
        level: "Professionnel",
        justification:
          "Vous avez évalué les implications économiques, sociétales et technologiques de l'application du réseau de neurones, en tenant compte des réglementations et en promouvant une utilisation éthique et responsable de la technologie.",
      },
      {
        ac: "AC 36.01",
        ce: ["CE5.04", "CE6.04"],
        level: "Professionnel",
        justification:
          "Vous avez effectué une veille technologique sur les avancées en matière de réseaux de neurones, partagé ces informations avec votre équipe et intégré de nouvelles approches créatives dans le projet.",
      },
      {
        ac: "AC 36.04",
        ce: ["CE5.01", "CE5.04"],
        level: "Professionnel",
        justification:
          "Vous avez participé activement à la gestion du projet, en communiquant efficacement avec les membres de l'équipe et en proposant des solutions innovantes aux défis rencontrés.",
      },
    ],
  },
];

export default function Competences({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <Heading marginBottom="l" variant="display-strong-s">
        Compétences et Projets
      </Heading>
      <Flex fillWidth flex={1} direction="column" gap="xl">
        {projects.map((project, index) => (
          <Flex
            key={index}
            border="neutral-strong"
            borderStyle="solid-1"
            padding="l"
            radius="m"
            shadow="xl"
            direction="column"
            gap="l"
            background="background-overlay"
          >
            <Heading variant="display-strong-xs" align="center" color="accent-strong">
              {project.title}
            </Heading>
            <Flex direction="column" align="center">
              <p>{project.description}</p>
            </Flex>
            <Flex wrap="wrap" gap="m">
              {project.competences.map((competence, idx) => (
                <Flex
                  key={idx}
                  border="neutral-medium"
                  borderStyle="solid-1"
                  radius="m"
                  padding="m"
                  shadow="m"
                  direction="column"
                  background="background-alt"
                >
                  <Heading variant="heading-strong-s" color="accent-strong">
                    {competence.ac}
                  </Heading>
                  <p>
                    Compétences Élémentaires : {competence.ce.join(", ")}
                  </p>
                  <p>
                    <strong>Niveau :</strong> {competence.level}
                  </p>
                  <p>{competence.justification}</p>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
