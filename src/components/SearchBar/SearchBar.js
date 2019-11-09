import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import youtubeAPI from '../../apis/youtube';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [term, setTerm] = useState('')
  const history = useHistory();

  const onTermChange = (event) => {
    setTerm(event.target.value);
  }

  const onSearchSubmit = event => {
    event.preventDefault();
    getVideos(term);
  }

  const getVideos = async (term) => {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: term,
        maxResults: 20
      }
    });
    history.push('/', {
      videos: response.data.items
    });
  }

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      getVideos(term);
    }, 1000);

    return () => {
      clearTimeout(handler);
    }
  }, [term]);

  return (
    <div className='ui segment search-bar'>
      <form onSubmit={onSearchSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input
            onChange={onTermChange}
            value={term}
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
