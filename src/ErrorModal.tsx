import React, { useState } from "react";
import styles from "./styles";
import { Modal, Text, View, TouchableOpacity } from "react-native";

const ErrorModal = ({
  modalVisible,
  handleModalClose,
  modalText,
}: {
  modalVisible: boolean;
  handleModalClose: () => void;
  modalText: string;
}) => {
  const [time, setTime] = useState(20);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={handleModalClose}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.centeredModalView}
            onPress={() => {}}
          >
            <View style={styles.modalMainView}>
              <Text style={styles.modalText}>
                {modalText}
                {/* {timer} */}
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ErrorModal;
