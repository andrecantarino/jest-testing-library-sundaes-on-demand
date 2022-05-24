import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <FormGroup controlId="terms-and-conditions">
        <FormCheck
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
          role="checkbox"
        />
      </FormGroup>
      <Button
        variant="primary"
        type="submit"
        role="button"
        disabled={!tcChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
