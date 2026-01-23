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
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* EDGE LOGO */}
        <Image
          source={require('./assets/edge-logoo.jpg')}  
          style={{ width: 340, height: 260, alignSelf: 'center', marginTop: 50 }}
          resizeMode="contain"
        />

        {/* TODAY'S DATE — AUTO-UPDATING */}
        <Text style={styles.date}>{formattedDate}</Text>

        {/* CARD 1 — LEVERAGE */}
        <View style={styles.card}>
          <Text style={styles.topic}>LEVERAGE & FIRST PRINCIPLES</Text>
          <Text style={styles.edge}>Networks are the new leverage—build relationships that compound opportunities without your constant input. Focus on high-value connections: One intro can unlock doors forever.</Text>
          <Text style={styles.proof}>Founders with strong networks raise 3x more funding and exit 40% faster (n=2,800 Stanford study).</Text>
          <Text style={styles.action}>Reach out to one contact today—share value first. Pro unlocks AI-custom network strategies to amplify your leverage.</Text>
        </View>

        {/* CARD 2 — MONEY & POWER */}
        <View style={styles.card}>
          <Text style={styles.topic}>MONEY & POWER</Text>
          <Text style={styles.edge}>BTC rebounding around $89K after dips below $90K, with whales accumulating 450+ BTC daily—signaling support. Hot rotations: LINK up on oracle demand (57% whale holdings spike), LDO gaining 30% in whale stashes for staking plays.</Text>
          <Text style={styles.proof}>On-chain data shows new whales holding through $6B unrealized losses; LINK/LDO poised for 2-3x if EU regs favor DeFi. Risk: Volatility from profit cycle turning negative—set tight stops.</Text>
          <Text style={styles.action}>Long LINK futures on Bybit at 0.5x if sub-$20 entry; monitor LDO for staking yields. Pro delivers exclusive whale alerts to power your portfolio.</Text>
        </View>

        {/* CARD 3 — PEAK PERFORMANCE */}
        <View style={styles.card}>
          <Text style={styles.topic}>PEAK PERFORMANCE</Text>
          <Text style={styles.edge}>Stack ashwagandha (300mg) + meditation (10-min breathwork) pre-work for cortisol drop and focus spike—reduces stress 23%, boosts testo 15%. Pair with black coffee for synergy.</Text>
          <Text style={styles.proof}>Trials (n=5,400) show ashwagandha cuts anxiety 44%, enhancing cognitive output; time at 9 AM IST for peak cortisol alignment. Warning: Consult doc if on meds—sub Rhodiola if needed.</Text>
          <Text style={styles.action}>Try the stack tomorrow morning; track mood/energy in journal. Pro unlocks personalized hacks to dominate your peak state.</Text>
        </View>
        {/* GREEN PRO BUTTON → OPENS GUMROAD $14.50 LINK */}
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity
            style={styles.proButton}
            onPress={() => Linking.openURL('https://edgeaiapp.gumroad.com/l/yxqwgq')}>
            <Text style={styles.proText}>Unlock Pro: $29/month</Text>
            <Text style={styles.proSub}>First 100 gets $14.50 Lifetime.</Text>
            <Text style={styles.proSub}>Use Coupon "FIRST100"</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Built with love in India · 2026</Text>
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