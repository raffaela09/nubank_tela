import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* aqui o stack carrega as tabs, e escolhe se vai ter header ou nao */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* No futuro, se você tiver telas que NÃO DEVEM mostrar a barra de abas 
        (como uma tela de Login, ou uma tela de 'Configurações do Perfil'), 
        você coloca elas aqui fora!
        Exemplo: <Stack.Screen name="login" /> 
      */}
    </Stack>
  );
}
