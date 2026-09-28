import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { COLORS } from '../theme/colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação inicial antes de mandar para o Backend
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    console.log('Tentando autenticar usuário proprietário ARANDES...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* PARTE SUPERIOR ↓ IMAGEM (Regra 7) */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/logo/login-reference.jpg')} 
            style={styles.referenceImage}
            resizeMode="cover"
          />
        </View>

        {/* LOGO / NOME GLOBAL-BR */}
        <Text style={styles.title}>GLOBAL-BR</Text>

        {/* FORMULÁRIO DE LOGIN */}
        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor={COLORS.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor={COLORS.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* BOTÃO ENTRAR */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          {/* OPÇÕES ADICIONAIS */}
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Entrar com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.registerText}>Criar conta</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: 220,
    backgroundColor: COLORS.surface,
  },
  referenceImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 24,
    letterSpacing: 2,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  label: {
    color: COLORS.text,
    fontSize: 14,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: COLORS.surfaceSecondary,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.text,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    alignItems: 'center',
    marginTop: 16,
  },
  linkText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  registerText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    color: COLORS.textSecondary,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  googleButton: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  googleButtonText: {
    color: COLORS.text,
    fontSize: 16,
  },
});
          
