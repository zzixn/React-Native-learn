import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Path, Svg } from 'react-native-svg';
import settingsIcon from '../assets/settings.png';
import notionIcon from '../assets/notion.png';
import fireIcon from '../assets/fire.png';
import Home from '../assets/home_off.svg';
import StatOn from '../assets/stat_on.svg';
import Comm from '../assets/comm_off';
import User from '../assets/user_off';
import Write from '../assets/write_off';

const BarChart = ({ data }) => {
    return (
      <View style={styles.chartContainer}>
        {Object.keys(data).map((key, index) => (
          <View key={index} style={styles.barContainer}>
            <View style={[styles.bar, { height: data[key].value }]} />
            <Text style={styles.barLabel}>{data[key].label}</Text>
          </View>
        ))}
      </View>
    );
  };
  const CategoryRanking = ({ data }) => {
    return (
      <View>
        {data.map((category, index) => (
          <Text key={index} style={styles.categoryItem}>{`${index + 1}. ${category}`}</Text>
        ))}
      </View>
    );
  };
  
const StatScreen = () => {
    const navigation = useNavigation();
    const [selectedPeriod, setSelectedPeriod] = useState('year');

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
      };
    

    const achievementData = {
        year: { label: '연간', value: 100 }, // 예시 데이터
        month: { label: '월간', value: 80 },
        week: { label: '주간', value: 60 }
      };
    
      const categoryData = {
        year: ['운동', '독서', '공부', '요리', '여행'], // 예시 데이터
        month: ['운동', '독서', '공부', '요리', '프로그래밍'],
        week: ['독서', '공부', '요리', '프로그래밍', '여행']
      };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>
        <View style={styles.header}>
                <View style={styles.leftSettings}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={settingsIcon} style={styles.settings} />
                </TouchableOpacity>
                </View>
                <View style={styles.rightSettings}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={notionIcon} style={styles.settings} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={fireIcon} style={styles.settings} />
                </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.pageTitle}>For Me</Text>
            <View style={styles.achievementRate}> 
                <Text>달성율 통계</Text>
                <BarChart data={achievementData} />
            </View>
            <View style={styles.achievementCategory}>
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
          <CategoryRanking data={categoryData[selectedPeriod]} />
        </View>     
    </SafeAreaView>
  )
}

export default StatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8fa'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        top: 15
    },
    pageTitle: {
        fontSize: 35,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#508BFF',
        textAlign: 'center',
        bottom: 20
    },
    leftSettings: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightSettings: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settings: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    achievementRate: {
        flex: 1
   },
   achievementCategory: {
        flex: 1
   },
    menuBar: {
        height: 60,
        backgroundColor: '#508BFF',
        flexDirection: 'row',
        justifyContent:'space-around',
        // flex: 1
    },
    menuIcon: {
        margin: 10
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    achievementRate: {
        marginBottom: 20
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
      },
      periodButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
      },
      periodButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#D1D1D1'
      },
      selectedPeriodButton: {
        backgroundColor: '#508BFF'
      },
      periodButtonText: {
        color: '#D1D1D1'
      },
      achievementCategory: {
        marginBottom: 20
      },
      categoryContainer: {
        marginBottom: 10
      },
      categoryItem: {
        fontSize: 16
      },
})