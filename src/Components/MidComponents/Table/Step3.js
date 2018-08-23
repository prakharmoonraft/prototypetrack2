import React from 'react';
import { Table } from 'reactstrap';
import './Table.css';

export default class Table3 extends React.Component {
  render() {
    return (
      <div>
        <Table border="1" rules="none" className="border-color mb-5" responsive>
          <thead>
            <tr className="Rectangle-15">
              <th className="Categories-Investment w-25">Grant name</th>
              <th className="Categories-3 w-25">Amount</th>
              <th className="Categories-3-s w-25">Scheduled on</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="Values w-25" >Jewish Social Service Agency</th>
              <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                <img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></span>
              </td>
              <td><span className="layer-Date">22/07/18</span><img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></td>
             
            </tr>
            <tr>
              <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
              <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                <img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></span>
              </td>
              <td><span className="layer-Date">22/08/18</span><img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></td>
             
            </tr>
            <tr>
              <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
              <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                <img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></span>
              </td>
              <td><span className="layer-Date">22/09/18</span><img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></td>
             
            </tr>

            <tr>
              <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
              <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                <img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></span>
              </td>
              <td> <span className="layer-Date">22/10/18</span><img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></td>
             
            </tr>

            <tr>
              <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
              <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                <img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></span>
              </td>
              <td> <span className="layer-Date">22/11/18</span><img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></td>
             
            </tr>

            <tr>
              <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
              <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                <img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></span>
              </td>
              <td> <span className="layer-Date">22/12/18</span><img src={require('../../../assets/images/edit.png')} className="if_write_126582" /></td>
             
            </tr>

          </tbody>
        </Table>
      </div>
    );
  }
}