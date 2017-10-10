
import React, { Component } from 'react';
import moment from 'moment';
import classname from 'classname';
import styles from './index.css';

export default class ServiceStats extends Component {
  render() {
    const { service } = this.props;
    const { runningCount, desiredCount } = service;
    const { image } = service.task.containerDefinitions[0];
    const date = moment(service.deployments[0].updatedAt)
    const updatedAgo = date.fromNow();
    const updatedIso = date.toISOString();
    const classes = classname({
      [styles.ServiceStats]: true,
      [styles['ServiceStats--left-aligned']]: this.props.left
    });
    return (
      <div className={classes}>
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <td title={image}>{image}</td>
            </tr>
            <tr>
              <th>Running</th>
              <td title={`${runningCount} out of ${desiredCount}`}>
                {runningCount} out of {desiredCount}
              </td>
            </tr>
            <tr>
              <th>Updated</th>
              <td title={updatedIso}>
                <time dateTime={updatedIso}>{updatedAgo}</time>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};
