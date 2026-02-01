import { ShieldCheck, Zap, Eye, Microscope } from 'lucide-react';
import { ReactNode } from 'react';

export interface ServiceDetail {
    slug: string;
    title: string;
    hook: string;
    conflict: {
        title: string;
        problem: string;
        points: string[];
    };
    mechanism: {
        title: string;
        description: string;
        benefits: string[];
    };
    icon: ReactNode;
    color: string;
    accentColor: string;
}

export const services: Record<string, ServiceDetail> = {
    'la-guardiana': {
        slug: 'la-guardiana',
        title: 'La Guardiana',
        hook: 'DEJA DE PERDER DINERO POR HUECOS VACÍOS EN TU AGENDA.',
        conflict: {
            title: 'El Desangre Silencioso',
            problem: 'Cada hora sin un paciente/cliente en tu silla es rentabilidad que nunca vuelve. El coste de oportunidad te está matando.',
            points: [
                'Leads que mueren por no responder en menos de 5 minutos.',
                'Cancelaciones de última hora que dejan tu equipo parado.',
                'Gestión manual que quema el tiempo de tus mejores empleados.',
                'Falta de seguimiento en presupuestos ya entregados.'
            ]
        },
        mechanism: {
            title: 'Filtrado y Agendado Quirúrgico',
            description: 'La Guardiana no es un bot. Es un sistema de respuesta inmediata que califica, persigue y agenda con precisión clínica.',
            benefits: [
                'Respuesta en microsegundos 24/7/365.',
                'Calificación exhaustiva antes de agendar.',
                'Sincronización total con tu software de gestión actual.',
                'Recolección de depósitos previos para eliminar "no-shows".'
            ]
        },
        icon: <ShieldCheck className="w-16 h-16" />,
        color: 'border-neon-lime',
        accentColor: 'text-neon-lime'
    },
    'el-francotirador': {
        slug: 'el-francotirador',
        title: 'El Francotirador',
        hook: 'NO QUIERES MÁS LIKES. QUIERES MÁS VENTAS.',
        conflict: {
            title: 'El Limbo del "Me lo tengo que pensar"',
            problem: 'Tienes tráfico, tienes interés, pero el 90% de tus ventas se pierden en el proceso de decisión final.',
            points: [
                'Vendedores humanos que se cansan de rebatir siempre lo mismo.',
                'Objeciones de precio que nadie sabe resolver con lógica.',
                'Perdida de interés por falta de respuesta táctica en caliente.',
                'Inconsistencia en el tono de ventas de tu equipo.'
            ]
        },
        mechanism: {
            title: 'Persuasión High-Ticket con PNL',
            description: 'El Francotirador clona a tu mejor cerrador. Detecta el miedo y la duda, y responde con una precisión que fuerza el "SÍ".',
            benefits: [
                'Uso táctico de prueba social y escasez real.',
                'Persuasión basada en patrones lógicos y emocionales.',
                'Escalabilidad infinita: cierra 1.000 ventas a la vez.',
                'Reportes de fricción para mejorar tu oferta base.'
            ]
        },
        icon: <Zap className="w-16 h-16" />,
        color: 'border-neon-pink',
        accentColor: 'text-neon-pink'
    },
    'el-extintor': {
        slug: 'el-extintor',
        title: 'El Extintor',
        hook: 'RECUPEA EL 40% DE TU DÍA LIBERANDO A TU EQUIPO DEL SOPORTE.',
        conflict: {
            title: 'La Esclavitud del Ticket',
            problem: 'Tu equipo estratégico está atrapado respondiendo las mismas dudas básicas una y otra vez. Estás pagando talento senior por tareas junior.',
            points: [
                'Saturación de canales por dudas operativas simples.',
                'Clientes frustrados por esperar una respuesta técnica.',
                'Error humano en la entrega de información crítica.',
                'Falta de memoria corporativa en el soporte tradicional.'
            ]
        },
        mechanism: {
            title: 'Operativa sin Ruido',
            description: 'El Extintor conoce tus manuales mejor que tú. Resuelve incidencias al instante y solo escala lo que realmente importa.',
            benefits: [
                'Resolución autónoma del 80% de incidencias.',
                'Acceso instantáneo a toda la base de conocimiento.',
                'Tono impecable y paciente en cada interacción.',
                'Triaje automático para emergencias reales.'
            ]
        },
        icon: <Eye className="w-16 h-16" />,
        color: 'border-white',
        accentColor: 'text-white'
    },
    'cirugia-digital': {
        slug: 'cirugia-digital',
        title: 'Cirugía Digital',
        hook: 'DEJA DE COMPRAR SOFTWARE. EMPIEZA A CONSTRUIR ARMAS.',
        conflict: {
            title: 'El Caos de las Herramientas Enlatadas',
            problem: 'Adaptas tu negocio a las limitaciones de tu software, cuando debería ser exactamente al revés.',
            points: [
                'Procesos fragmentados en 5 herramientas que no se hablan.',
                'Falta de datos en tiempo real para tomar decisiones de peso.',
                'Sistemas lentos que lastran la escalabilidad operativa.',
                'Dependencia de soluciones que no son dueñas de tu dato.'
            ]
        },
        mechanism: {
            title: 'Infraestructura de Poder',
            description: 'No instalamos CRMs. Desarrollamos el sistema nervioso central de tu empresa con IA determinista.',
            benefits: [
                'Arquitectura API-First a medida de tu operativa.',
                'Bases de datos vectoriales con memoria infinita.',
                'Sistemas rápidos, seguros y 100% escalables.',
                'ROI medible en eficiencia de procesos clave.'
            ]
        },
        icon: <Microscope className="w-16 h-16" />,
        color: 'border-gray-500',
        accentColor: 'text-gray-400'
    }
};
