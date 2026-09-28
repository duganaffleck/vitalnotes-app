import type { CompanionAppId } from './types'

// The two practice apps that sit beside the guide. Same family, same look.
export type CompanionApp = {
  id: CompanionAppId
  name: string
  url: string
  tagline: string
  action: string
}

export const companionApps: Record<CompanionAppId, CompanionApp> = {
  'scenario-generator': {
    id: 'scenario-generator',
    name: 'Scenario Generator',
    url: 'https://scenario-generator-ten.vercel.app/',
    tagline: 'Ontario PCP scenarios. Generate a call, run it, chart it.',
    action: 'Open the Scenario Generator',
  },
  'acr-review': {
    id: 'acr-review',
    name: 'ACR Review',
    url: 'https://scenario-generator-ten.vercel.app/#acr-review',
    tagline: 'Upload a practice ACR. Get feedback on what to fix first.',
    action: 'Open ACR Review',
  },
}
