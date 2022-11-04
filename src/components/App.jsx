import React from 'react';
import Notiflix from 'notiflix';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from './Loader/Loader';
import {getImages} from '../api/api';

class App extends React.Component {
  state = {
    name: '',
    page: 1,
    items: [],
    isLoading: false,
    more: false,
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.setState({page: 1, items: []})
    const form = ev.currentTarget;
    const search = form.elements.search.value;
    this.setState({name: search})
    form.reset();
  }

  async fetchImg() {
    try {
      const {name, page} = this.state; 
      this.setState({isLoading: true})
      const data = await getImages(name, page);
      const items = data.hits;
      const imgPerPage = Math.ceil(data.totalHits / 12);

      if (data.totalHits > 12) {
        this.setState({more: true})
      }
      if (imgPerPage === page) {
        this.setState({more: false})
      }

      if (items.length === 0) {
        this.setState({isLoading: false});
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      }

      this.setState((prev)=> ({items: [...prev.items, ...items], isLoading: false}))
    } catch (error) {
      this.setState({isLoading: false})
      Notiflix.Notify.failure(`Error! ${error.message}`);
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.name !== this.state.name) {
      this.fetchImg();
    } 
  }

  handleClickMore = async() => {
    await this.setState((prev) => ({page: prev.page + 1}))
    this.fetchImg();
  }

  render() {
    const {items, more, isLoading} = this.state;
    return (
      <>
      <Searchbar onSubmit={this.onSubmit}/>
      <ImageGallery items={items}/>
      {more && <Button onClick={this.handleClickMore}/>}
      {isLoading && <Loader/>}
      </>
    );
  }
};

export default App;