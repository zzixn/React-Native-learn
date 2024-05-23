import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import settingsIcon from "../assets/settings.png";
import notionIcon from "../assets/notion.png";
import fireIcon from "../assets/fire.png";
import Home from "../assets/home_off.svg";
import StatOn from "../assets/stat_on.svg";
import Comm from "../assets/comm_off";
import User from "../assets/user_off";
import Write from "../assets/write_off";
import { BarChart } from "react-native-gifted-charts";

const StatScreen = () => {
  const navigation = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState('year');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const data = [
    { value: 5, label: "'19" },
    { value: 6, label: "'20" },
    { value: 7, label: "'21" },
    { value: 8, label: "'22" },
    { value: 9, label: "'23" },
    { value: 10, label: "'24" },
  ];
  const categoryColors = ['#6A9DFF', '#97BAFF', '#B9D0FF', '#CDCDCD', '#B2B2B2'];
  const categoryData = {
    year: [{ category: '운동', count: 10 }, { category: '독서', count: 8 }, { category: '공부', count: 7 }, { category: '요리', count: 5 }, { category: '여행', count: 3 }],
    month: [{ category: '운동', count: 5 }, { category: '독서', count: 4 }, { category: '공부', count: 4 }, { category: '요리', count: 2 }, { category: '프로그래밍', count: 1 }],
    week: [{ category: '독서', count: 3 }, { category: '공부', count: 3 }, { category: '요리', count: 2 }, { category: '프로그래밍', count: 1 }, { category: '여행', count: 1 }]
  };

  const CategoryRanking = ({ data }) => {
    return (
      <View style={styles.categoryContainer}>
      {data.map((item, index) => (
        <View key={index} style={[styles.categoryItemContainer, { backgroundColor: categoryColors[index] }]}>
          <Text style={styles.categoryItem}>{`${index + 1} ${item.category}`}</Text>
          <Text style={styles.categoryCount}>{item.count}회</Text>
        </View>
      ))}
    </View>
    );
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.header}>
        <View style={styles.leftSettings}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={settingsIcon} style={styles.settings} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightSettings}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={notionIcon} style={styles.settings} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={fireIcon} style={styles.settings} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.pageTitle}>For Me</Text>
      <View style={styles.achievementRate}>
        <Text style={styles.subtitle}>체크리스트 달성율 통계</Text>
        <View style={styles.chartBox}>
          <BarChart
            barMarginBottom={0} // x축 두께 늘리면 얘도 늘랴즉;
            barWidth={22} // bar 두께
            noOfSections={1} // 세로축 섹션
            barBorderRadius={4} // 모서리 둥글게
            frontColor="#508BFF" // bar 색상
            data={data}
            yAxisThickness={0} // Y축 두께
            xAxisThickness={0} // X축 두께
            hideRules // 기준선 지우기
            //spacing={15}
            stepHeight={180}
            maxValue={10}
          />
        </View>
      </View>
      <View style={styles.achievementCategory}>
      <Text style={styles.subtitle}>최다 달성 카테고리</Text>
      <View style={styles.periodButtons}>
            <TouchableOpacity
              style={[styles.periodButton, selectedPeriod === 'year' && styles.selectedPeriodButton]}
              onPress={() => handlePeriodChange('year')}
            >
              <Text style={styles.periodButtonText}>연간</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.periodButton, selectedPeriod === 'month' && styles.selectedPeriodButton]}
              onPress={() => handlePeriodChange('month')}
            >
              <Text style={styles.periodButtonText}>월간</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.periodButton, selectedPeriod === 'week' && styles.selectedPeriodButton]}
              onPress={() => handlePeriodChange('week')}
            >
              <Text style={styles.periodButtonText}>주간</Text>
            </TouchableOpacity>
          </View>
          <CategoryRanking data={categoryData[selectedPeriod]}/>

        </View>
      <View style={styles.menuBar}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.menuIcon}>
            <Comm />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <Write />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => navigation.navigate("Main")}
          >
            <Home />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => navigation.navigate("Stat")}
          >
            <StatOn />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <User />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    position: 'relative'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    top: 15,
  },
  pageTitle: {
    fontSize: 35,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#508BFF",
    textAlign: "center",
    bottom: 20,
  },
  leftSettings: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSettings: {
    flexDirection: "row",
    alignItems: "center",
  },
  settings: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  achievementRate: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chartBox: {
    width: 350,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // 안드로이드 그림자
    paddingBottom: 30,
    marginLeft: 20,
    marginTop: 10
  },
  achievementCategory: {
  
  },
  categoryItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 360,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 10,
    marginBottom: 4,
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    bottom: 20
  },
  categoryItem: {
    color: '#FFFFFF',
    fontWeight: "800",
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 8
  },
  categoryCount: {
    color: '#FFFFFF',
    fontWeight: "800",
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 8,
    marginRight: 20
  },
  subtitle: {
    color: "#343A40",
    fontWeight: "800",
    fontSize: 14,
    paddingLeft: 20,
    
  },
  menuBar: {
    height: 60,
    backgroundColor: "#508BFF",
    flexDirection: "row",
    justifyContent: "space-around",
    position: 'absolute',
    bottom: 0, // 화면 하단에 고정
    left: 0, // 왼쪽 정렬
    right: 0, // 오른쪽 정렬 
    // flex: 1
  },
  menuIcon: {
    margin: 10,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  achievementRate: {
    marginBottom: 20,
  },
  periodButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
    paddingRight: 15,
    bottom: 19
  },
  periodButton: {
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  selectedPeriodButton: {
    backgroundColor: "#508BFF",
  },
  periodButtonText: {
    color: "#D1D1D1",
    fontSize: 12,
    fontWeight: "800"
  },
  achievementCategory: {
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 10,
  }
});
