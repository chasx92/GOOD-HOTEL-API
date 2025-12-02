import React from 'react';
import { motion } from 'motion/react';

export function LegalNotice() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Édition du site</h2>
                            <p className="mb-2">
                                Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
                                l’économie numérique, il est précisé aux utilisateurs du site Unlocky l’identité des
                                différents intervenants dans le cadre de sa réalisation et de son suivi.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4 space-y-2">
                                <p><strong>L’entreprise individuelle :</strong> [Nom de l'entreprise]</p>
                                <p><strong>Située :</strong> [Adresse]</p>
                                <p><strong>Numéro de SIREN :</strong> [Numéro]</p>
                                <p><strong>E-mail :</strong> [Email]</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
                            <p className="mb-4">
                                Unlocky jouit pleinement de la propriété intellectuelle, et se réserve les droits d’usages de médias, notamment les textes, images, vidéos, etc…
                            </p>
                            <p className="mb-4">
                                Toute reproduction, modification, publication, adaptation des éléments du site par n’importe quel moyen est strictement interdite, sauf demande de contact préalable par mail à contact@unlocky.com
                            </p>
                            <p>
                                Toute exploitation non autorisée sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Liens et cookies</h2>
                            <p className="mb-4">
                                Le Site contient des liens hypertextes vers des sites partenaires ou d’information.
                                Le propriétaire du site n’a pas la possibilité de vérifier le contenu de ces sites et se décline donc de toute responsabilité quant aux risques éventuels de contenus illicites.
                            </p>
                            <p className="mb-4">
                                L’utilisateur est informé que lors de ses visites sur le Site, un ou des cookies sont susceptibles de s’installer automatiquement sur son ordinateur.
                            </p>
                            <p className="mb-4">
                                Un cookie est un fichier qui ne permet pas de collecter des données sur le présent visiteur, mais permet entre autre, de parfaire la navigation sur le site ainsi que de mesurer les affluences de celui-ci. Les cookies utilisés sur le site sont :
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Aucun</li>
                            </ul>
                            <p>
                                Vous pouvez désactiver vos cookies en suivant ce lien.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">RGPD et protection des données</h2>
                            <p className="mb-4">
                                Le Site ne collecte aucune information personnelle directement.
                                Le Site ne communique pas de données personnelles à des personnes tiers.
                            </p>
                            <p className="mb-4">
                                Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant.
                            </p>
                            <p>
                                Pour l’exercer, adressez votre demande par mail.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
