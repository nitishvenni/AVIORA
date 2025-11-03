import { useState, useEffect } from 'react';
import { Geolocation, Position } from '@capacitor/geolocation';

export const useGeolocation = (watchPosition = false) => {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let watchId: string | null = null;

    const getCurrentPosition = async () => {
      try {
        const permissions = await Geolocation.checkPermissions();
        
        if (permissions.location !== 'granted') {
          const request = await Geolocation.requestPermissions();
          if (request.location !== 'granted') {
            setError('Location permission denied');
            return;
          }
        }

        if (watchPosition) {
          watchId = await Geolocation.watchPosition({}, (position, err) => {
            if (err) {
              setError(err.message);
              return;
            }
            if (position) {
              setPosition(position);
            }
          });
        } else {
          const coordinates = await Geolocation.getCurrentPosition();
          setPosition(coordinates);
        }
      } catch (err) {
        setError((err as Error).message);
      }
    };

    getCurrentPosition();

    return () => {
      if (watchId) {
        Geolocation.clearWatch({ id: watchId });
      }
    };
  }, [watchPosition]);

  return { position, error };
};
