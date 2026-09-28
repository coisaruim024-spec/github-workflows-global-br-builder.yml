import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS } from '../theme/colors';

const POSTS_FAKE = [
  {
    id: '1',
    user: 'ARANDES',
    username: '@arandes',
    role: 'OWNER',
    date: 'Agora mesmo',
    content: 'Sejam bem-vindos ao ambiente oficial do GLOBAL-BR! O comando mestre de desenvolvimento foi iniciado.',
    likes: 12,
    comments: 4
  },
  {
    id: '2',
    user: 'Membro Global',
    username: '@user99',
    role: 'MEMBER',
    date: 'Há 10 min',
    content: 'A interface em tema preto ficou sensacional, muito parecida com a fluidez clássica que usávamos antes.',
    likes: 5,
    comments: 1
  }
];

export default function HomeScreen() {
  const [posts, setPosts] = useState(POSTS_FAKE);

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GLOBAL-BR</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.userInfo}>
              <View style={styles.avatarPlaceholder} />
              <View style={styles.userTextContainer}>
                <View style={styles.nameRow}>
                  <Text style={styles.userName}>{item.user}</Text>
                  {item.role === 'OWNER' && <Text style={styles.badgeOwner}>OWNER</Text>}
                </View>
                <Text style={styles.userTag}>{item.username} • {item.date}</Text>
              </View>
            </View>

            <Text style={styles.postContent}>{item.content}</Text>

            <View style={styles.actionsBar}>
              <TouchableOpacity style={styles.actionBtn} onPress={() => handleLike(item.id)}>
                <Text style={styles.actionText}>❤️ {item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionText}>💬 {item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionText}>🔗 Compartilhar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { height: 60, backgroundColor: COLORS.surface, justifyContent: 'center', paddingHorizontal: 16, borderBottomWidth: 1, borderColor: COLORS.border },
  headerTitle: { color: COLORS.text, fontSize: 20, fontWeight: 'bold', letterSpacing: 1 },
  postCard: { backgroundColor: COLORS.surface, marginVertical: 6, padding: 16, borderBottomWidth: 1, borderColor: COLORS.border },
  userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatarPlaceholder: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.surfaceSecondary, borderWidth: 1, borderColor: COLORS.border },
  userTextContainer: { marginLeft: 12 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  userName: { color: COLORS.text, fontWeight: 'bold', fontSize: 15 },
  badgeOwner: { backgroundColor: '#FF3B30', color: '#FFF', fontSize: 10, fontWeight: 'bold', marginLeft: 8, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  userTag: { color: COLORS.textSecondary, fontSize: 12, marginTop: 2 },
  postContent: { color: COLORS.text, fontSize: 15, lineHeight: 22, marginBottom: 14 },
  actionsBar: { flexDirection: 'row', borderTopWidth: 1, borderColor: COLORS.surfaceSecondary, paddingTop: 10 },
  actionBtn: { marginRight: 24, flexDirection: 'row', alignItems: 'center' },
  actionText: { color: COLORS.textSecondary, fontSize: 13 }
});
  
