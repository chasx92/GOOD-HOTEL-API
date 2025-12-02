import React from 'react';
import { motion } from 'motion/react';

export function TermsOfSales() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>

                    <div className="space-y-8 text-gray-600">
                        <p className="italic">
                            Le client reconnaît en avoir pris connaissance lors de la validation du devis.
                        </p>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Prestations</h2>
                            <p className="mb-4">
                                Celles-ci peuvent être définies sur demande du lundi au vendredi, de 10h à 19h via :
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Site web :</li>
                                <li>Téléphone :</li>
                                <li>E-mail :</li>
                            </ul>
                            <p className="mb-4">
                                Chaque demande est suivie par un ou plusieurs rendez-vous avec le client de manière à définir ses besoins et à réaliser avec lui son projet.
                                Le client s’engage à fournir l’intégralité des documents demandés par le prestataire au cours de ces rendez-vous.
                                Les prestations seront réalisées dans un délai fixé par le prestataire en fonction de l’ampleur de la tâche.
                                Le prestataire s’engage à réaliser et fournir les travaux demandés.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Prix</h2>
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
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Livraison</h2>
                            <p className="mb-4">
                                Le prestataire fournira l’ensemble des informations et des composants nécessaires à l’installation de la prestation.
                                Il communiquera par la même occasion l’ensemble des codes d’accès au client si besoin (Google Search Console, Analytics, Base de données, SFTP, etc…).
                                Une notice d’utilisation pourra être demandée par le client en fonction des types de travaux effectués sur son site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Réclamation</h2>
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
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Paiement</h2>
                            <p className="mb-4">
                                La prestation est réglée par chèque ou par virement bancaire. Un RIB vous sera fourni le cas échéant.
                            </p>
                            <p className="mb-4">
                                Le paiement comptant peut être exigé pour la prestation à réaliser.
                            </p>
                            <p className="mb-4">
                                Le délai maximal de paiement est fixé par défaut au 30e jour suivant la réception ou l’exécution de la prestation.
                            </p>
                            <p>
                                Passé ce délai, le client s’expose à des frais de recouvrement et à des modalités de non-paiement figurant ci-après.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Non-paiement</h2>
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
                                Tous les litiges découlant des prestations de services fournies par Pierre Viéville seront soumis au tribunal, ce qui est expressément accepté par le client.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Droits d’utilisation</h2>
                            <p>
                                Les droits cédés sur les travaux ne seront considérés comme acquis qu’au règlement complet de votre facture et de ses éventuels avenants.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Limite de responsabilité</h2>
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
    );
}
