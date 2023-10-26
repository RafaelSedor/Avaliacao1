import React from "react";
import { StyleSheet, Text, View, SectionList, Dimensions } from "react-native";
import { Stack } from "expo-router";
import MenuComponent from "../components/main/Menu";
import { helper } from "../components/main/helper";
import colection from "../services/data";

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
};

export default function main() {
  const data: Car[] = colection;
  helper(data);

  const carsByBrand: { [brand: string]: Car[] } = {};
  data.forEach((car) => {
    const brand = car.brand;
    if (!carsByBrand[brand]) {
      carsByBrand[brand] = [];
    }
    carsByBrand[brand].push(car);
  });

  const sectionData: { title: string; data: Car[] }[] = Object.keys(
    carsByBrand
  ).map((brand) => ({
    title: brand,
    data: carsByBrand[brand],
  }));

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: '#7Fa653' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
          },
          title: "Soca Rão",
          headerRight: () => <MenuComponent onMain={() => {console.log("hellow from main")}}/>,
        }}
      />
      <Text style={styles.title}>Carros a Venda</Text>

      <SectionList
        sections={sectionData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textItens}>{`Marca: ${item.brand}`}</Text>
            <Text style={styles.textItens}>{`Modelo: ${item.model}`}</Text>
            <Text style={styles.textItens}>{`Ano: ${item.year}`}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#434D36",
  },

  title: {
    marginTop: 15,
    padding: 25,
    fontSize: 48,
    fontWeight: "600",
    color: "#ffff",
    textDecorationLine: "underline",
    borderWidth: 3,
    borderColor: "#65b307",
    borderRadius: 20,

  },

  item: {
    width: 350,
    alignItems: "center",
    padding: 16,
    margin: 2,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#ffff",
  },

  textItens: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",

  },

  sectionHeader: {
    marginTop: 25,
    width: 350,
    height: 110,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#ffff",
    padding: 10,
    marginBottom: 20,
  },

  sectionHeaderText: {
    fontSize: 40,
    color: "#284703",
    fontWeight: "bold",
    paddingTop: 10,
  },
});
