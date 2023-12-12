import React, { useState, useEffect } from 'react';
import { ImageBackground, View, TextInput, FlatList, Text, Button, StyleSheet } from 'react-native';

export function Buscar() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  const image2 = { uri: 'https://image.slidesdocs.com/responsive-images/background/business-simple-gradient-blue-technology-light-blue-powerpoint-background_f6faa583ee__960_540.jpg' };


  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/users/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = data.filter(
      (item) =>
        item.id.toString().includes(query) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      // Ajusta esto según las propiedades de tu API
    );
    setFilteredData(filtered);
    setSearchResultsVisible(true);
  };

  const clearSearchResults = () => {
    setFilteredData([]);
    setSearchResultsVisible(false);
  };

  return (
    <ImageBackground source={image2} resizeMode="cover" style={styles.image2}>
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          onChangeText={(text) => setQuery(text)}
          value={query}
        />
        <Button title="Buscar" onPress={handleSearch} />
      </View>
      {searchResultsVisible && (
        <View style={styles.resultsContainer}>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.resultItem}>
                <Text style={styles.resultText}>{`ID: ${item.id}, Título: ${item.title}`}</Text>
                {/* Ajusta esto según las propiedades de tu API */}
              </View>
            )}
          />
          <Button title="Limpiar resultados" onPress={clearSearchResults} />
        </View>
      )}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },

  image2: {
    flex: 1,
    justifyContent: 'center',

  },

  resultsContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  resultItem: {
    marginBottom: 5,
  },
  resultText: {
    marginBottom: 5,
  },
});
