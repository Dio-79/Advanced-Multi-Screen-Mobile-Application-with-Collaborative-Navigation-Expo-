import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import IndigoHeader from "./indigoheader";

export default function HomeScreen() {
	const router = useRouter();

	const newThisWeek = [
		{ id: "1", title: "To Flame a Wild Flower", author: "Sarah A. Parker", color: "#c35b3e" },
		{ id: "2", title: "The Raven at the Ash Door", author: "K.A. Linde", color: "#1a1a24" },
		{ id: "3", title: "The Someday Garden", author: "Ashley Poston", color: "#dfb73c" },
		{ id: "4", title: "The Light of Days", author: "Judy Batalion", color: "#b92b2b" }
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top"]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<IndigoHeader currentPromo="Father's Day gifts right on time. Buy now, pick up in store in 3 hours or less" />

				{/* Hero Section Container */}
				<View style={styles.heroSplitBlock}>
					<View style={styles.heroBannerLeft}>
						<Text style={styles.heroEyebrow}>FATHER'S DAY IS JUNE 21</Text>
						<Text style={styles.heroTitle}>Running out of time? Dad's gift is ready.</Text>
						<TouchableOpacity style={styles.heroBtn}>
							<Text style={styles.heroBtnText}>Shop All</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.sidebarRight}>
						<View style={styles.sideItem}>
							<View style={[styles.sideBox, { backgroundColor: "#c7d2fe" }]} />
							<View style={{ flex: 1 }}>
								<Text style={styles.sideTitle}>Kobo Deals</Text>
								<Text style={styles.sideSub} numberOfLines={2}>
									Save up to $30 or get a FREE SleepCover.
								</Text>
							</View>
						</View>
						<View style={styles.sideItem}>
							<View style={[styles.sideBox, { backgroundColor: "#fbcfe8" }]} />
							<View style={{ flex: 1 }}>
								<Text style={styles.sideTitle}>15% off Vinyl & CDs</Text>
								<Text style={styles.sideSub}>Turn up the music and save. Ends June 21.</Text>
							</View>
						</View>
					</View>
				</View>

				{/* New This Week Row */}
				<View style={styles.sectionHeader}>
					<Text style={styles.sectionTitle}>New This Week</Text>
					<Text style={styles.shopAllLink}>Shop All</Text>
				</View>

				<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 16, gap: 14 }}>
					{newThisWeek.map(book => (
						<TouchableOpacity key={book.id} style={{ width: 110 }} onPress={() => router.push({ pathname: "/bookdetails", params: { title: book.title, author: book.author, color: book.color } })}>
							<View style={[styles.bookCover, { backgroundColor: book.color }]} />
							<Text style={styles.bookTitle} numberOfLines={2}>
								{book.title}
							</Text>
							<Text style={styles.bookAuthor} numberOfLines={1}>
								{book.author}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	heroSplitBlock: { flexDirection: "row", padding: 16, gap: 12 },
	heroBannerLeft: { flex: 1.3, backgroundColor: "#4c604d", padding: 20, borderRadius: 4, minHeight: 240, justifyContent: "center" },
	heroEyebrow: { color: "#ffffff", fontSize: 10, fontWeight: "600", marginBottom: 8, opacity: 0.9 },
	heroTitle: { color: "#ffffff", fontSize: 22, fontWeight: "700", marginBottom: 16, lineHeight: 26 },
	heroBtn: { backgroundColor: "#ffffff", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 2, alignSelf: "flex-start" },
	heroBtnText: { color: "#000000", fontWeight: "600", fontSize: 12 },
	sidebarRight: { flex: 1, gap: 12, justifyContent: "space-between" },
	sideItem: { flexDirection: "row", gap: 8, alignItems: "center" },
	sideBox: { width: 45, height: 60, borderRadius: 4 },
	sideTitle: { fontSize: 12, fontWeight: "700", color: "#111111" },
	sideSub: { fontSize: 10, color: "#555555", marginTop: 2 },
	sectionHeader: { flexDirection: "row", justifyContent: "space-between", padding: 16, alignItems: "center", marginTop: 10 },
	sectionTitle: { fontSize: 18, fontWeight: "700", color: "#111111" },
	shopAllLink: { fontSize: 12, textDecorationLine: "underline" },
	bookCover: { width: 110, height: 160, borderRadius: 4, marginBottom: 6 },
	bookTitle: { fontSize: 12, fontWeight: "600", color: "#111111" },
	bookAuthor: { fontSize: 11, color: "#666666" }
});
