import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const photos = [
    {
        id: '1',
        uri: 'https://cdn.pixabay.com/photo/2016/10/28/16/43/usa-1778564_1280.jpg',
        date: '2024-10-10',
        location: 'New York, USA',
        description: 'A beautiful sunset over the skyline.',
    },
    {
        id: '2',
        uri: 'https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_1280.jpg',
        date: '2024-09-12',
        location: 'Paris, France',
        description: 'The Eiffel Tower at night.',
    },
    {
        id: '3',
        uri: 'https://cdn.pixabay.com/photo/2016/10/01/06/13/japan-1706942_1280.jpg',
        date: '2024-08-30',
        location: 'Tokyo, Japan',
        description: 'A serene view of Mount Fuji.',
    },
    {
        id: '4',
        uri: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
        date: '2024-07-22',
        location: 'Mauna Kea, Hawaii',
        description: 'Stargazing under the clear night sky.',
    },
    {
        id: '5',
        uri: 'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg',
        date: '2024-06-15',
        location: 'Amsterdam, Netherlands',
        description: 'Vibrant tulip fields in spring.',
    }
];

const App = () => {
   /**
    * @description Renders a single photo item in the gallery.
    * @param {object} item  
    * @returns {JSX.Element}
    * 
    * TODO: Implement an arrow function called `renderItem` that takes an object as an argument and returns a JSX element.
    * 
    * Steps:
    * - The function should  View component with a style of `styles.photoContainer`.
    * - Inside the View component, add an Image component with the source set to the uri of the item and a style of `styles.photo`.
    * - Add another View component with a style of `styles.details`.
    * - Inside the View component, add a Text component with a style of `styles.date` that displays the date of the item using `item.date`.
    * - Add a Text component with a style of `styles.location` that displays the location of the item using `item.location`.
    * - Add a Text component with a style of `styles.description` that displays the description of the item using `item.description`.
    * 
    * Refernce (View Component): https://reactnative.dev/docs/view
    * Reference (Image Component): https://reactnative.dev/docs/image
    * Reference (Text Component): https://reactnative.dev/docs/text
    * Reference (styling in React Native): https://reactnative.dev/docs/stylesheet
    */
   // YOUR CODE STARTS HERE
  const renderItem = ({ item }) => {
    return (
      <View style={styles.photoContainer}>
        <Image source={{uri: item.uri}} style={styles.photo}/>
        
        <View style={styles.details}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>  
        
      </View>  
    )  
  }
        // YOUR CODE ENDS HERE

  /**
   * @description Renders a list of photos in a FlatList component.
   * @returns {JSX.Element}
   * 
   * TODO: Implement a FlatList component that renders a list of photos.
   * 
   * Steps:
   * - Add a FlatList component with the following props:
   *      - data: The array of photos.
   *     - renderItem: The renderItem function defined above.
   *    - keyExtractor: A function that returns the unique id of each item.
   * 
   * Reference (FlatList Component): https://reactnative.dev/docs/flatlist
   * Reference (keyExtractor): https://reactnative.dev/docs/flatlist#keyextractor
   * Reference (renderItem): https://reactnative.dev/docs/flatlist#renderitem
   */
  // YOUR CODE STARTS HERE
  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  photo: {
    width: '100%',
    height: 350,
  },
  details: {
    padding: 10,
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    color: 'gray',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

export default App;