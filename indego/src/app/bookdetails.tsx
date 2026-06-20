import { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookDetails() {
  const router = useRouter();
  const { title, author, color } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);

  // Generic "you may also like" placeholders, same color-block style as the home screen
  const youMayAlsoLike = [
    { id: "a1", title: "Glass & Gravity", author: "Noor Faisal", color: "#3b5b6b" },
    { id: "a2", title: "Hollow Orchard", author: "Dev Whitlock", color: "#7a5230" },
    { id: "a3", title: "Paper Tide", author: "Lena Ostrowski", color: "#8a8f5c" },
    { id: "a4", title: "Smoke Ledger", author: "Iris Calloway", color: "#4a3f55" },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.coverWrap}>
          <View style={[styles.cover, { backgroundColor: (color as string) || "#cccccc" }]} />
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.stars}>☆☆☆☆☆</Text>
            <Text style={styles.ratingCount}>(0)</Text>
          </View>

          <Text style={styles.blurb}>
            A captivating read from {author}, available to ship or pick up in store.
          </Text>

          <View style={styles.qtyAddRow}>
            <View style={styles.qtySelector}>
              <TouchableOpacity onPress={() => setQuantity((q) => Math.max(1, q - 1))}>
                <Text style={styles.qtyButton}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyValue}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity((q) => q + 1)}>
                <Text style={styles.qtyButton}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addToBagButton}>
              <Text style={styles.addToBagText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.relatedHeader}>
          <Text style={styles.relatedHeading}>You may also like</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedRow}>
          {youMayAlsoLike.map((item) => (
            <View key={item.id} style={styles.relatedCard}>
              <View style={[styles.relatedCover, { backgroundColor: item.color }]} />
              <Text style={styles.relatedTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.relatedAuthor} numberOfLines={1}>{item.author}</Text>
            </View>
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  backText: {
    fontSize: 15,
    color: "#000000",
  },

  coverWrap: {
    alignItems: "center",
    paddingBottom: 10,
  },

  cover: {
    width: "60%",
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },

  infoSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 4,
  },

  author: {
    fontSize: 14,
    color: "#444444",
    marginBottom: 8,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },

  stars: {
    fontSize: 14,
    color: "#cccccc",
  },

  ratingCount: {
    fontSize: 13,
    color: "#888888",
  },

  blurb: {
    fontSize: 14,
    color: "#444444",
    lineHeight: 20,
    marginBottom: 20,
  },

  qtyAddRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
    alignItems: "center",
  },

  qtySelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 14,
  },

  qtyButton: {
    fontSize: 18,
    color: "#111111",
    paddingHorizontal: 4,
  },

  qtyValue: {
    fontSize: 15,
    color: "#111111",
  },

  addToBagButton: {
    flex: 1,
    backgroundColor: "#000000",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },

  addToBagText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },

  relatedHeader: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  relatedHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
  },

  relatedRow: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 16,
  },

  relatedCard: {
    width: 120,
  },

  relatedCover: {
    width: 120,
    height: 170,
    borderRadius: 6,
    marginBottom: 8,
  },

  relatedTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 2,
  },

  relatedAuthor: {
    fontSize: 11,
    color: "#555555",
  },
});