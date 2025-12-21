import { NextResponse } from 'next/server';

/**
 * Health Check Endpoint
 * Usado pelo Docker e monitoramento para verificar se a aplicação está funcionando
 */
export async function GET() {
    try {
        // Aqui você pode adicionar verificações adicionais
        // Por exemplo: conexão com banco de dados, serviços externos, etc.

        const healthCheck = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV,
            version: process.env.npm_package_version || '1.0.0',
        };

        return NextResponse.json(healthCheck, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                status: 'error',
                timestamp: new Date().toISOString(),
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 503 }
        );
    }
}
