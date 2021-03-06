import { connect } from 'react-redux';

import { setCurrentPage } from 'redux/actions';
import { AppState } from 'redux/domain';
import { temp_data } from './tempdata';

const BASE_URL = 'https://swapi.dev/api/';
const error_msg = 'Sorry, there was a problem reaching the API.\nThis error occured in the following function: ';
let data: any[] = [];

const mapStateToProps = (state: AppState) => ({
  currentPage: state.pages.current
});

const mapDispatchToProps = {
  onChangeCurrentPage: (currentPage: string) => setCurrentPage(currentPage),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Adapter = (props: Props): any => {

  const all = (type: string) => {
    const fetch_URL = BASE_URL + type + '/';
    return fetch(fetch_URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(error_msg + 'all(' + type + ')');
        }
      }).catch((error) => {
        return null;
        // return temp_data[type];
      }).then((res) => {
        data = res;
        // return this.get_all_data(res);
      })
  }

  // static get_all_data(res: any) {
  //   data = [...data, res];
  //   const total_calls_needed = Math.ceil(res.count / 10);
  //   if (total_calls_needed === 1) {
  //     return data;
  //   } else {
  //     const base_URL = res.next.match(/^[^=]*=/)[0];
  //     const fetch_URLs = [...Array(total_calls_needed + 1).keys()].slice(2).map((n) => base_URL + n);
  //     return Promise.all(fetch_URLs.map((url) =>
  //       fetch(url).then((r) => r.json())
  //     )).then((next_data) => {
  //       let all_data = [...data, ...next_data.map((x) => x.results).flat()];
  //       return all_data.sort((a, b) => a.name > b.name ? 1 : -1);
  //     })
  //   }
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(Adapter);
