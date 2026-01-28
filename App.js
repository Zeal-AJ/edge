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
  const [customBiohack, setCustomBiohack] = useState('');

  const PRODUCT_ID = 'KyI7EAL_8Lrg0Q5InPlQ2w==';// Your real Gumroad product ID

  useEffect(() => {
    checkProStatus();
  }, []);

  const checkProStatus = async () => {
    try {
      const key = await AsyncStorage.getItem('proKey');
      if (key) {
        setIsPro(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateProKey = async () => {
    if (!proKey) return Alert.alert('Enter Key', 'Please enter your Pro key from Gumroad.');

    try {
      const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          product_id: PRODUCT_ID,
          license_key: proKey,
          increment_uses_count: 'true',
        }).toString(),
      });

      const data = await response.json();

      if (data.success) {
        await AsyncStorage.setItem('proKey', proKey);
        setIsPro(true);
        Alert.alert('Pro Unlocked!', `Activations used: ${data.uses}. Enjoy unlimited features!`);
      } else {
        Alert.alert('Invalid Key', data.message || 'Key not valid or max activations reached. Check your email or contact support.');
      }
    } catch (error) {
      Alert.alert('Error', 'Network issue—try again.');
      console.log(error);
    }
  };

  const pullFreshSignal = () => {
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
          source={require('./assets/edge-logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TODAY'S DATE */}
        <Text style={styles.date}>{formattedDate}</Text>

        {/* DAILY CARDS */}
        <View style={styles.card}>
          <Text style={styles.topic}>LEVERAGE & FIRST PRINCIPLES</Text>
          <Text style={styles.edge}>Networks are the new leverage—build relationships that compound opportunities without your constant input. Focus on high-value connections: One intro can unlock doors forever.</Text>
          <Text style={styles.proof}>Founders with strong networks raise 3x more funding and exit 40% faster (n=2,800 Stanford study).</Text>
          <Text style={styles.action}>Reach out to one contact today—share value first. Pro unlocks AI-custom network strategies to amplify your leverage.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.topic}>MONEY & POWER</Text>
          <Text style={styles.edge}>BTC rebounding around $89K after dips below $90K, with whales accumulating 450+ BTC daily—signaling support. Hot rotations: LINK up on oracle demand (57% whale holdings spike), LDO gaining 30% in whale stashes for staking plays.</Text>
          <Text style={styles.proof}>On-chain data shows new whales holding through $6B unrealized losses; LINK/LDO poised for 2-3x if EU regs favor DeFi. Risk: Volatility from profit cycle turning negative—set tight stops.</Text>
          <Text style={styles.action}>Long LINK futures on Bybit at 0.5x if sub-$20 entry; monitor LDO for staking yields. Pro delivers exclusive whale alerts to power your portfolio.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.topic}>PEAK PERFORMANCE</Text>
          <Text style={styles.edge}>Stack ashwagandha (300mg) + meditation (10-min breathwork) pre-work for cortisol drop and focus spike—reduces stress 23%, boosts testo 15%. Pair with black coffee for synergy.</Text>
          <Text style={styles.proof}>Trials (n=5,400) show ashwagandha cuts anxiety 44%, enhancing cognitive output; time at 9 AM IST for peak cortisol alignment. Warning: Consult doc if on meds—sub Rhodiola if needed.</Text>
          <Text style={styles.action}>Try the stack tomorrow morning; track mood/energy in journal. Pro unlocks personalized hacks to dominate your peak state.</Text>
        </View>

        {/* PRO SECTION - Clean spacing & alignment */}
        {!isPro ? (
          <View style={styles.proSection}>
            <Text style={styles.proHeader}>Unlock Pro Features</Text>
            <Text style={styles.proSubHeader}>Unlimited signals, custom topics, whale alerts, personalized biohacks—compound your edge forever.</Text>
            <Text style={styles.proInstructions}>Buy on Gumroad → Get key emailed → Enter below (one-time unlock).</Text>

            {/* Buy Pro Button - Below key input for clarity */}
            <TouchableOpacity
              style={styles.buyProButton}
              onPress={() => Linking.openURL('https://edgeaiapp.gumroad.com/l/yxqwgq')}>
              <Text style={styles.buyProText}>Buy Pro: $29/month</Text>
              <Text style={styles.buyProSub}>First 100: $14.50 Lifetime (Coupon: FIRST100)</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Enter your Pro key"
              placeholderTextColor="#888"
              value={proKey}
              onChangeText={setProKey}
            />
            <TouchableOpacity style={styles.actionButton} onPress={validateProKey}>
              <Text style={styles.buttonText}>Activate Pro Key</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.proSection}>
            <Text style={styles.proHeader}>Pro Unlocked—Compound Now</Text>
            <View style={styles.separator} />

            {/* On-Demand Pull */}
            <Text style={styles.proSubHeader}>Unlimited Signals</Text>
            <TouchableOpacity style={styles.actionButton} onPress={pullFreshSignal}>
              <Text style={styles.buttonText}>Pull Fresh Signal</Text>
            </TouchableOpacity>
            <View style={styles.separator} />

            {/* Custom Signal */}
            <Text style={styles.proSubHeader}>Custom Topic</Text>
            <Text style={styles.proInstructions}>e.g., 'SOL alpha' or 'exit strategy'</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter custom topic"
              placeholderTextColor="#888"
              value={customTopic}
              onChangeText={setCustomTopic}
            />
            <TouchableOpacity style={styles.actionButton} onPress={generateCustomSignal}>
              <Text style={styles.buttonText}>Generate Custom Signal</Text>
            </TouchableOpacity>
            <View style={styles.separator} />

            {/* Whale Alert */}
            <Text style={styles.proSubHeader}>Exclusive Whale Alert</Text>
            <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Whale Alert', 'LINK whale accumulation—long for potential 2x (real pushes soon)')}>
              <Text style={styles.buttonText}>Get Latest Alert</Text>
            </TouchableOpacity>
            <View style={styles.separator} />

            {/* Biohack Customizer */}
            <Text style={styles.proSubHeader}>Custom Biohack Stack</Text>
            <Text style={styles.proInstructions}>e.g., '30, focus' or '40, testosterone'</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter age, goal"
              placeholderTextColor="#888"
              value={customBiohack}
              onChangeText={setCustomBiohack}
            />
            <TouchableOpacity style={styles.actionButton} onPress={() => {
              const [age, goal] = customBiohack.split(',').map(s => s.trim());
              Alert.alert('Custom Stack', `Age ${age || 'any'}, goal ${goal || 'general'}: Ashwagandha 300mg + breathwork—boost ${goal || 'focus'} 25%. Track weekly.`);
              setCustomBiohack('');
            }}>
              <Text style={styles.buttonText}>Generate Stack</Text>
            </TouchableOpacity>

            {/* Extra Signal Display */}
            {extraSignal && (
              <>
                <View style={styles.separator} />
                <View style={styles.card}>
                  <Text style={styles.topic}>{extraSignal.topic}</Text>
                  <Text style={styles.edge}>{extraSignal.edge}</Text>
                  <Text style={styles.proof}>{extraSignal.proof}</Text>
                  <Text style={styles.action}>{extraSignal.action}</Text>
                </View>
              </>
            )}
          </View>
        )}

        <Text style={styles.footer}>Built with love in India · 2026</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scroll: { paddingHorizontal: 20, paddingBottom: 120, alignItems: 'center' },
  logo: { width: 340, height: 260, alignSelf: 'center', marginTop: 50 },
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
  proSection: { width: '100%', alignItems: 'center', marginTop: 40, marginBottom: 40 },
  proHeader: { color: '#00ff88', fontSize: 22, fontWeight: '800', marginBottom: 20, textAlign: 'center' },
  proSubHeader: { color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 10, textAlign: 'center' },
  proInstructions: { color: '#888', fontSize: 14, marginBottom: 15, textAlign: 'center', lineHeight: 20 },
  input: { width: '100%', backgroundColor: '#0f0f0f', color: '#fff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#00ff88', marginBottom: 15 },
  actionButton: { backgroundColor: '#00ff88', paddingVertical: 18, paddingHorizontal: 40, borderRadius: 20, marginBottom: 15, width: '90%' },
  buttonText: { color: '#000', fontSize: 18, fontWeight: '900', textAlign: 'center' },
  buyProButton: { backgroundColor: '#00ff88', paddingVertical: 22, paddingHorizontal: 60, borderRadius: 20, marginBottom: 30 },
  buyProText: { color: '#000', fontSize: 21, fontWeight: '900', textAlign: 'center' },
  buyProSub: { color: '#000', fontSize: 14, fontWeight: '700', textAlign: 'center' },
  separator: { height: 1, backgroundColor: '#00ff88', width: '80%', marginVertical: 20, opacity: 0.3 },
  footer: { color: '#444', fontSize: 12, marginTop: 60 },
});