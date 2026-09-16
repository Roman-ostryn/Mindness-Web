export const assets = {
  hero: 'hero.png',
  screenPractices: 'screen-practices.png',
  screenChat: 'screen-chat.png',
  screenVoice: 'screen-voice.png',
  screenWelcome: 'screen-welcome.png',
  screenCompanionIntro: 'screen-companion-intro.png',
  screenCompanionSelectB: 'screen-companion-select-b.png',
  screenCompanionAccent: 'screen-companion-accent.png',
} as const;

export function asset(name: string): string {
  return `/assets/mindness/${name}`;
}
