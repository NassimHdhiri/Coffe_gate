import { CameraView } from "expo-camera";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Overlay } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const ScanTable = () => {
  const [visible, setVisible] = useState(false);
  const [barcodeData, setBarcodeData] = useState("");

  const handleBarcodeScanned = ({ data }) => {
    console.log('====================================');
    console.log("data", data);
    console.log('====================================');
    setBarcodeData(data);
    setVisible(true); // Show the overlay when a barcode is scanned
  };

  return (
    <SafeAreaView style={styles.container}>
      <CameraView 
        style={styles.camera}
        facing="back"
        onBarcodeScanned={handleBarcodeScanned}
      />
      <Overlay 
        isVisible={visible} 
        onBackdropPress={() => setVisible(false)} 
        overlayStyle={styles.overlay}
      >
        <Text style={styles.overlayText}>Scanned Data: {barcodeData}</Text>
      </Overlay>
    </SafeAreaView>
  );
};

export default ScanTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 16,
    textAlign: 'center',
    color:'white'
  },
});
