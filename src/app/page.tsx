import { Hero } from '@/components/sections/Hero'
import { WhatIsDryEye } from '@/components/sections/WhatIsDryEye'
import { Symptoms } from '@/components/sections/Symptoms'
import { Causes } from '@/components/sections/Causes'
import { DailyTips } from '@/components/sections/DailyTips'
import { Evaluation } from '@/components/sections/Evaluation'
import { Treatments } from '@/components/sections/Treatments'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateLocalBusinessSchema } from '@/lib/structured-data'

export default function Home() {
    const localBusinessSchema = generateLocalBusinessSchema()

    return (
        <>
            <StructuredData data={localBusinessSchema} />

            <main className="min-h-screen pt-20">
                <Hero />
                <WhatIsDryEye />
                <Symptoms />
                <Causes />
                <Evaluation />
                <Treatments />
                <WhyUs />
                <Testimonials />
                <DailyTips />
                <FAQSection />
                <CTASection />
            </main>
        </>
    )
}
