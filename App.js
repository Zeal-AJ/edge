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
          <Text style={styles.edge}>Compounding is the ultimate leverage—start with one user, deliver insane value daily, and watch retention turn into evangelism. But remember: leverage without ownership is rented time. Own your code, own your audience, own the upside.</Text>
          <Text style={styles.proof}>Audit your GitHub repo today—lock down IP, add a killer README hook for acquirers scanning Acquire.com.</Text>
          <Text style={styles.action}>Pro unlocks custom leverage signals + AI tools to automate and compound your edge.</Text>
        </View>

        {/* CARD 2 — MONEY & POWER */}
        <View style={styles.card}>
          <Text style={styles.topic}>MONEY & POWER</Text>
          <Text style={styles.edge}>BTC's hovering at $85K post-halving echoes, but whales are rotating into AI infra plays like Render (RNDR) up 12% on enterprise adoption news. Low-cap gem: Watch Worldcoin (WLD)—iris scans hitting 10M users, potential 3x if privacy regs loosen in EU.</Text>
          <Text style={styles.proof}>Play: Long WLD futures on Bybit at 0.5x leverage if you're sub-$10 entry; set stop at -8%. Whale move: Mirror top holders via Arkham—0x... addresses dumping SOL for ETH layer-2s. Risk: Volatility spike incoming with Fed minutes tomorrow.</Text>
          <Text style={styles.action}>Pro delivers exclusive whale alpha + custom money signals to amplify your portfolio power.</Text>
        </View>

        {/* CARD 3 — PEAK PERFORMANCE */}
        <View style={styles.card}>
          <Text style={styles.topic}>PEAK PERFORMANCE</Text>
          <Text style={styles.edge}>Stack L-tyrosine (500mg) + caffeine (100mg) pre-deep work for dopamine surge without crash—boosts focus 30% per studies. Pair with 10-min cold shower (sub-15°C) to spike testosterone 15-20% naturally.</Text>
          <Text style={styles.proof}>Time it 9 AM IST for circadian alignment. Track via Whoop or simple journal; iterate weekly. Warning: Skip if caffeine-sensitive—sub green tea extract.</Text>
          <Text style={styles.action}>Pro unlocks personalized biohacks + stacks to leverage your peak state daily.</Text>
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