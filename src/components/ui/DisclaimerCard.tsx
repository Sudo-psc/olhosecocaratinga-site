import React from 'react'
import { AlertCircle } from 'lucide-react'

interface DisclaimerCardProps {
    className?: string
}

export function DisclaimerCard({ className = '' }: DisclaimerCardProps) {
    return (
        <div className={`rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 ${className}`}>
            <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600" />
                <div className="text-sm text-amber-800">
                    <p className="font-medium">Aviso Importante</p>
                    <p className="mt-1">
                        Este conteúdo tem caráter meramente informativo e educativo. Não substitui a avaliação médica presencial.
                        O diagnóstico e tratamento do olho seco dependem de exame clínico detalhado.
                    </p>
                    <p className="mt-2 text-xs text-amber-700/80">
                        Responsável Técnico: Dr. Philipe Saraiva Cruz - CRM-MG 69.870
                    </p>
                </div>
            </div>
        </div>
    )
}
