import React from 'react';
import {Form,Input,Button, Message} from 'semantic-ui-react';

class ContributeForm extends React.Component {
render() {
  return (
    <Form>
      <Form.Field>
        <label>Ammount to contribute</label>
        <Input
          placeholder='Enter amount to enter in campaign'
          label='ether'
          labelPosition='right'/>
      </Form.Field>
        <Button primary>Submit</Button>
    </Form>
  );
}
}

export default ContributeForm;
