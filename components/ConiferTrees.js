import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";

import Stafafura from "./treeInfo/coniferTrees/Stafafura";
import Ilmbjork from "./treeInfo/leafyTrees/Ilmbjork";

const ConiferTrees = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Text style={styles.paragraph}>
            Greni þurfa ekki eins mikið vatn og lauftré og geta því vaxið þar
            sem lauftré þrífast ekki. Sumt barr hefur vaxkennda húð á
            yfirborðinu sem verndar það. Barr inniheldur líka ýmis efni sem
            virka eins og frostlögur. Það þolir því vel kulda og flest barrtré
            halda því barrinu á veturna. Trén eru þess vegna græn á litinn allan
            ársins hring. Margar mismunandi gerðir eru til af barrtrjám.{" "}
          </Text>
          <Text style={styles.title}>Lerki</Text>
          <Text style={styles.paragraph}>
            Barrtré hafa löng og mjó, nálarlaga eða hreisturlaga laufblöð sem
            eru kölluð barr. Barrið er í raun upprúlluð laufblöð. Flest barrtré
            vaxa meira á hæðina en breiddina og eru því gjarnan keilulaga.
            Barrtré þurfa ekki eins mikið vatn og lauftré og geta því vaxið þar
            sem lauftré þrífast ekki. Sumt barr hefur vaxkennda húð á
            yfirborðinu sem verndar það. Barr inniheldur líka ýmis efni sem
            virka eins og frostlögur. Það þolir því vel kulda og flest barrtré
            halda því barrinu á veturna. Trén eru þess vegna græn á litinn allan
            ársins hring. Margar mismunandi gerðir eru til af barrtrjám. Á
            Íslandi eru fura, greni og lerki algengust barrtrjáa. Lerki er
            sérstakt af því að það fellir barrið á haustin.
          </Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={styles.treeCard}>
          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Stafafura",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "mai-sept",
                Content: <Stafafura />,
                treeImage: require=("../assets/stafafura.png"),
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Fjallalerki.png")}></Image>
            <Text style={styles.menuText}>Stafafura</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Ilmbjork",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "Ág-Okt",
                Content: <Ilmbjork />,
                treeImage: "../assets/mountainash.png",
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Evropulerki.png")}></Image>
            <Text style={styles.menuText}>Evrópulerki</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Lindifura.png")}></Image>
            <Text style={styles.menuText}>Mýralerki</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Stafafura2.png")}></Image>
            <Text style={styles.menuText}>Hrymur</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Evropulerki2.png")}></Image>
            <Text style={styles.menuText}>Risalerki</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View>
        <Text style={styles.title}>Fura</Text>
          <Text style={styles.paragraph}>
            Barrtré hafa löng og mjó, nálarlaga eða hreisturlaga laufblöð sem
            eru kölluð barr. Barrið er í raun upprúlluð laufblöð. Flest barrtré
            vaxa meira á hæðina en breiddina og eru því gjarnan keilulaga.
            Barrtré þurfa ekki eins mikið vatn og lauftré og geta því vaxið þar
            sem lauftré þrífast ekki. Sumt barr hefur vaxkennda húð á
            yfirborðinu sem verndar það. Barr inniheldur líka ýmis efni sem
            virka eins og frostlögur. Það þolir því vel kulda og flest barrtré
            halda því barrinu á veturna. Trén eru þess vegna græn á litinn allan
            ársins hring. Margar mismunandi gerðir eru til af barrtrjám. Á
            Íslandi eru fura, greni og lerki algengust barrtrjáa. Lerki er
            sérstakt af því að það fellir barrið á haustin.
          </Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={styles.treeCard}>
          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Stafafura",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "mai-sept",
                Content: <Stafafura />,
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Fjallalerki.png")}></Image>
            <Text style={styles.menuText}>Stafafura</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
           
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Stafafura2.png")}></Image>
            <Text style={styles.menuText}>Lindifura</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Evropulerki2.png")}></Image>
            <Text style={styles.menuText}>Bergfura</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
           
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Evropulerki.png")}></Image>
            <Text style={styles.menuText}>Bosníufura</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Lindifura.png")}></Image>
            <Text style={styles.menuText}>Gráfura</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View>
        <Text style={styles.title}>Greni</Text>
          <Text style={styles.paragraph}>
          Birkið er auðþekkt á smágerðu, tenntu laufi og ljósum pappírskenndum berki. Á Íslandi eru tvær birkitegundir innlendar og jafnframt mjög einkennandi fyrir íslenska náttúru: ilmbjörk (birki í daglegu tali) og fjalldrapi. Ilmbjörkin er eina innlenda tré landsins sem myndar skóga. Við landnám er talið að allt að þriðjungur Íslands hafi verið þakinn birkiskógi, jafnvel allt að 40% landsins.
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.treeCard}>
          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Stafafura",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "mai-sept",
                Content: <Stafafura />,
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Fjallalerki.png")}></Image>
            <Text style={styles.menuText}>Stafafura</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Evropulerki2.png")}></Image>
            <Text style={styles.menuText}>Sitkagreni</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Lindifura.png")}></Image>
            <Text style={styles.menuText}>Blágreni</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Stafafura2.png")}></Image>
            <Text style={styles.menuText}>Rauðgreni</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Evropulerki.png")}></Image>
            <Text style={styles.menuText}>Hágráni</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View style={styles.marginBottom}></View>
    </ScrollView>
  );
};

export default ConiferTrees;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDF7",
  },
  treeCard: {
    justifyContent: "center",
    flexDirection: 'row'
  },
  treeBranchPicture: {
    height: 150,
    width: 125,
    borderTopRightRadius: 20,
    marginLeft: -7,
    marginBottom: -110,
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 40,
    fontFamily: "degularDisplay",
    fontSize: 16,
    backgroundColor: "#FFFDF7",
  },

  title: {    
    fontFamily: "degularDisplay",
    fontSize: 32,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 40,
  },

  treeNav: {
    marginTop: 20,
    marginLeft: 15,
    height: 150,
    width: 120,
    borderRadius: 20,
    backgroundColor: "#30361E",
  },

  menuText: {
    fontFamily: "degularDisplay",
    fontSize: 16,
    marginTop: 75,
    marginLeft: 30,
    color: "#FFFDF7",
  },

  marginBottom: {
    height: 25,
  }
});
