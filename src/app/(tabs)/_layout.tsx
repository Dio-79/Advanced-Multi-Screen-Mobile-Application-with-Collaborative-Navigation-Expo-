import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#111111",
				tabBarInactiveTintColor: "#777777",
				tabBarStyle: { backgroundColor: "#ffffff", borderTopWidth: 1, borderTopColor: "#eeeeee" }
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
				}}
			/>
			<Tabs.Screen
				name="bestsellers"
				options={{
					title: "Bestsellers",
					tabBarIcon: ({ color, size }) => <Ionicons name="book-outline" size={size} color={color} />
				}}
			/>
			<Tabs.Screen
				name="events"
				options={{
					title: "Events",
					tabBarIcon: ({ color, size }) => <Ionicons name="calendar-outline" size={size} color={color} />
				}}
			/>
		</Tabs>
	);
}
