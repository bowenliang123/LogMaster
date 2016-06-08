/**
 * Created by bowen on 16/3/12.
 */
'use strict';

console.log('app');

let FormGroup = ReactBootstrap.FormGroup;
let ControlLabel = ReactBootstrap.ControlLabel;
let FormControl = ReactBootstrap.FormControl;
let Grid = ReactBootstrap.Grid;
let Row = ReactBootstrap.Row;

let appInstance = (
    <Grid>
        <Row >
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea"/>
            </FormGroup>
        </Row>
    </Grid>
);

ReactDOM.render(appInstance, document.getElementById('app'));