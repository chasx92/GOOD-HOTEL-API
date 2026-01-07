import React from 'react';
import { motion } from 'motion/react';
import { LegalNavbar } from '../components/LegalNavbar';

export function TermsOfSales() {
    return (
        <>
            <LegalNavbar />
            <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">Conditions Générales de Vente</h1>
                        <div className="h-1 w-20 bg-[#C3A36E] rounded-full mb-8"></div>

                        <div className="space-y-10 text-gray-600 leading-relaxed font-light text-[15px] md:text-base">
                            <p className="italic text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                Le client reconnaît en avoir pris connaissance lors de la validation du devis.
                            </p>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">1</span>
                                    Prestations
                                </h2>
                                <p className="mb-4">
                                    Celles-ci peuvent être définies sur demande du lundi au vendredi, de 10h à 19h via :
                                </p>
                                <ul className="space-y-2 mb-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3A36E]"></span>
                                        <span className="font-medium text-gray-900">Site web :</span> Unlocky.fr
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3A36E]"></span>
                                        <span className="font-medium text-gray-900">Téléphone :</span> 06 95 85 77 56
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3A36E]"></span>
                                        <span className="font-medium text-gray-900">E-mail :</span> contact@unlocky.fr
                                    </li>
                                </ul>
                                <p className="mb-4">
                                    Chaque demande est suivie par un ou plusieurs rendez-vous avec le client de manière à définir ses besoins et à réaliser avec lui son projet.
                                    Le client s’engage à fournir l’intégralité des documents demandés par le prestataire au cours de ces rendez-vous.
                                    Les prestations seront réalisées dans un délai fixé par le prestataire en fonction de l’ampleur de la tâche.
                                    Le prestataire s’engage à réaliser et fournir les travaux demandés.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">2</span>
                                    Prix
                                </h2>
                                <p className="mb-4">
                                    Le prix des prestations concernant les établissements sont variables en fonction des besoins du client.
                                </p>
                                <p className="mb-4">
                                    Toutefois, il existe des prix de base (à demander au prestataire). Le prestataire peut demander au client un premier règlement pouvant aller à hauteur de 30% du prix lors de la prise de commande. Le restant sera versé lors de la livraison du produit.
                                </p>
                                <p>
                                    Le prix des sites web ne prend pas en compte la maintenance, le nom de domaine, l’hébergement et les services tiers payants du site sauf si ceux-ci sont précisés dans le devis.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">3</span>
                                    Livraison
                                </h2>
                                <p className="mb-4">
                                    Le prestataire fournira l’ensemble des informations et des composants nécessaires à l’installation de la prestation.
                                    Il communiquera par la même occasion l’ensemble des codes d’accès au client si besoin (Google Search Console, Analytics, Base de données, SFTP, etc…).
                                    Une notice d’utilisation pourra être demandée par le client en fonction des types de travaux effectués sur son site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">4</span>
                                    Réclamation
                                </h2>
                                <p className="mb-4">
                                    Toute demande de nouvelle fonctionnalité n’ayant pas été listée lors de la validation du devis initial fera l’objet d’une nouvelle prestation.
                                    Des modifications mineures (hors bugs) seront possibles lors de la validation du site avec le client.
                                </p>
                                <p className="mb-4">
                                    Les bugs et/ou problèmes d’affichages divers susceptibles d’être découverts après finalisation de la prestation seront corrigés gratuitement dans un délai de 30 jours ouvrables.
                                </p>
                                <p className="mb-4">
                                    Une fois la prestation réalisée et validée, ainsi que les délais précédemment évoqués dépassés, les modifications et les corrections feront l’objet d’une nouvelle intervention.
                                </p>
                                <p>
                                    Toute demande de remboursement ne sera pas prise en compte par le prestataire une fois le règlement effectué.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">5</span>
                                    Paiement
                                </h2>
                                <p className="mb-4">
                                    La prestation est réglée par chèque ou par virement bancaire. Un RIB vous sera fourni le cas échéant.
                                </p>
                                <p className="mb-4">
                                    Le paiement content peut être exigé pour la prestation à réaliser.
                                </p>
                                <p className="mb-4">
                                    Le délai maximal de paiement est fixé par défaut au 30e jour suivant la réception ou l’exécution de la prestation.
                                </p>
                                <p>
                                    Passé ce délai, le client s’expose à des frais de recouvrement et à des modalités de non-paiement figurant ci-après.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">6</span>
                                    Non-paiement
                                </h2>
                                <p className="mb-4">
                                    En cas de retard de paiement ou de non-paiement, le client devra selon la loi, honorer des frais de recouvrement s’élevant du montant indiqué sur la facture éditée et envoyée au client.
                                </p>
                                <p className="mb-4">
                                    De même, celui-ci devra régler en plus, et pour chaque mois de retard, une indemnité forfaitaire cumulable s’élevant à un % du montant total de la prestation.
                                    Ce montant en % est indiquée également sur la facture éditée et envoyée au client.
                                </p>
                                <p className="mb-4">
                                    Le client s’engage à répondre devant la loi pour acte de non-paiement d’une prestation réalisée et facturée.
                                </p>
                                <p>
                                    Tous les litiges découlant des prestations de services fournies par Samuel Chetrit seront soumis au tribunal, ce qui est expressément accepté par le client.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">7</span>
                                    Droits d’utilisation
                                </h2>
                                <p>
                                    Les droits cédés sur les travaux ne seront considérés comme acquis qu’au règlement complet de votre facture et de ses éventuels avenants.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">8</span>
                                    Limite de responsabilité
                                </h2>
                                <p className="mb-4">
                                    Toute information relative au produit peut faire l’objet de modifications à tout moment et ne sont données qu’à titre indicatif.
                                </p>
                                <p className="mb-4">
                                    Le prestataire se dégage de toute responsabilité quant à l’utilisation par le client des prestations réalisées.
                                </p>
                                <p>
                                    De même pour les problèmes extérieurs survenus suite à la mise en place du produit sur un site internet existant.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
