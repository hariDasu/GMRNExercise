import axios from 'axios';
import {HttpUtils} from '../utilities/';

export class RecordsService {
  static fetchRecords = async (artist) => {
    console.log(artist);
    return await axios
      .get(`https://itunes.apple.com/search?term=${artist}`)
      .then(HttpUtils.handleResponse);
  };
}
