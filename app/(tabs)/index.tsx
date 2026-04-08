import Header from "@/components/Header";
import Container from "@/components/Container";
import { ScrollView, StyleSheet, View } from "react-native";
import Pill from "@/components/Pill";
import Box from "@/components/Box";
import Circle from "@/components/Circle";
import Rectangle from "@/components/Rectangle";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Dots from "@/components/Dots";

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.content}> 
        <Container/>
      </View>
      <View style={styles.box}>
        <Pill background="yellow"/>
        <Pill background="blue"/>
        <Box width={80} height={40}/>
      </View>
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.item} >
          <Circle/>
          <Box width={60} height={10}/>
          <Box width={65} height={10}/>
        </View>
        <View style={styles.item} >
          <Circle/>
          <Box width={60} height={10}/>
          <View style={styles.alt}></View>
        </View>
        <View style={styles.item} >
          <Circle/>
          <Box width={67} height={10}/>
          <Box width={60} height={10}/>
        </View>
        <View style={styles.item} >
          <Circle/>
          <Box width={67} height={10}/>
          <Box width={65} height={10}/>
        </View>
        <View style={styles.item} >
          <Circle/>
          <Box width={60} height={10}/>
          <Box width={65} height={10}/>
        </View>
        <View style={styles.item} >
          <Circle/>
          <Box width={60} height={10}/>
          <Box width={65} height={10}/>
        </View>
      </ScrollView>
      <View style={styles.rectangle}>
          <Rectangle icon={<MaterialIcons name="arrow-forward-ios" size={24} color="#530082" />}/>
      </View>
      <View style={styles.rectangle}>
          <Rectangle icon={<FontAwesome6 name="arrows-rotate" size={24} color="#530082" />}/>
      </View>
      <View style={styles.boxDots}>
          <Dots backgroundColor="gray"/>
          <Dots backgroundColor="white"/>
          <Dots backgroundColor="gray"/>
      </View>
      <View style={styles.content}> 
        <Container/>
      </View>
      <View>
        
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  content: {
    height: 50,
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10
  },
  box: {
    padding: 12, 
    marginTop: 10,
    flexDirection: "row",
    height: 50,
    marginBottom: 10
  },
  item:{
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  }, 
  scroll: {
    maxHeight: 150
  }, 
  alt: {
    height: 15
  },
  rectangle: {
    justifyContent: "center",
    alignItems: "center"
  },
  boxDots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 10
  }
});
