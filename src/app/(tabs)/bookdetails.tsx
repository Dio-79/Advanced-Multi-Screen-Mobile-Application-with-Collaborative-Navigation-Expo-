import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import IndigoHeader from "./indigoheader";

export default function BookDetailsScreen() {
	const router = useRouter();
	const { title, author, color } = useLocalSearchParams();
	const [qty, setQty] = useState(1);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top"]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<IndigoHeader currentPromo="🎉 We've turned a new page on our site! Learn about what's new here." />

				<TouchableOpacity style={styles.backLinkRow} onPress={() => router.back()}>
					<Text style={styles.backBtnLabel}>‹ Books / Fiction</Text>
				</TouchableOpacity>

				{/* Product Meta Section */}
				<View style={styles.productBody}>
					<View style={[styles.mainLargeCover, { backgroundColor: (color as string) || "#c35b3e" }]}>
						<View style={styles.exclusiveBadge}>
							<Text style={styles.badgeText}>Indigo Exclusive</Text>
						</View>
					</View>

					<Text style={styles.pTitle}>{title || "To Flame a Wild Flower Indigo Exclusive Edition"}</Text>
					<Text style={styles.pAuthor}>by {author || "Sarah A. Parker"}</Text>
					<Text style={styles.formatText}>Paperback (Indigo Exclusive)</Text>
					<Text style={styles.pPrice}>$28.99</Text>

					{/* Fulfillment Toggle Selector */}
					<View style={styles.shippingToggleRow}>
						<View style={[styles.toggleBox, styles.activeToggle]}>
							<Text style={styles.activeToggleText}>📦 Ship to me</Text>
						</View>
						<View style={styles.toggleBox}>
							<Text style={styles.inactiveToggleText}>🏪 Pick up in store</Text>
						</View>
					</View>

					{/* Core Action Interactive Row */}
					<View style={styles.quantityCartRow}>
						<View style={styles.qtyContainer}>
							<TouchableOpacity onPress={() => setQty(Math.max(1, qty - 1))}>
								<Text style={styles.qtyOp}>−</Text>
							</TouchableOpacity>
							<Text style={styles.qtyVal}>{qty}</Text>
							<TouchableOpacity onPress={() => setQty(qty + 1)}>
								<Text style={styles.qtyOp}>+</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.bagBtn}>
							<Text style={styles.bagBtnText}>Add to Bag</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Overview Technical Spec Sections */}
				<View style={styles.descriptionSection}>
					<Text style={styles.descHeading}>Overview</Text>
					<View style={styles.pillRow}>
						<View style={styles.specPill}>
							<Text style={styles.pillText}>INDIGO EXCLUSIVE</Text>
						</View>
						<View style={styles.specPill}>
							<Text style={styles.pillText}>656 PAGES</Text>
						</View>
						<View style={styles.specPill}>
							<Text style={styles.pillText}>ENGLISH</Text>
						</View>
					</View>
					<Text style={styles.bodyBlurb}>From the New York Times bestselling author of When the Moon Hatched comes the third book in the Crystal Bloom series...</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backLinkRow: { padding: 16 },
	backBtnLabel: { fontSize: 13, color: "#666666" },
	productBody: { paddingHorizontal: 16, alignItems: "center" },
	mainLargeCover: { width: 170, height: 250, borderRadius: 4, position: "relative", marginBottom: 16, elevation: 2 },
	exclusiveBadge: { position: "absolute", top: 12, right: -10, backgroundColor: "#1e3a8a", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 2 },
	badgeText: { color: "#ffffff", fontSize: 10, fontWeight: "700" },
	pTitle: { fontSize: 20, fontWeight: "700", color: "#111111", textAlign: "center", marginBottom: 4 },
	pAuthor: { fontSize: 14, color: "#555555", marginBottom: 2 },
	formatText: { fontSize: 12, color: "#777777", marginBottom: 12 },
	pPrice: { fontSize: 22, fontWeight: "700", color: "#111111", marginBottom: 16 },
	shippingToggleRow: { flexDirection: "row", borderWidth: 1, borderColor: "#dddddd", borderRadius: 4, marginBottom: 16 },
	toggleBox: { flex: 1, paddingVertical: 12, alignItems: "center", backgroundColor: "#ffffff" },
	activeToggle: { backgroundColor: "#f7f7f7", borderRightWidth: 1, borderRightColor: "#dddddd" },
	activeToggleText: { fontSize: 13, fontWeight: "700", color: "#111111" },
	inactiveToggleText: { fontSize: 13, color: "#666666" },
	quantityCartRow: { flexDirection: "row", gap: 12, width: "100%", marginBottom: 24 },
	qtyContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#cccccc", borderRadius: 4, paddingHorizontal: 12, gap: 16 },
	qtyOp: { fontSize: 18, fontWeight: "600", color: "#111111", paddingHorizontal: 4 },
	qtyVal: { fontSize: 14, fontWeight: "600" },
	bagBtn: { flex: 1, backgroundColor: "#222222", borderRadius: 4, height: 46, justifyContent: "center", alignItems: "center" },
	bagBtnText: { color: "#ffffff", fontWeight: "700", fontSize: 14 },
	descriptionSection: { borderTopWidth: 1, borderTopColor: "#eeeeee", padding: 16, marginTop: 10 },
	descHeading: { fontSize: 16, fontWeight: "700", marginBottom: 12 },
	pillRow: { flexDirection: "row", gap: 8, marginBottom: 14 },
	specPill: { borderWidth: 1, borderColor: "#cccccc", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 2 },
	pillText: { fontSize: 10, color: "#555555", fontWeight: "600" },
	bodyBlurb: { fontSize: 13, color: "#444444", lineHeight: 20 }
});
