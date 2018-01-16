import "./index.scss";
import { Autocomplete, Button, TextField } from "@cmsgov/design-system-core";
import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";
import { navigateTo } from "gatsby-link";

const labelClasses = "ds-u-font-weight--bold";
const hintClasses = "ds-u-font-weight--normal ds-u-color--gray";
const fieldClasses = "ds-u-font-size--h3";

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.procedures = this.props.procedures.map(edge => ({
      id: edge.node.code,
      name: edge.node.name,
      searchIndex: this.transformSearchTerm(edge.node.name),
      slug: edge.node.fields.slug
    }));

    this.state = {
      // Procedure autocomplete options. We'll filter these as the user types
      procedureOptions: [].concat(this.procedures),
      procedureValue: ""
    };

    this.handleAutocompleteChange = this.handleAutocompleteChange.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.handleProcedureFieldChange = this.handleProcedureFieldChange.bind(
      this
    );
  }

  /**
   * Optimize a string to roughly provide fuzzy autocomplete search
   * @param {String} value
   * @returns {String}
   */
  transformSearchTerm(value) {
    return value.toLowerCase().replace(/\s/, "");
  }

  /**
   * Event handler for when an autocomplete option is selected
   */
  handleAutocompleteChange(procedure) {
    this.setState({
      selectedProcedureSlug: procedure.slug
    });
  }

  /**
   * Event handler for the "Compare prices" button"
   */
  handleCompareClick() {
    if (this.state.selectedProcedureSlug) {
      return navigateTo(this.state.selectedProcedureSlug);
    }
  }

  /**
   * Procedure field onChange handler, responsible for filtering
   * the autocomplete options
   * @param {SyntheticEvent} evt
   */
  handleProcedureFieldChange(evt) {
    const newValue = evt.target.value;
    const newValueIndex = this.transformSearchTerm(newValue);
    const newValueLength = newValue.length;
    let optionsPendingFilter;

    if (
      newValueLength > 2 &&
      newValueLength > this.state.procedureValue.length &&
      _.startsWith(newValue, this.state.procedureValue)
    ) {
      // Narrow our search on existing filtered options
      optionsPendingFilter = [].concat(this.state.procedureOptions);
    } else {
      // Widen our search
      optionsPendingFilter = this.procedures;
    }

    const procedureOptions = optionsPendingFilter.filter(procedure =>
      _.includes(procedure.searchIndex, newValueIndex)
    );

    this.setState({
      procedureOptions: procedureOptions,
      procedureValue: newValue
    });
  }

  renderProcedureField() {
    return (
      <div className="ds-l-col ds-l-col--8">
        <Autocomplete
          items={this.state.procedureOptions}
          label="Select from the procedures below:"
          onChange={this.handleAutocompleteChange}
        >
          <TextField
            label="Procedure name or code"
            hint={
              <span className={hintClasses}>
                Enter the name of the procedure (i.e. Ultrasound) or the
                procedure&rsquo;s code.
              </span>
            }
            fieldClassName={`${fieldClasses} input--search`}
            labelClassName={labelClasses}
            name="procedure"
            onChange={this.handleProcedureFieldChange}
            value={this.state.procedureValue}
          />
        </Autocomplete>
      </div>
    );
  }

  render() {
    return (
      <div className="ds-l-row">
        {this.renderProcedureField()}
        {/* <TextField
      className="ds-l-col ds-l-col--4"
      value="21244"
      readOnly
      label="Zip code"
      hint={
        <span className={hintClasses}>
          Compare facilities near you. We&rsquo;re using Baltimore for demo
          purposes.
        </span>
      }
      fieldClassName={`${fieldClasses} input--zip`}
      labelClassName={labelClasses}
      requirementLabel="Optional"
      name="procedure"
    /> */}
        <div className="ds-l-col ds-l-col--12 ds-u-padding-top--2">
          <Button onClick={this.handleCompareClick} variation="primary">
            Compare prices
          </Button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  procedures: PropTypes.array
};

export default Search;
