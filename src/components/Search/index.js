import "./index.scss";
import React from "react";
import { TextField } from "@cmsgov/design-system-core";

const labelClasses = "ds-u-font-weight--bold";
const hintClasses = "ds-u-font-weight--normal ds-u-color--gray";
const fieldClasses = "ds-u-font-size--h3 ds-u-md-padding--2";

const Search = () => (
  <React.Fragment>
    <TextField
      label="Procedure name or code"
      hint={
        <span className={hintClasses}>
          Enter the name of the procedure (i.e. Ultrasound) or the
          procedure&rsquo;s code.
        </span>
      }
      fieldClassName={`${fieldClasses} field--search`}
      labelClassName={labelClasses}
      name="procedure"
    />
  </React.Fragment>
);

export default Search;
