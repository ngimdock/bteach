import Paragraphe from "../../../components/elements/p/Paragraphe";
import H4 from "../../../components/elements/titles/H4";
import H1 from "../../../components/elements/titles/H1";

const BodyRepeaterProfile = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto pt-8 md:pt-14">
      <H1 color="text-dark" classe="mb-8 md:mb-14">
        Conditions générales d'utilisation du site <strong>Bteach</strong>
      </H1>
      <div className="mb-5 flex flex-col gap-2">
        <H4 classe="my-1">ARTICLE 1 : Objet</H4>
        <Paragraphe>
          Les présentes « conditions générales d'utilisation » ont pour objet
          l'encadrement juridique de l'utilisation du site{" "}
          <strong>Bteach</strong> et de ses services.
        </Paragraphe>
        <Paragraphe>Ce contrat est conclu entre :</Paragraphe>
        <Paragraphe>
          Le gérant du site internet, ci-après désigné « l'Éditeur »,
        </Paragraphe>
        <Paragraphe>
          Toute personne physique ou morale souhaitant accéder au site et à ses
          services, ci-après appelé« l'Utilisateur ».
        </Paragraphe>
        <Paragraphe>
          Les conditions générales d'utilisation doivent être acceptées par tout
          Utilisateur, et son accès au site vaut acceptation de ces conditions.
        </Paragraphe>
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <H4 classe="my-1">ARTICLE 2 : Responsabilité de l'Utilisateur</H4>
        <Paragraphe>
          L'Utilisateur est responsable des risques liés à l'utilisation de son
          identifiant de connexion et de son mot de passe.
        </Paragraphe>
        <Paragraphe>
          Le mot de passe de l'Utilisateur doit rester secret. En cas de
          divulgation de mot de passe, l'Éditeur décline toute responsabilité.
        </Paragraphe>
        <Paragraphe>
          L'Utilisateur assume l'entière responsabilité de l'utilisation qu'il
          fait des informations et contenus présents sur le site{" "}
          <strong>Bteach</strong>.
        </Paragraphe>
        <Paragraphe>
          Tout usage du service par l'Utilisateur ayant directement ou
          indirectement pour conséquence des dommages doit faire l'objet d'une
          indemnisation au profit du site.
        </Paragraphe>
        <Paragraphe>
          Le site permet aux membres de publier sur le site :
          <ul className="list-disc list-inside">
            <li>Les services qu'ils offres comme un repétiteur</li>
            <li>Les offres d'emplois fait par les client</li>
          </ul>
        </Paragraphe>
        <Paragraphe>
          Le membre s'engage à tenir des propos respectueux des autres et de la
          loi et accepte que ces publications soient modérées ou refusées par
          l'Éditeur, sans obligation de justification.
        </Paragraphe>
        <Paragraphe>
          En publiant sur le site, l'Utilisateur cède à la société éditrice le
          droit non exclusif et gratuit de représenter, reproduire, adapter,
          modifier, diffuser et distribuer sa publication, directement ou par un
          tiers autorisé.
        </Paragraphe>
        <Paragraphe>
          L'Éditeur s'engage toutefois à citer le membre en cas d'utilisation de
          sa publication.
        </Paragraphe>
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <H4 classe="my-1">ARTICLE 3 : Propriété intellectuelle</H4>
        <Paragraphe>
          Les contenus du site [votre site] (logos, textes, éléments graphiques,
          vidéos, etc.) son protégés par le droit d'auteur, en vertu du Code de
          la propriété intellectuelle.
        </Paragraphe>
        <Paragraphe>
          L'Utilisateur devra obtenir l'autorisation de l'éditeur du site avant
          toute reproduction, copie ou publication de ces différents contenus.
        </Paragraphe>
        <Paragraphe>
          Ces derniers peuvent être utilisés par les utilisateurs à des fins
          privées ; tout usage commercial est interdit.
        </Paragraphe>
        <Paragraphe>
          L'Utilisateur est entièrement responsable de tout contenu qu'il met en
          ligne et il s'engage à ne pas porter atteinte à un tiers.
        </Paragraphe>
        <Paragraphe>
          L'Éditeur du site se réserve le droit de modérer ou de supprimer
          librement et à tout moment les contenus mis en ligne par les
          utilisateurs, et ce sans justification.
        </Paragraphe>
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <H4 classe="my-1">ARTICLE 4 : Durée du contrat</H4>
        <Paragraphe>
          La durée du présent contrat est indéterminée. Le contrat produit ses
          effets à l'égard de l'Utilisateur à compter du début de l'utilisation
          du service.
        </Paragraphe>
      </div>
      <div className="flex flex-col gap-2">
        <H4 classe="my-1">
          ARTICLE 5 : Évolution des conditions générales d'utilisation
        </H4>
        <Paragraphe>
          Le site <strong>Bteach</strong> se réserve le droit de modifier les
          clauses de ces conditions générales d'utilisation à tout moment et
          sans justification.
        </Paragraphe>
      </div>
    </div>
  );
};

export default BodyRepeaterProfile;
