import React from 'react';
import '../Styles/Micocompnent.styles/Recenttable.scss';
import { GrLinkNext } from "react-icons/gr";

interface DataProps {
  name: string;
  status: string;
  priority: string;
  created: string;
}

const datas: DataProps[] = [
  { name: "King", status: "Pending", priority: "High", created: new Date().toLocaleDateString() },
  { name: "Alice", status: "Completed", priority: "Low", created: new Date().toLocaleDateString() },
  { name: "John", status: "Inprogress", priority: "Medium", created: new Date().toLocaleDateString() },
];

const Recenttable = () => {
  return (
    <div className='table-recent-conatainer'>
      <div className="nav-table">
        <h2>Recent Tasks</h2>
        <button><span>See All</span><GrLinkNext /></button>
      </div>

      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created On</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <span className={`status-badge ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <span className={`priority-badge ${item.priority.toLowerCase()}`}>
                    {item.priority}
                  </span>
                </td>
                <td>{item.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recenttable;
