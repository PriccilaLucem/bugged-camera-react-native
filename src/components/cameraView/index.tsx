import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera"; // Ensure correct import
import { CameraViewProps } from "./props"; // Assuming you have defined props
import { styles } from "./styles"; // Assuming styles are defined elsewhere

export default function CameraView({
  cameraRef,
  isRecording,
  onRecord,
  onStopRecording,
}: CameraViewProps) {
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={isRecording ? onStopRecording : onRecord}
          style={styles.buttonRecord}
        >
          <Text style={styles.buttonText}>
            {isRecording ? "Stop Recording" : "Start Record"}
          </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
