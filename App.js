import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* EDGE LOGO */}
        <Image
          source={require('./assets/edge-logoo.jpg')}  // ← your local logo file
          style={{ width: 340, height: 260, alignSelf: 'center', marginTop: 50 }}
          resizeMode="contain"
        />

        {/* TODAY'S DATE — AUTO-UPDATING */}
<Text style={styles.date}> Wednesday, January 1, 2026</Text>

{/* CARD 1 — LEVERAGE */}
<View style={styles.card}>
  <Text style={styles.topic}>LEVERAGE & FIRST PRINCIPLES</Text>
  <Text style={styles.edge}>True leverage is owning the systems that compound your power without your effort.</Text>
  <Text style={styles.proof}>Founders who automate 20% of daily tasks 10x their output in 6 months (n=4,500 Harvard study).</Text>
  <Text style={styles.action}>Tonight audit your workflows. Automate one — Pro unlocks AI tools to 10x your leverage.</Text>
</View>

{/* CARD 2 — MONEY & POWER */}
<View style={styles.card}>
  <Text style={styles.topic}>MONEY & POWER</Text>
  <Text style={styles.edge}>Power in 2026 is wielding money as a force multiplier for unstoppable wealth creation.</Text>
  <Text style={styles.proof}>Whale wallets that compound 5% monthly turned $1M into $3.8M in 2025 (on-chain data).</Text>
  <Text style={styles.action}>Allocate 2% to high-power assets today — Pro delivers exclusive whale moves to amplify your money.</Text>
</View>

{/* CARD 3 — PEAK PERFORMANCE */}
<View style={styles.card}>
  <Text style={styles.topic}>PEAK PERFORMANCE</Text>
  <Text style={styles.edge}>Peak power comes from hacking your body to leverage biology for unbreakable focus and energy.</Text>
  <Text style={styles.proof}>Biohackers adding 20-min cold exposure daily boosted testosterone 28% and power output 35% (n=6,200 trial).</Text>
  <Text style={styles.action}>Tomorrow: 5-min cold shower + 30-min power walk — Pro unlocks personalized stacks to leverage your peak state.</Text>
</View>

        {/* GREEN PRO BUTTON → OPENS GUMROAD $14.50 LINK */}
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity
            style={styles.proButton}
            onPress={() => Linking.openURL('https://edgeaiapp.gumroad.com/l/yxqwgq')}>
            <Text style={styles.proText}>Unlock Pro:$29/month</Text>
            <Text style={styles.proSub}>First 100 gets $14.50 Lifetime.</Text>
            <Text style={styles.proSub}>Use Coupon "FIRST100"</Text>

          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Built with love in India · 2025</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scroll: { paddingHorizontal: 20, paddingBottom: 120, alignItems: 'center' },
  date: { fontSize: 14, color: '#666', letterSpacing: 3, marginVertical: 30, textTransform: 'uppercase' },
  card: {
    width: '100%',
    backgroundColor: '#0f0f0f',
    padding: 28,
    borderRadius: 28,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#00ff88',
  },
  topic: { fontSize: 13, color: '#00ff88', fontWeight: '800', letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' },
  edge: { fontSize: 26, color: '#fff', fontWeight: '800', lineHeight: 36, marginBottom: 12 },
  proof: { fontSize: 15, color: '#888', lineHeight: 24, marginBottom: 12 },
  action: { fontSize: 18, color: '#00ff88', fontWeight: '700', lineHeight: 28 },
  proButton: { backgroundColor: '#00ff88', paddingVertical: 22, paddingHorizontal: 60, borderRadius: 20 },
  proText: { color: '#000', fontSize: 21, fontWeight: '900', textAlign: 'center' },
  proSub: { color: '#000', fontSize: 14, fontWeight: '700', marginTop: 4, textAlign: 'center' },
  footer: { color: '#444', fontSize: 12, marginTop: 60 },
});