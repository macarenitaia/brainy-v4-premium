import ServiceTabs from '@/components/sections/ServiceTabs';

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black pt-20">
            <div className="py-20">
                <ServiceTabs />
            </div>
        </main>
    );
}
