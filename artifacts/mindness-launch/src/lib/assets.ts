import chatImage from '@assets/screen-chat.png';
import animatedAvatarImage from '@assets/screen-animated-avatar.png';
import heroImage from '@assets/hero.png';
import introImage from '@assets/screen-companion-intro.png';
import practicesImage from '@assets/screen-practices.png';
import voiceImage from '@assets/screen-voice.png';
import welcomeImage from '@assets/screen-welcome.png';

export const images = {
  hero: heroImage,
  welcome: welcomeImage,
  companionIntro: introImage,
  practices: practicesImage,
  chat: chatImage,
  voice: voiceImage,
  animatedAvatar: animatedAvatarImage,
} as const;
