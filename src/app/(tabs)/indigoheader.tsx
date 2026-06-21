import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";

interface IndigoHeaderProps {
	currentPromo?: string;
}

export default function IndigoHeader({ currentPromo = "Father's Day gifts right on time. Buy now, pick up in store in 3 hours or less" }: IndigoHeaderProps) {
	const topLinks = ["Events", "Gift Cards", "plum Rewards", "Order Status", "Français"];
	const categories = ["Father's Day", "Books", "Kids' Books", "Teen & YA", "Bestsellers", "Gifts", "Toys", "Stationery", "Lifestyle", "Games & Hobbies", "Sale"];

	return (
		<View style={styles.headerContainer}>
			{/* Black Utility Utility Strip */}
			<View style={styles.utilityBar}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{topLinks.map((link, idx) => (
						<Text key={idx} style={styles.utilityText}>
							{link}
							{idx < topLinks.length - 1 ? "   |   " : ""}
						</Text>
					))}
				</ScrollView>
			</View>

			{/* Brand & Personal Bar */}
			<View style={styles.brandRow}>
				<Text style={styles.logo}>indigo</Text>
				<View style={styles.actionGroup}>
					<Text style={styles.actionText}>Sign In</Text>
					<Text style={styles.actionText}>Lists</Text>
					<Text style={styles.actionText}>Bag</Text>
				</View>
			</View>

			{/* Search Input field */}
			<View style={styles.searchWrapper}>
				<TextInput style={styles.searchInput} placeholder="Search by title, author or keywords" placeholderTextColor="#757575" />
			</View>

			{/* Horizontal Nav Categories */}
			<View style={styles.categoryBar}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 18 }}>
					{categories.map((cat, idx) => (
						<TouchableOpacity key={idx}>
							<Text style={[styles.categoryText, cat === "Father's Day" && styles.blueHighlight]}>{cat}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>

			{/* Ribbon Ticker */}
			<View style={styles.promoTicker}>
				<Text style={styles.tickerText}>‹ {currentPromo} ›</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: { backgroundColor: "#ffffff" },
	utilityBar: { backgroundColor: "#000000", paddingVertical: 6, paddingHorizontal: 16, alignItems: "flex-end" },
	utilityText: { color: "#ffffff", fontSize: 10, letterSpacing: 0.5 },
	brandRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingTop: 14 },
	logo: { fontSize: 28, fontWeight: "800", color: "#000000", letterSpacing: -1 },
	actionGroup: { flexDirection: "row", gap: 16 },
	actionText: { fontSize: 13, color: "#111111" },
	searchWrapper: { paddingHorizontal: 16, paddingTop: 10 },
	searchInput: { height: 40, borderWidth: 1, borderColor: "#cccccc", borderRadius: 20, paddingHorizontal: 16, fontSize: 13, backgroundColor: "#ffffff" },
	categoryBar: { paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
	categoryText: { fontSize: 13, fontWeight: "500", color: "#333333" },
	blueHighlight: { color: "#0056b3", fontWeight: "600" },
	promoTicker: { backgroundColor: "#f7f7f7", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#eeeeee", alignItems: "center" },
	tickerText: { fontSize: 11, color: "#222222", textAlign: "center", paddingHorizontal: 20 }
});
