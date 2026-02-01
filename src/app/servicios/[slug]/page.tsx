import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import ChatAgent from '@/components/chat/ChatAgent';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceConflict from '@/components/sections/ServiceConflict';
import LiveDemoHook from '@/components/sections/LiveDemoHook';
import ClosingCTA from '@/components/sections/ClosingCTA';
import { services } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) notFound();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            <Navbar />

            {/* HERO SECTION - The Disruption */}
            <ServiceHero
                title={service.title}
                hook={service.hook}
                icon={service.icon}
                accentColor={service.accentColor}
            />

            {/* CONFLICT SECTION - The Agitation */}
            <ServiceConflict
                title={service.conflict.title}
                problem={service.conflict.problem}
                points={service.conflict.points}
            />

            {/* MECHANISM SECTION - The Revelation */}
            <section className="py-24 px-6 bg-white text-black overflow-hidden relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">
                            EL <span className="text-neon-pink drop-shadow-[4px_4px_0px_#000]">MECANISMO</span> <br />
                            ÚNICO
                        </h2>
                        <h3 className="text-3xl font-black uppercase mb-6">{service.mechanism.title}</h3>
                        <p className="text-2xl font-bold mb-12 italic opacity-80">
                            {service.mechanism.description}
                        </p>

                        <div className="space-y-4">
                            {service.mechanism.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border-l-8 border-black bg-black/5">
                                    <ArrowRight className="w-8 h-8 shrink-0" />
                                    <p className="text-xl font-black uppercase text-black">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className={`absolute inset-0 ${service.accentColor.replace('text-', 'bg-')} blur-[100px] opacity-20`} />
                        <div className="relative border-8 border-black p-12 bg-white rotate-2 hover:rotate-0 transition-transform cursor-default">
                            <div className="text-8xl mb-8 flex justify-center">
                                {service.icon}
                            </div>
                            <div className="space-y-6 font-mono font-bold text-sm uppercase">
                                <div className="p-2 bg-black text-white w-fit tracking-tighter">ENGINE_STATUS: NOMINAL</div>
                                <div className="p-2 border-2 border-black w-fit tracking-tighter">CORE: brAIny_V2.0_STABLE</div>
                                <div className="p-2 border-2 border-black w-fit tracking-tighter">LATENCY: &lt;150ms</div>
                                <div className="p-2 border-2 border-black w-fit tracking-tighter">ACCURACY: DETERMINISTIC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIVE DEMO SECTION - The Proof */}
            <LiveDemoHook />

            {/* CLOSING SECTION - The Decision */}
            <div id="contacto">
                <ClosingCTA />
            </div>

            <ChatAgent />
        </main>
    );
}
