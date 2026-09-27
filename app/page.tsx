import PayButton from "./components/PayButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-creme text-encre">
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 max-w-md mx-auto text-center">
        <h1 className="font-titre text-[2.15rem] leading-[1.15] text-encre">
          Vous payez peut-être 300€ par an pour des abonnements que vous
          n'utilisez plus
        </h1>
        <p className="mt-5 text-encre/70 text-lg leading-relaxed">
          Déposez votre relevé bancaire. On retrouve en 2 minutes les
          prélèvements oubliés, et on prépare les lettres pour les arrêter.
        </p>

        <PayButton className="mt-8 w-full rounded-full bg-corail text-creme font-corps font-semibold text-lg py-4 px-6 active:scale-[0.98] transition-transform disabled:opacity-60" />
        <p className="mt-3 text-sm text-encre/50">
          Paiement unique. Résultat en 2 minutes.
        </p>
      </section>

      {/* Douleur chiffrée */}
      <section className="px-6 py-10 border-y border-encre/10 bg-encre/[0.03]">
        <div className="max-w-md mx-auto text-center">
          <p className="font-titre text-5xl text-corail">300€</p>
          <p className="mt-2 text-encre/70 leading-relaxed">
            C'est ce qu'un foyer français perd en moyenne chaque année en
            abonnements oubliés — souvent sans même s'en rendre compte.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="px-6 py-14 max-w-md mx-auto">
        <div className="space-y-10">
          <div>
            <h2 className="font-titre text-xl text-encre">
              Détection automatique
            </h2>
            <p className="mt-2 text-encre/70 leading-relaxed">
              Déposez votre relevé bancaire, on repère tous les prélèvements
              réguliers et on les classe par coût annuel.
            </p>
          </div>
          <div>
            <h2 className="font-titre text-xl text-encre">
              Lettres prêtes à envoyer
            </h2>
            <p className="mt-2 text-encre/70 leading-relaxed">
              Pour chaque abonnement repéré, une lettre de résiliation est
              générée automatiquement, prête à envoyer.
            </p>
          </div>
          <div>
            <h2 className="font-titre text-xl text-encre">
              Total économisé, mis à jour
            </h2>
            <p className="mt-2 text-encre/70 leading-relaxed">
              Voyez tout de suite ce que vous récupérez sur l'année, et
              suivez la somme au fur et à mesure des résiliations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="payer" className="px-6 pb-16 max-w-md mx-auto text-center">
        <div className="rounded-2xl border border-encre/10 p-8">
          <h2 className="font-titre text-2xl text-encre">
            Prêt à voir ce que vous perdez ?
          </h2>
          <p className="mt-3 text-encre/70 leading-relaxed">
            Un paiement, un dépôt de relevé, et vos abonnements oubliés
            n'ont plus nulle part où se cacher.
          </p>
          <PayButton className="mt-6 w-full rounded-full bg-corail text-creme font-corps font-semibold text-lg py-4 px-6 active:scale-[0.98] transition-transform disabled:opacity-60" />
          <p className="mt-3 text-sm text-encre/50">
            Paiement sécurisé par Stripe.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-encre/10">
        <div className="max-w-md mx-auto flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm text-encre/50">
          <a href="/mentions-legales" className="hover:text-encre/80">Mentions légales</a>
          <a href="/cgv" className="hover:text-encre/80">CGV</a>
          <a href="/confidentialite" className="hover:text-encre/80">Confidentialité</a>
        </div>
      </footer>
    </main>
  );
}
