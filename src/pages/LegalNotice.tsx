import React from 'react';
import { motion } from 'motion/react';
import { LegalNavbar } from '../components/LegalNavbar';
import { Footer } from '../components/Footer';

export function LegalNotice() {
    return (
        <>
            <LegalNavbar />
            <div className="min-h-screen bg-[#F2F2F7] pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">Mentions Légales</h1>
                        <div className="h-1 w-20 bg-[#C3A36E] rounded-full mb-8"></div>

                        <div className="space-y-10 text-gray-600 leading-relaxed font-light text-[15px] md:text-base">
                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">1</span>
                                    Édition du site
                                </h2>
                                <p className="mb-4">
                                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
                                    l’économie numérique, il est précisé aux utilisateurs du site Unlocky l’identité des
                                    différents intervenants dans le cadre de sa réalisation et de son suivi.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6 space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Site</h3>
                                        <p>Unlocky</p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Édition du site</h3>
                                        <p>L’entreprise individuelle :</p>
                                        <p>Située :</p>
                                        <p>Le numéro de SIREN de l’éditeur est :</p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Nous contacter</h3>
                                        <p>Par téléphone : 06 95 85 77 56</p>
                                        <p>Par e-mail : contact@unlocky.fr</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">2</span>
                                    Propriété intellectuelle
                                </h2>
                                <p className="mb-4">
                                    Unlocky jouit pleinement de la propriété intellectuelle, et se réserve les droits d’usages de médias, notamment les textes, images, vidéos, etc…
                                </p>
                                <p className="mb-4">
                                    Toute reproduction, modification, publication, adaptation des éléments du site par n’importe quel moyen est strictement interdite, sauf demande de contact préalable par mail à contact@unlocky.fr.
                                </p>
                                <p>
                                    Toute exploitation non autorisée sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">3</span>
                                    Liens et cookies
                                </h2>
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
                                <ul className="list-disc pl-5 mb-4 bg-gray-50 p-4 rounded-lg border border-gray-100 inline-block pr-12">
                                    <li>Aucun</li>
                                </ul>
                                <p>
                                    Vous pouvez désactiver vos cookies en suivant ce lien.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">4</span>
                                    RGPD et protection des données
                                </h2>
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
            <Footer />
        </>
    );
}
