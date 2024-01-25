import axios from "axios";

export interface ISneaker {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

class queries {
  readonly baseUrl = "https://07270eab97382187.mokky.dev";

  async getSneakers() {
    return axios.get<ISneaker[]>(`${this.baseUrl}/sneakers`);
  }

  async getSneakerById(id: number) {
    return axios.get<ISneaker>(`${this.baseUrl}/sneakers?=${id}`);
  }
}

export default new queries();
