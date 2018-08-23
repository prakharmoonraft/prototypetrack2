import React from 'react';
import { Table } from 'reactstrap';
import './Table.css';

export default class GrantTable extends React.Component {
    render() {
        return (
            <div>

                <Table responsive bordered>
                    <thead>
                        <tr >
                            <th className="Input-Heading pl-0">Charity name</th>
                            <th className="Input-Heading pl-0">Grant amount</th>
                            <th className="Input-Heading pl-0">Grant date</th>
                            <th className="Input-Heading w-25 pl-0">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td scope="row" className="table-data pl-0">World wide fund (WWF)</td>
                            <td className="table-data pl-0">$1000 </td>
                            <td className="table-data pl-0">22/06/2018 </td>
                            <td className="table-data pl-0">Scheduled
                                <span class="table-i">
                                    <img src={require('../../../assets/images/more_info.png')} className="if_add_370092" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-data pl-0">Pacific Whale Rescue </td>
                            <td className="table-data pl-0">$1000 </td>
                            <td className="table-data pl-0">22/06/2018 </td>
                            <td className="table-data pl-0">Pending Approval
                                <span class="table-i-41">
                                    <img src={require('../../../assets/images/more_info.png')} className="if_add_370092" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-data pl-0">Green Peace</td>
                            <td className="table-data pl-0">$1000 </td>
                            <td className="table-data pl-0">22/06/2018 </td>
                            <td className="table-data pl-0">Grant Sent
                                <span class="table-i-84">
                                    <img src={require('../../../assets/images/more_info.png')} className="if_add_370092" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-data pl-0 pr-0">Arizona Community Foundation</td>
                            <td className="table-data pl-0">$1200 </td>
                            <td className="table-data pl-0">22/06/2018 </td>
                            <td className="table-data pl-0">Scheduled
                                <span class="table-i">
                                    <img src={require('../../../assets/images/more_info.png')} className="if_add_370092" />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}