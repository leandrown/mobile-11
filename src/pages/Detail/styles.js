import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight + 20,
      paddingHorizontal: 24
   },

   header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   incident: {
      padding: 24,
      marginTop: 46,
      marginBottom: 16,
      backgroundColor: '#fff',
      borderRadius: 6
   },

   incidentProperty: {
      marginTop: 24,
      color: '#41414d',
      fontSize: 14,
      fontWeight: 'bold'
   },

   incidentValue: {
      marginTop: 8,
      color: '#737380',
      fontSize: 15
   },

   contactBox: {
      padding: 24,
      marginBottom: 16,
      backgroundColor: '#fff',
      borderRadius: 6
   },

   heroTitle: {
      color: '#13131a',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 30
   },

   heroDescription: {
      marginTop: 16,
      color: '#737380',
      fontSize: 15
   },

   actions: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'
   },

   action: {
      width: '48%',
      height: 50,
      backgroundColor: '#e02041',
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center'
   },

   actionText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
   }
});
