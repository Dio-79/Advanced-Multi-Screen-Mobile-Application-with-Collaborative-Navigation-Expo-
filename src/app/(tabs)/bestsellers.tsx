import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import IndigoHeader from "./indigoheader";

export default function BestsellersScreen() {
	const router = useRouter();

	const sectionBooks = [
		{ id: "b1", title: "Every Summer After", author: "Carley Fortune", price: "$21.56", oldPrice: "$26.95", color: "#a5f3fc" },
		{ id: "b2", title: "Harvest Season", author: "Brynne Weaver", price: "$26.59", oldPrice: "$37.99", color: "#fca5a5" },
		{ id: "b3", title: "To Flame a Wild Flower", author: "Sarah A. Parker", price: "$28.99", oldPrice: "", color: "#c35b3e" },
		{ id: "b4", title: "Light Wielder: Book Two", author: "Rachel Schneider", price: "$32.25", oldPrice: "$43.00", color: "#ddd6fe" }
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top"]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<IndigoHeader currentPromo="Get a Picnic Blanket for $19.99 (reg. price $39.99) when you spend $30 or more." />

				<Text style={styles.mainBannerHeader}>Up to 25% off Indigo Bestsellers</Text>

				{/* Section Block 1 */}
				<View style={styles.headerBlock}>
					<Text style={styles.sectionHeading}>New Bestsellers</Text>
					<Text style={styles.linkText}>Shop All</Text>
				</View>

				<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalRow}>
					{sectionBooks.map(item => (
						<TouchableOpacity key={item.id} style={{ width: 115 }} onPress={() => router.push({ pathname: "/bookdetails", params: { title: item.title, author: item.author, color: item.color } })}>
							<View style={[styles.bookPlaceholder, { backgroundColor: item.color }]} />
							<Text style={styles.bTitle} numberOfLines={2}>
								{item.title}
							</Text>
							<Text style={styles.bAuthor} numberOfLines={1}>
								{item.author}
							</Text>
							<View style={{ flexDirection: "row", gap: 6, marginTop: 4 }}>
								<Text style={styles.salePrice}>{item.price}</Text>
								{item.oldPrice !== "" && <Text style={styles.struckPrice}>{item.oldPrice}</Text>}
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>

				{/* Section Block 2 */}
				<View style={[styles.headerBlock, { marginTop: 24 }]}>
					<Text style={styles.sectionHeading}>Fiction Bestsellers</Text>
					<Text style={styles.linkText}>Shop All</Text>
				</View>

				<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalRow}>
					{sectionBooks.map(item => (
						<TouchableOpacity key={"f-" + item.id} style={{ width: 115 }} onPress={() => router.push({ pathname: "/bookdetails", params: { title: item.title, author: item.author, color: item.color } })}>
							<View style={[styles.bookPlaceholder, { backgroundColor: item.color }]} />
							<Text style={styles.bTitle} numberOfLines={2}>
								{item.title}
							</Text>
							<Text style={styles.bAuthor} numberOfLines={1}>
								{item.author}
							</Text>
							<View style={{ flexDirection: "row", gap: 6, marginTop: 4 }}>
								<Text style={styles.salePrice}>{item.price}</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainBannerHeader: { fontSize: 22, fontWeight: "300", fontFamily: "System", textAlign: "center", marginVertical: 20, color: "#111111" },
	headerBlock: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, marginBottom: 12, alignItems: "center" },
	sectionHeading: { fontSize: 18, fontWeight: "700", color: "#111111" },
	linkText: { fontSize: 12, textDecorationLine: "underline" },
	horizontalRow: { paddingLeft: 16, gap: 14, paddingBottom: 20 },
	bookPlaceholder: { width: 115, height: 165, borderRadius: 4, marginBottom: 6 },
	bTitle: { fontSize: 12, fontWeight: "600", color: "#111111" },
	bAuthor: { fontSize: 11, color: "#666666" },
	salePrice: { fontSize: 12, fontWeight: "700", color: "#b92b2b" },
	struckPrice: { fontSize: 11, color: "#999999", textDecorationLine: "line-through" }
});
