import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import Ilmbjork from "./treeInfo/leafyTrees/Ilmbjork";

const windowWidth = Dimensions.get("window").width;

const LeafyTrees = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Text style={styles.paragraph}>
          Lauftré eru dulfrævingar (Angiospermae) og hylja því fræ sín aldini. Laufskógar eru einkennandi fyrir laufskógabeltið sem tekur við sunnan barrskógabeltisins. Í laufskógabeltinu eru mildir, stuttir vetur og hlý sumur. Úrkoma er að jafnaði meiri en í barrskógabeltinu jafnari árið um kring. Jafnframt er jarðvegur dýpri og frjósamari en í barrskógunum og lífríkið allt fjölskrúðugra.
          </Text>
          <Text style={styles.title}>Birki</Text>
          <Text style={styles.paragraph}>
          Birkið er auðþekkt á smágerðu, tenntu laufi og ljósum pappírskenndum berki. Á Íslandi eru tvær birkitegundir innlendar og jafnframt mjög einkennandi fyrir íslenska náttúru: ilmbjörk (birki í daglegu tali) og fjalldrapi. Ilmbjörkin er eina innlenda tré landsins sem myndar skóga. Við landnám er talið að allt að þriðjungur Íslands hafi verið þakinn birkiskógi, jafnvel allt að 40% landsins.
          </Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={styles.treeCard}>
          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Ilmbjörk",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "mai-sept",
                Content: <Ilmbjork />,
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf2.png")}></Image>
            <Text style={styles.menuText}>Ilmbjörk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf2.png")}></Image>
            <Text style={styles.menuText}>Hengibjörk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf2.png")}></Image>
            <Text style={styles.menuText}>Steinbjörk</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View>
        <Text style={styles.title}>Reynir</Text>
          <Text style={styles.paragraph}>
          Ilmreynir er oftast kallaður reyniviður í daglegu tali. Hann er algengur á Íslandi, sérstaklega í görðum en einnig villtur sem stök tré í birkiskógum. Til dæmis eru stök reynitré áberandi í kjarrskógum Vestfjarða og setja mikinn svip á skógana með hvítum blómum á vorin og rauðum berjum á haustin. Ilmreynir óx villtur hér á landi við landnám, líkt og birki, einir og víðir. Margar aðrar reynitegundir hafa verið reyndar á Íslandi. Ættkvíslin er reyndar flókin viðfangs flokkunarfræðilega vegna kynblöndunar. Hér eru því einungis taldar upp þær tegundir sem mest hafa verið í ræktun hérlendis.
          </Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={styles.treeCard}>
          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Ilmbjörk",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "mai-sept",
                Content: <Ilmbjork />,
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf.png")}></Image>
            <Text style={styles.menuText}>Ilmbjörk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
           
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf.png")}></Image>
            <Text style={styles.menuText}>Silfurreynir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf.png")}></Image>
            <Text style={styles.menuText}>Reyniviður</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
           
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf.png")}></Image>
            <Text style={styles.menuText}>Alpareynir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf.png")}></Image>
            <Text style={styles.menuText}>Gráreynir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
          
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Birchleaf.png")}></Image>
            <Text style={styles.menuText}>Knappareynir</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View>
        <Text style={styles.title}>Elri</Text>
          <Text style={styles.paragraph}>
          Elri er ættkvísl blómplantna af birkiætt sem tilheyrir beykiættbálkinum. Í elriættkvíslinni eru 20-30 tegundir af trjám og runnum. Elri hefur verið notað sem landgræðsluplanta á Íslandi og lítillega til skrauts í skógrækt.          </Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.treeCard}>
          <TouchableOpacity
            style={styles.treeNav}
            onPress={() => {
              navigation.navigate("TreeInfo", {
                title: "Ilmbjörk",
                pickingStatus: "Söfnun í gangi",
                pickingTime: "mai-sept",
                Content: <Ilmbjork />,
              });
            }}
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Betulaleaf.png")}></Image>
            <Text style={styles.menuText}>Ilmbjörk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Betulaleaf.png")}></Image>
            <Text style={styles.menuText}>Gráelri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Betulaleaf.png")}></Image>
            <Text style={styles.menuText}>Blæelri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Betulaleaf.png")}></Image>
            <Text style={styles.menuText}>Sitkaelri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Betulaleaf.png")}></Image>
            <Text style={styles.menuText}>Svarterli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.treeNav}
            
          >
            <Image 
            style={styles.treeBranchPicture}
            source={require("../assets/Betulaleaf.png")}></Image>
            <Text style={styles.menuText}>Ryðerli</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View style={styles.marginBottom}></View>
    </ScrollView>
  );
};

export default LeafyTrees;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDF7",
  },
  treeCard: {
    justifyContent: "center",
    flexDirection: 'row'
  },
  treeBranchPicture: {
    height: 120,
    width: 100,
    borderTopRightRadius: 20,
    marginLeft: 18,
    marginTop: -5,
    marginBottom: -85,
  },
  paragraph: {
    width: windowWidth / 1.1,
    paddingLeft: windowWidth / 20,
    paddingTop: windowWidth / 20,
    fontFamily: "degularDisplay",
    fontSize: 18,
    color: "#30361E",
  },

  title: {
    fontFamily: "degularDisplay",
    fontSize: 32,
    color: "#30361E",
    paddingLeft: windowWidth / 20,
    paddingTop: windowWidth / 20,
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
    marginTop: 75,
    marginLeft: 30,
    color: "#FFFDF7",
  },

  marginBottom: {
    height: 25,
  }
});