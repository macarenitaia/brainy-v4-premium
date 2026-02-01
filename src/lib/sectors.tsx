import { Building2, Stethoscope, ShoppingBag, Utensils } from 'lucide-react';
import { ReactNode } from 'react';

export interface SectorDetail {
    slug: string;
    title: string;
    hook: string;
    conflict: {
        title: string;
        problem: string;
        points: string[];
    };
    solution: {
        title: string;
        description: string;
        benefits: string[];
    };
    icon: ReactNode;
    accentColor: string;
}

export const sectors: Record<string, SectorDetail> = {
    'clinicas': {
        slug: 'clinicas',
        title: 'Clínicas y Salud',
        hook: 'CADA CITA PERDIDA ES UN TRATAMIENTO QUE SE LLEVA TU COMPETENCIA.',
        conflict: {
            title: 'El Caos de la Recepción',
            problem: 'Tu equipo está saturado, los pacientes cuelgan el teléfono por falta de respuesta rápida y el agendado manual genera huecos imposibles de llenar.',
            points: [
                'Pérdida de un 30% de citas por llamadas no contestadas.',
                'Falta de seguimiento en presupuestos de alto valor.',
                'Cancelaciones de última hora sin recambio automático.',
                'Información de pacientes fragmentada y difícil de usar.'
            ]
        },
        solution: {
            title: 'Sincronía Médica Determinista',
            description: 'brAIny_CORE toma el control de tu agenda, califica a los pacientes y persigue los presupuestos hasta el cierre. Sin error humano.',
            benefits: [
                'Respuesta inmediata a dudas médicas comunes 24/7.',
                'Filtrado de pacientes por seguro o presupuesto.',
                'Sincronización total con tu software de gestión clínica.',
                'Aumento del 40% en la aceptación de presupuestos.'
            ]
        },
        icon: <Stethoscope className="w-16 h-16" />,
        accentColor: 'text-neon-lime'
    },
    'inmobiliarias': {
        slug: 'inmobiliarias',
        title: 'Real Estate',
        hook: 'DEJA DE PERSEGUIR CURIOSOS Y EMPIEZA A CERRAR INVERSORES.',
        conflict: {
            title: 'La Inundación de Leads Fríos',
            problem: 'Pasas el 80% del tiempo filtrando gente que solo quiere "mirar", mientras que los compradores reales se van a otra inmobiliaria más rápida.',
            points: [
                'Portales inmobiliarios saturados de ruido.',
                'Dificultad para calificar la liquidez del comprador al instante.',
                'Gestión ineficiente de visitas que nunca se concretan.',
                'Falta de memoria sobre las preferencias exactas de cada inversor.'
            ]
        },
        solution: {
            title: 'Filtro y Conexión de Alta Velocidad',
            description: 'brAIny actúa como tu primer filtro de élite, calificando leads financieros y agendando visitas solo para interesados reales.',
            benefits: [
                'Calificación financiera instantánea vía WhatsApp/Chat.',
                'Tours virtuales asistidos por IA con respuesta táctica.',
                'Seguimiento autónomo de carteras de inversión.',
                'Reducción del 60% en el tiempo de captación-venta.'
            ]
        },
        icon: <Building2 className="w-16 h-16" />,
        accentColor: 'text-neon-pink'
    },
    'ecommerce': {
        slug: 'ecommerce',
        title: 'E-commerce & SaaS',
        hook: 'EL 70% DE TUS VENTAS MUERE EN EL CARRITO. RECUPÉRALAS AHORA.',
        conflict: {
            title: 'La Fuga de Ingresos Masiva',
            problem: 'Tienes tráfico pero no tienes conversión personalizada. El soporte genérico mata el deseo de compra en el momento crítico.',
            points: [
                'Abandono de carrito por dudas técnicas no resueltas.',
                'Soporte post-venta lento que quema la reputación de marca.',
                'Falta de up-selling estratégico en tiempo real.',
                'Incapacidad de personalizar la oferta a gran escala.'
            ]
        },
        solution: {
            title: 'Conversión a Escala Infinita',
            description: 'brAIny_CORE se integra en tu embudo para resolver dudas, recuperar carritos y cerrar ventas masivas con persuasión personalizada.',
            benefits: [
                'Recuperación proactiva de carritos mediante PNL.',
                'Soporte técnico autónomo que libera al equipo humano.',
                'Personalización de ofertas basada en comportamiento real.',
                'Disponibilidad total en picos de tráfico (Black Friday, etc.).'
            ]
        },
        icon: <ShoppingBag className="w-16 h-16" />,
        accentColor: 'text-white'
    },
    'hosteleria': {
        slug: 'hosteleria',
        title: 'Hostelería & Gastro',
        hook: 'TU TELÉFONO ES UNA MÁQUINA DE PERDER DINERO CUANDO ESTÁS LLENO.',
        conflict: {
            title: 'El Estrés de la Reserva',
            problem: 'Llamadas perdidas durante el servicio, errores en el libro de reservas y mesas vacías por "no-shows" que nadie reclama.',
            points: [
                'Pérdida de clientes en horas punta por falta de atención.',
                'Gestión ineficiente de grupos grandes y eventos.',
                'Falta de base de datos de clientes para fidelización real.',
                'Rotación de personal que olvida protocolos de reserva.'
            ]
        },
        solution: {
            title: 'Gestión de Mesas Determinista',
            description: 'brAIny gestiona tus reservas por voz o texto, confirma la asistencia y fideliza a tus comensales después de la visita.',
            benefits: [
                'Toma de reservas autónoma 24/7 sin errores.',
                'Confirmación y cobro de depósitos para evitar no-shows.',
                'Campañas de fidelización automática tras la experiencia.',
                'Sincronización con TPVs y sistemas de gestión de sala.'
            ]
        },
        icon: <Utensils className="w-16 h-16" />,
        accentColor: 'text-neon-lime'
    }
};
