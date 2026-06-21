import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IndigoHeader from "./indigoheader";

export default function EventsScreen() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top"]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<IndigoHeader currentPromo="Get a Picnic Blanket for $19.99 (reg. price $39.99) when you spend $30 or more." />

				<View style={styles.topHeadingBlock}>
					<Text style={styles.mainTitle}>What's on at Indigo</Text>
					<Text style={styles.subtext}>Join us online and in-store for awesome events and experiences every week, from storytime for kids, to author interviews and more!</Text>
				</View>

				{/* Summer Play Days Campaign Ribbon Banner */}
				<View style={styles.campaignBanner}>
					<Text style={styles.campaignTitle}>Summer Play Days</Text>
					<Text style={styles.campaignDesc}>Join us on Saturdays in July and August for fun story times and events at 11 a.m. and 1 p.m.</Text>
					<TouchableOpacity style={styles.reserveBtn}>
						<Text style={styles.reserveText}>Reserve Now</Text>
					</TouchableOpacity>
				</View>

				{/* Filters Grid */}
				<View style={styles.filterRow}>
					<View style={styles.dropdown}>
						<Text style={styles.dropdownText}>All Provinces ▾</Text>
					</View>
					<View style={styles.dropdown}>
						<Text style={styles.dropdownText}>All Event Types ▾</Text>
					</View>
				</View>

				{/* Structured Event Component Card */}
				<View style={styles.eventCard}>
					<View style={styles.cardGraphicRow}>
						<View style={styles.eventImageMock}>
							<Text style={styles.ageBadge}>Ages 4+</Text>
							<Text style={styles.artText}>Best Dad Ever</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={styles.eventDate}>June 19 @ 5pm (local)</Text>
							<Text style={styles.eventTitle}>Make a Gift for Dad</Text>
							<Text style={styles.brandTag}>INDIGOKIDS PRESENTS</Text>
						</View>
					</View>
					<Text style={styles.eventDetails}>Join us in store on June 19 @ 5pm (local time) for a special Father's Day activity. Plus, enjoy a fun storytime.</Text>
					<Text style={styles.locationText}>📍 Indigo & Chapters Locations</Text>
					<View style={styles.btnRow}>
						<TouchableOpacity style={styles.blackBtn}>
							<Text style={styles.btnTextWhite}>Reserve Now</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.whiteBtn}>
							<Text style={styles.btnTextBlack}>View Details</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	topHeadingBlock: { alignItems: "center", padding: 24, textAlign: "center" },
	mainTitle: { fontSize: 24, fontWeight: "700", color: "#111111", marginBottom: 10 },
	subtext: { fontSize: 13, color: "#555555", textAlign: "center", lineHeight: 18 },
	campaignBanner: { backgroundColor: "#e2725b", margin: 16, padding: 20, borderRadius: 6, alignItems: "center" },
	campaignTitle: { fontSize: 22, fontWeight: "bold", color: "#ffffff", marginBottom: 6 },
	campaignDesc: { color: "#ffffff", fontSize: 12, textAlign: "center", marginBottom: 14, opacity: 0.95 },
	reserveBtn: { backgroundColor: "#ffffff", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 4 },
	reserveText: { color: "#e2725b", fontWeight: "700", fontSize: 12 },
	filterRow: { flexDirection: "row", paddingHorizontal: 16, gap: 12, marginBottom: 20 },
	dropdown: { flex: 1, height: 40, borderWidth: 1, borderColor: "#cccccc", borderRadius: 4, justifyContent: "center", paddingHorizontal: 12, backgroundColor: "#ffffff" },
	dropdownText: { fontSize: 13, color: "#333333" },
	eventCard: { margin: 16, padding: 16, borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 6 },
	cardGraphicRow: { flexDirection: "row", gap: 14, marginBottom: 12 },
	eventImageMock: { width: 90, height: 90, backgroundColor: "#b2dfdb", borderRadius: 4, justifyContent: "center", alignItems: "center", position: "relative" },
	ageBadge: { position: "absolute", top: 4, left: 4, backgroundColor: "#000000", color: "#ffffff", fontSize: 8, padding: 2, borderRadius: 2 },
	artText: { fontSize: 10, fontWeight: "bold" },
	eventDate: { fontSize: 12, color: "#666666", marginBottom: 2 },
	eventTitle: { fontSize: 16, fontWeight: "700", color: "#111111" },
	brandTag: { fontSize: 9, color: "#777777", fontWeight: "600", marginTop: 4 },
	eventDetails: { fontSize: 13, color: "#444444", lineHeight: 18, marginBottom: 10 },
	locationText: { fontSize: 12, color: "#555555", marginBottom: 14 },
	btnRow: { flexDirection: "row", gap: 10 },
	blackBtn: { flex: 1, backgroundColor: "#111111", height: 38, borderRadius: 4, justifyContent: "center", alignItems: "center" },
	whiteBtn: { flex: 1, backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#111111", height: 38, borderRadius: 4, justifyContent: "center", alignItems: "center" },
	btnTextWhite: { color: "#ffffff", fontWeight: "600", fontSize: 13 },
	btnTextBlack: { color: "#111111", fontWeight: "600", fontSize: 13 }
});
