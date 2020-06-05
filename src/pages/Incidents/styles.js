import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight + 20,
      paddingHorizontal: 24,
   },

   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },

   headerText: {
      fontSize: 15,
      color: '#737380'
   },

   headerTextBold: {
      fontWeight: 'bold'
   },

   title: {
      marginTop: 46,
      marginBottom: 16,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#13131a'
   },

   description: {
      color: '#737380',
      fontSize: 16,
      lineHeight: 24
   },

   incidentList: {
      marginTop: 32
   },

   incident: {
      marginBottom: 16,
      padding: 24,
      backgroundColor: '#fff',
      borderRadius: 6
   },

   incidentProperty: {
      color: '#41414d',
      fontSize: 14,
      fontWeight: 'bold'
   },

   incidentValue: {
      marginTop: 8,
      marginBottom: 24,
      color: '#737380',
      fontSize: 15
   },

   detailsButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   detailsButtonText: {
      color: '#e02041',
      fontSize: 15,
      fontWeight: 'bold'
   }
});
