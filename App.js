import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const [isPro, setIsPro] = useState(false);
  const [proKey, setProKey] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [extraSignal, setExtraSignal] = useState(null);

  useEffect(() => {
    checkProStatus();
  }, []);

  const checkProStatus = async () => {
    try {
      const key = await AsyncStorage.getItem('proKey');
      if (key === 'valid_pro_key') { // Mock validation; replace with real check
        setIsPro(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateProKey = async () => {
    if (proKey === 'testkey') { // Mock key; in real, validate via API or Gumroad webhook
      await AsyncStorage.setItem('proKey', 'valid_pro_key');
      setIsPro(true);
      Alert.alert('Pro Unlocked!', 'Enjoy unlimited features.');
    } else {
      Alert.alert('Invalid Key', 'Please check your Pro key from Gumroad.');
    }
  };

  const pullFreshSignal = () => {
    // Mock on-demand signal generation; cycle through predefined or random
    const mockSignals = [
      {
        topic: 'BONUS LEVERAGE',
        edge: 'Bonus: Scale with delegation—hand off low-leverage tasks.',
        proof: 'Delegating boosts output 25% (McKinsey data).',
        action: 'Delegate one task today. Pro for more.',
      },
      {
        topic: 'BONUS MONEY',
        edge: 'Bonus: ETH layer-2 surge—watch ARB for 2x.',
        proof: 'Whales accumulating; TVL up 15%.',
        action: 'Check ARB on DEX. Pro for alerts.',
      },
      {
        topic: 'BONUS PEAK',
        edge: 'Bonus: Nootropic stack—Lion\'s Mane for cognition.',
        proof: 'Boosts focus 20% (studies n=1,200).',
        action: 'Try 500mg daily. Pro for customs.',
      },
    ];
    const randomSignal = mockSignals[Math.floor(Math.random() * mockSignals.length)];
    setExtraSignal(randomSignal);
  };

  const generateCustomSignal = () => {
    if (!customTopic) return Alert.alert('Enter Topic', 'Please enter a custom topic.');
    // Mock custom generation
    const custom = {
      topic: `CUSTOM: ${customTopic.toUpperCase()}`,
      edge: `Tailored insight for ${customTopic}: Act now to compound.`,
      proof: 'Based on your input—data-backed edge.',
      action: 'Apply this; request more in Pro.',
    };
    setExtraSignal(custom);
    setCustomTopic('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* EDGE LOGO */}
        <Image
          source={require('./assets/edge-logoo.jpg')}  // Assuming fixed
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

        {/* PRO SECTION */}
        {!isPro ? (
          <View style={styles.proSection}>
            <Text style={styles.proHeader}>Unlock Pro Features</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Pro Key from Gumroad"
              placeholderTextColor="#888"
              value={proKey}
              onChangeText={setProKey}
            />
            <TouchableOpacity style={styles.submitButton} onPress={validateProKey}>
              <Text style={styles.submitText}>Activate Pro</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.proSection}>
            <Text style={styles.proHeader}>Pro Unlocked!</Text>
            {/* On-Demand Pull */}
            <TouchableOpacity style={styles.pullButton} onPress={pullFreshSignal}>
              <Text style={styles.pullText}>Pull Fresh Signal</Text>
            </TouchableOpacity>
            {/* Custom Topic Form */}
            <TextInput
              style={styles.input}
              placeholder="Enter custom topic (e.g., SOL plays)"
              placeholderTextColor="#888"
              value={customTopic}
              onChangeText={setCustomTopic}
            />
            <TouchableOpacity style={styles.submitButton} onPress={generateCustomSignal}>
              <Text style={styles.submitText}>Generate Custom Signal</Text>
            </TouchableOpacity>
            {/* Display Extra/Custom Signal */}
            {extraSignal && (
              <View style={styles.card}>
                <Text style={styles.topic}>{extraSignal.topic}</Text>
                <Text style={styles.edge}>{extraSignal.edge}</Text>
                <Text style={styles.proof}>{extraSignal.proof}</Text>
                <Text style={styles.action}>{extraSignal.action}</Text>
              </View>
            )}
          </View>
        )}

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
  proSection: { width: '100%', alignItems: 'center', marginTop: 30, marginBottom: 30 },
  proHeader: { color: '#00ff88', fontSize: 20, fontWeight: '800', marginBottom: 20 },
  input: { width: '100%', backgroundColor: '#0f0f0f', color: '#fff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#00ff88', marginBottom: 10 },
  submitButton: { backgroundColor: '#00ff88', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 20, marginBottom: 20 },
  submitText: { color: '#000', fontSize: 18, fontWeight: '900' },
  pullButton: { backgroundColor: '#00ff88', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 20, marginBottom: 20 },
  pullText: { color: '#000', fontSize: 18, fontWeight: '900' },
});