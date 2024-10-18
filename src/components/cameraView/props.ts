import { RefObject } from 'react';
import { Camera } from 'expo-camera';

export interface CameraViewProps {
  cameraRef: RefObject<typeof Camera>; 
  isRecording: boolean;
  onRecord: () => void;
  onStopRecording: () => void;
}
