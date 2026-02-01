import Sectors from '@/components/sections/Sectors';

export default function SectoresPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black pt-20">
            <div className="py-20">
                <Sectors />
            </div>
        </main>
    );
}
