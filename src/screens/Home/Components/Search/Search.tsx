import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {searchNews, loadNews} from '../../../../stores/actions/NewsActions/actions';
import {useDispatch} from 'react-redux';
import styles from './Search.styles';
const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useDispatch();
  const changeSearchTerm = (term: string) => {
    setSearchInput(term);
  };
  useEffect(() => {
      dispatch(searchNews(searchInput));
  }, [searchInput]);
  return (
    <View style={styles.searchArea}>
      <TextInput
        placeholder="Enter a term to search for.."
        placeholderTextColor="#333"
        onChangeText={changeSearchTerm}
        value={searchInput}
        style={styles.searchInput}
      />
    </View>
  );
};
export default Search;
