import React from "react";
import {
  Container,
  Segment,
  Table,
  Header,
  Button,
  Message
} from "semantic-ui-react";

export default class TaskList extends React.Component {
  render() {
    const { loggedIn } = this.props;

    const TaskTable = () => (
      <Container>
        <Segment>
          <Header as="h2" textAlign="center">
            Tasks
          </Header>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Modify</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Boris Grishenko</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Buy a new server!</Table.Cell>
                <Table.Cell textAlign="right">
                  <Button icon="checkmark" />
                  <Button icon="edit" color="blue" />
                  <Button icon="trash" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SF BART</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Don't be late - catch the 7:30 AM SFO Train!</Table.Cell>
                <Table.Cell textAlign="right">
                  <Button icon="checkmark" />
                  <Button icon="edit" color="blue" />
                  <Button icon="trash" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Natalya Simonova</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Steal the GoldenEye disk.</Table.Cell>
                <Table.Cell textAlign="right">
                  <Button icon="checkmark" />
                  <Button icon="edit" color="blue" />
                  <Button icon="trash" color="red" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Container>
    );

    const NotLoggedIn = () => (
      <Container>
        <Message warning>
          <Message.Header>Not Logged In</Message.Header>
          <p>
            You are currently not logged in. Please login to view your Todo
            items.
          </p>
        </Message>
      </Container>
    );

    return (
      <React.Fragment>
        {loggedIn ? <TaskTable /> : <NotLoggedIn />}
      </React.Fragment>
    );
  }
}
