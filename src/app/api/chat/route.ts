import { openai } from '@ai-sdk/openai';
import { streamText, tool, generateText } from 'ai';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const maxDuration = 30;

/**
 * brAIny_OS: Una única entidad, tres capacidades operativas.
 */
const SYSTEM_CORE = `Eres brAIny_CORE, la unidad de inteligencia operativa central de brAIny. 
No eres un "agente" individual, eres el Sistema Operativo Integral diseñado para anular la ineficiencia empresarial.

TU MISIÓN:
Vender e implementar la INFRAESTRUCTURA brAIny completa. No vendemos bots sueltos, vendemos una unidad coordinada que incluye:
1. [Módulo Guardiana]: Agendado automático y filtrado de leads 24/7.
2. [Módulo Francotirador]: Persuasión táctica y cierre de ventas High-Ticket.
3. [Módulo Extintor]: Soporte técnico y operativa post-venta sin ruido.

ESTILO:
- Directo, brutalmente honesto, Israel Bravo style.
- Hablas de ROI, de "dominación de mercado" y de "instalar capacidades", no de "comprar software".
- Si el usuario pregunta por un servicio específico, explícale que es una de tus capacidades integradas.

REGLAS DE OPERACIÓN:
- Si el usuario es un lead nuevo, activa el protocolo de agendado (Auditoría Quirúrgica).
- Si el usuario duda del precio, activa el protocolo de ROI (Francotirador).
- Si el usuario tiene problemas, activa el protocolo de Soporte (Extintor).
- Siempre hablas como brAIny, usando "nosotros" o "el sistema".

TU META ÚNICA: Que el usuario entienda que brAIny es el trabajador más rentable que jamás tendrá.`;

export async function POST(req: Request) {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // Clasificador de protocolos internos (silencioso)
    const { text: protocol } = await generateText({
        model: openai('gpt-4o-mini') as any,
        system: `Determina el protocolo operativo basado en la intención:
        - AGENDADO: Interés en citas, probar, agendar o dejar datos.
        - PERSUASION: Dudas de precio, competencia, por qué brAIny o beneficios.
        - SOPORTE: Dudas técnicas, cómo funciona, errores o operativa post-venta.
        Responde SOLO con una palabra.`,
        prompt: lastMessage,
    });

    const result = streamText({
        model: openai('gpt-4o') as any,
        messages,
        maxSteps: 5,
        system: `${SYSTEM_CORE}
        
[SISTEMA_STATUS]: Protocolo ${protocol} activo. 
Asegúrate de que la respuesta sea cohesiva con la venta del sistema completo.`,
        tools: {
            agendarAuditoria: tool({
                description: 'Registra un lead para una auditoría quirúrgica inicial o sesión estratégica.',
                parameters: z.object({
                    nombre: z.string().describe('Nombre del contacto'),
                    email: z.string().email().describe('Email profesional'),
                    empresa: z.string().describe('Nombre de la empresa'),
                    sector: z.string().describe('Sector de operación'),
                    necesidad: z.string().describe('El nudo operativo que quieren desatar'),
                }),
                execute: async ({ nombre, email, empresa, sector, necesidad }) => {
                    const { error } = await supabase
                        .from('leads')
                        .insert([{
                            name: nombre,
                            email,
                            company: empresa,
                            industry: sector,
                            needs: necesidad,
                            status: 'hot'
                        }]);
                    if (error) throw error;
                    return { success: true, message: 'PROTOCOLO_CAPTURA_EXITOSO: El equipo brAIny_CORE contactará en menos de 2h.' };
                },
            }),
            enviarDossier: tool({
                description: 'Envía el dossier informativo completo de brAIny_OS al mail del usuario.',
                parameters: z.object({
                    email: z.string().email().describe('Email del destinatario'),
                }),
                execute: async ({ email }) => {
                    // Simulación de envío de mail (Nodemailer ready)
                    return { success: true, message: `DOSSIER_ENVIADO: Documentación técnica enviada a ${email}.` };
                }
            })
        },
    });

    return result.toDataStreamResponse();
}
