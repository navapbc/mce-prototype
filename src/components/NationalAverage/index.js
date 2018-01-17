import React from "react";

export default () => (
  <table className="ds-c-table">
    <thead>
      <tr>
        <th className="ds-u-padding--2">Facility type</th>
        <th className="ds-u-padding--2">
          National “average” amount that Medicare pays
        </th>
        <th className="ds-u-padding--2">
          National “average” copay amount for a beneficiary with no Medicare
          supplemental insurance
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="ds-u-padding--2">Hospital Outpatient Departments</th>
        <td className="ds-u-font-size--h3 ds-u-text-align--right ds-u-padding--2">
          $1,250
        </td>
        <td className="ds-u-font-size--h3 ds-u-text-align--right ds-u-padding--2">
          $3,152
        </td>
      </tr>
      <tr>
        <th className="ds-u-padding--2">Ambulatory Surgical Centers</th>
        <td className="ds-u-font-size--h3 ds-u-text-align--right ds-u-padding--2">
          $2,784
        </td>
        <td className="ds-u-font-size--h3 ds-u-text-align--right ds-u-padding--2">
          $6,851
        </td>
      </tr>
    </tbody>
  </table>
);
