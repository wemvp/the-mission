import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { emailValidator } from "../../core/utils";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import { theme } from "../../config/theme";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import { sendPasswordResetEmail } from "firebase/auth/react-native";
import { fbAuth } from "../../services/firebase";
import { translateFBError } from "../../core/translate";

type Props = {
  navigation: Navigation;
};

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: "", error: "" });

  const [dialogMessage, setDialogMessage] = useState({ title: "", message: "" });
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => {
    setVisible(false);
    navigation.navigate("LoginScreen");
  };

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    } else {
      sendPasswordResetEmail(fbAuth, email.value)
        .then(() => {
          setDialogMessage({
            title: "Reset Link Sent",
            message: `Password reset link has been sent to ${email.value}`,
          });
          showDialog();
        })
        .catch((error) => {
          const message = translateFBError(error);
          if (message) {
            setDialogMessage({ title: "Error", message });
            showDialog();
          }
        });
    }
  };

  return (
    <Background>
      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
      <Dialog
        visible={visible}
        title={dialogMessage.title}
        message={dialogMessage.message}
        onClose={hideDialog}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: "100%",
  },
});

export default memo(ForgotPasswordScreen);
