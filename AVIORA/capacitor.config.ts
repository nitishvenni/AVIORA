import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.91b9d08933a84b56afeaf4ab80634825',
  appName: 'fly-high-live-free',
  webDir: 'dist',
  server: {
    url: 'https://91b9d089-33a8-4b56-afea-f4ab80634825.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    }
  }
};

export default config;
