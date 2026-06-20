import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const promos = [
    "Get a Picnic Blanket for $19.99 (reg. price $39.99) when you spend $30 or more.",
    "🎉 We've turned a new page on our site! Learn about what's new here.",
    "Enjoy free shipping on orders $49+*",
    "Proudly Canadian owned & operated. Discover Canadian authors.",
    "Father's Day gifts right on time. Buy now, pick up in store in 3 hours or less",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPromo = () => {
    setCurrentIndex((prev) => (prev < promos.length - 1 ? prev + 1 : 0));
  };

  const events = [
    {
      id: "1",
      img: {
        uri: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      },
      title: "Barkley Village Summer Play Days",
    },
    {
      id: "2",
      img: {
        uri: "https://cdn.theatlantic.com/media/mt/culture_test/vintagereading16.jpg",
      },
      title: "Summer Play Pass",
    },
    {
      id: "3",
      img: {
        uri: "https://i.pinimg.com/736x/5b/a7/9a/5ba79a4fda57757c14b49223900cb027.jpg",
      },
      title: "Summer Play Days",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleImagePrompt = () => {
    setCurrentImage((prev) => (prev < events.length - 1 ? prev + 1 : 0));
  };

  const newThisWeek = [
    { id: "1", title: "Babel Collector's Edition: Or the...", author: "R. F. Kuang", color: "#1d2a4d" },
    { id: "2", title: "Romantic Hero", author: "Kirsty Greenwood", color: "#e8359c" },
    { id: "3", title: "Little Wonder: Oprah's Book Club: A Novel", author: "Sophie Chen Keller", color: "#e8c84a" },
    { id: "4", title: "Tropesick: A Novel", author: "Lauren Okie", color: "#f3c9d8" },
    { id: "5", title: "Tom Clancy Terminal Velocity", author: "M.P. Woodward", color: "#111111" },
    { id: "6", title: "The Fatal Unpleasantness at...", author: "Claudia Gray", color: "#1f6e62" },
    { id: "7", title: "Rumors & Whiskey (Deluxe Edition)", author: "Victoria Wilder", color: "#3b2a1a" },
    { id: "8", title: "Communion: Finding My Way Ba...", author: "J. D. Vance", color: "#d9d4c8" },
  ];

  const sidebarPicks = [
    { id: "1", title: "Cover Reveal! Hollywood, Ending", subtitle: "Pre-order the highly anticipated novel by John Green now.", color: "#e88a4c" },
    { id: "2", title: "Turn Up the Music", subtitle: "Save 15% on vinyl records and CDs. Ends June 21.", color: "#2b6cb0" },
    { id: "3", title: "Trending Now: Disney Mystery Colouring", subtitle: "Discover the hidden picture as you colour each page.", color: "#f0d9a8" },
  ];

  const navLinks = [
    { label: "Events", onPress: () => router.push("/") },
    { label: "Gift Cards", onPress: () => router.push("/") },
    { label: "Plum Rewards", onPress: () => router.push("/") },
    { label: "Order Status", onPress: () => router.push("/") },
    { label: "Français", onPress: () => router.push("/") },
  ];

  const categories = [
    "Father's Day Books",
    "Kids' Books",
    "Teen & YA",
    "Bestsellers",
    "Gifts",
    "Toys",
    "Stationery",
    "Lifestyle",
    "Games & Hobbies",
    "Sale",
  ];

  return (
    <SafeAreaView style={styles.wrapper} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.Header}
          >
            {navLinks.map((link, i) => (
              <TouchableOpacity key={`${link.label}-${i}`} onPress={link.onPress}>
                <Text style={styles.headertext}>
                  {link.label}
                  {i < navLinks.length - 1 ? " |" : ""}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Brand row */}
        <View style={styles.brandRow}>
          <Text style={styles.LogoText}>Indego</Text>
          <View style={styles.NavGroup}>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={styles.navtext}>sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={styles.navtext}>list</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={styles.navtext}>bag</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <TextInput
              style={styles.searchPlaceholder}
              placeholder="Search by title, author or keywords"
              placeholderTextColor="#444444"
              numberOfLines={1}
            />
          </View>
        </View>

        {/* Category nav */}
        <View style={styles.NavBarHeader}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingicon}
          >
            {categories.map((category, index) => (
              <TouchableOpacity key={`${category}-${index}`} onPress={() => router.push("/")}>
                <Text style={styles.tendingicontext}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Promo banner */}
        <View style={styles.advertContainer}>
          <TouchableOpacity style={styles.advertController} onPress={handleNextPromo}>
            <View style={styles.textContainer}>
              <Text style={styles.advertText}>{promos[currentIndex]}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Featured event card */}
        <View style={styles.trendingContainer}>
          <TouchableOpacity style={{ width: "100%" }} onPress={handleImagePrompt} activeOpacity={0.85}>
            <View style={{ borderRadius: 10, overflow: 'hidden', position: 'relative' }}>
              <Image source={events[currentImage].img} style={styles.image} />
              <View style={styles.imagedescription}>
                <Text style={styles.cardTitleText}>{events[currentImage].title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* New This Week carousel */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>New This Week</Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.shopAllText}>Shop All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bookRow}
        >
          {newThisWeek.map((book) => (
            <TouchableOpacity
              key={book.id}
              style={styles.bookCard}
              onPress={() => router.push("/")}
              activeOpacity={0.85}
            >
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

        {/* Father's Day hero + sidebar */}
        <View style={styles.heroSection}>
          <TouchableOpacity style={styles.heroBanner} onPress={() => router.push("/")} activeOpacity={0.9}>
            <Text style={styles.heroEyebrow}>FATHER'S DAY IS JUNE 21</Text>
            <Text style={styles.heroTitle}>Gifts That'll{"\n"}Make Dad's{"\n"}Day</Text>
            <View style={styles.heroButton}>
              <Text style={styles.heroButtonText}>Shop Now</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.sidebar}>
            {sidebarPicks.map((pick) => (
              <TouchableOpacity
                key={pick.id}
                style={styles.sidebarItem}
                onPress={() => router.push("/")}
                activeOpacity={0.85}
              >
                <View style={[styles.sidebarThumb, { backgroundColor: pick.color }]} />
                <View style={styles.sidebarTextWrap}>
                  <Text style={styles.sidebarTitle} numberOfLines={2}>
                    {pick.title}
                  </Text>
                  <Text style={styles.sidebarSubtitle} numberOfLines={2}>
                    {pick.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerHeading}>Join plum Rewards</Text>
          <Text style={styles.footerBody}>
            Start earning with plum. Learn how you can shop, ship, and save your way to more rewards.
          </Text>
          <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/")}>
            <Text style={styles.footerButtonText}>Learn More</Text>
          </TouchableOpacity>

          <View style={styles.footerDivider} />

          <Text style={styles.footerHeading}>Join the club—exclusive deals, top books, and author events await.</Text>
          <View style={styles.subscribeRow}>
            <TextInput
              style={styles.subscribeInput}
              placeholder="Email address"
              placeholderTextColor="#777777"
            />
            <TouchableOpacity style={styles.subscribeButton} onPress={() => router.push("/")}>
              <Text style={styles.footerButtonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.copyrightText}>© 2026 Indigo. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
  },
  LogoText: {
    color: "#000000",
    fontSize: 23,
    fontWeight: "bold",
  },
  headertext: {
    fontSize: 14,
    color: "#ffffff",
    marginRight: 10,
  },
  NavBarHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 4,
  },
  search: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  searchPlaceholder: {
    width: '100%',
    color: "#444444",
    fontSize: 14,
    paddingVertical: 8,
  },
  NavGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  navtext: {
    color: "#000000",
    fontSize: 13,
  },
  trendingContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  trendingicon: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  tendingicontext: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "500",
  },
  advertContainer: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingVertical: 12,
    backgroundColor: "##f9f9f9",
    marginTop: 10,
  },
  advertController: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  advertText: {
    fontSize: 13,
    color: "#000000",
    textAlign: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    backgroundColor: "#e6e6e6",
  },
  cardTitleText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  imagedescription: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  shopAllText: {
    fontSize: 13,
    color: "#000000",
    textDecorationLine: "underline",
  },
  bookRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 16,
  },
  bookCard: {
    width: 120,
  },
  bookCover: {
    width: 120,
    height: 170,
    borderRadius: 6,
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 11,
    color: "#555555",
  },
  heroSection: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 28,
    gap: 16,
  },
  heroBanner: {
    backgroundColor: "#6b4a2b",
    borderRadius: 10,
    padding: 24,
    minHeight: 220,
    justifyContent: "center",
  },
  heroEyebrow: {
    color: "#f0e6d8",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 8,
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
    marginBottom: 16,
  },
  heroButton: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  heroButtonText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 13,
  },
  sidebar: {
    gap: 12,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  sidebarThumb: {
    width: 56,
    height: 56,
    borderRadius: 6,
  },
  sidebarTextWrap: {
    flex: 1,
  },
  sidebarTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 2,
  },
  sidebarSubtitle: {
    fontSize: 12,
    color: "#555555",
  },
  footer: {
    marginTop: 32,
    backgroundColor: "#f5f1ec",
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  footerHeading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  footerBody: {
    fontSize: 13,
    color: "#444444",
    marginBottom: 16,
    lineHeight: 18,
  },
  footerButton: {
    backgroundColor: "#000000",
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  footerButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 13,
  },
  footerDivider: {
    height: 1,
    backgroundColor: "#dddddd",
    marginVertical: 24,
  },
  subscribeRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  subscribeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  subscribeButton: {
    backgroundColor: "#000000",
    justifyContent: "center",
    paddingHorizontal: 18,
    borderRadius: 4,
  },
  copyrightText: {
    fontSize: 11,
    color: "#777777",
    marginTop: 28,
  },
});