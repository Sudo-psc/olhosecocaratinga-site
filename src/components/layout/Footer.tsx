import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & About */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Saraiva Vision Care</h2>
                        <p className="text-sm leading-relaxed mb-4">
                            Clínica especializada em oftalmologia clínica e cirúrgica, com foco em diagnóstico preciso e tratamento humanizado.
                        </p>
                        <div className="text-xs text-slate-500">
                            <p>CNPJ: 53.864.119/0001-79</p>
                            <p>Resp. Técnico: Dr. Philipe Saraiva Cruz</p>
                            <p>CRM-MG 69.870</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0" />
                                <span>
                                    Rua Catarina Maria Passos, 97<br />
                                    Santa Zita, Caratinga - MG<br />
                                    (Clínica Amor e Saúde)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                                <a href="tel:+5533998601427" className="hover:text-white transition-colors">
                                    (33) 99860-1427
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                                <a href="mailto:contato@saraivavision.com.br" className="hover:text-white transition-colors">
                                    contato@saraivavision.com.br
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-primary-400 transition-colors">Início</Link>
                            </li>
                            <li>
                                <Link href="/olho-seco" className="hover:text-primary-400 transition-colors">Olho Seco</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary-400 transition-colors">Blog Educativo</Link>
                            </li>
                            <li>
                                <Link href="/videos" className="hover:text-primary-400 transition-colors">Vídeos</Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-primary-400 transition-colors">Perguntas Frequentes</Link>
                            </li>
                            <li>
                                <Link href="/sobre-a-clinica" className="hover:text-primary-400 transition-colors">Sobre a Clínica</Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-primary-400 transition-colors">Contato</Link>
                            </li>
                            <li>
                                <a href="https://saraivavision.com.br/agendamento" className="hover:text-primary-400 transition-colors">Agendar Consulta</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours & Social */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Atendimento</h3>
                        <ul className="space-y-2 text-sm mb-6">
                            <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary-500" />
                                <span>Seg - Sex: 08:00 - 18:00</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary-500" />
                                <span>Sábado: 08:00 - 12:00</span>
                            </li>
                        </ul>

                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                                <Youtube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    <p>&copy; {currentYear} Saraiva Vision Care. Todos os direitos reservados.</p>
                    <p className="mt-2">
                        Este site tem caráter meramente informativo e não substitui aconselhamento médico profissional.
                    </p>
                </div>
            </div>
        </footer>
    )
}
