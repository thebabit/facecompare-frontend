import React, { SyntheticEvent } from 'react';
import { FileService } from './file-service';
import { Form, Button, FormGroup, Label, Input, Col, Jumbotron, Alert } from 'reactstrap';
import { apiCheck } from './check_client';


interface ILoginState {
    checkMessage: string,
    pic1: string,
    pic2: string,
    pic3: string

}

export class FileUploader extends React.Component<any, ILoginState>{
    fileService: FileService;


    constructor(prop: any) {
        super(prop);
        this.fileService = new FileService();
        this.state = {
            checkMessage: '',
            pic1: '',
            pic2: '',
            pic3: ''

        }
    }



    handleUploadFile = (event: any) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');

        this.setState({
            ...this.state,
            pic1: file.name
        })
        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then(() => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error: { response: { status: any; }; message: any; }) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    };


    handleUploadFile2 = (event: any) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');

        this.setState({
            ...this.state,
            pic2: file.name
        })
        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then(() => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error: { response: { status: any; }; message: any; }) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });


    };


    handleUploadFile3 = (event: any) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');

        this.setState({
            ...this.state,
            pic3: file.name
        })
        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then(() => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error: { response: { status: any; }; message: any; }) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    };

    submitcheck = async (event: SyntheticEvent) => {

        event.preventDefault()
        let checkmessage = await apiCheck(this.state.pic1, this.state.pic2, this.state.pic3)
        this.setState({
            ...this.state,
            checkMessage: checkmessage
        })

        console.log("hahaha   " + this.state.checkMessage)
        alert(this.state.checkMessage)
    };


    render() {
        return (
            <div>
                <Jumbotron>
                    <Form bordered>

                        <FormGroup > 
                        <Alert color="primary">First picture upload </Alert>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" onChange={this.handleUploadFile} />
                                <br/><br/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                        <Alert color="primary">Second picture upload </Alert>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" onChange={this.handleUploadFile2} />
                                <br/><br/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                        <Alert color="primary">Third picture upload </Alert>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" onChange={this.handleUploadFile3} />
                                <br/><br/>
                            </Col>
                        </FormGroup>





                        <Button color="primary" size="lg" block onClick={this.submitcheck} >---Check---</Button>


                        <br /><br /><br />

                        <p>{this.props.checkMessage}</p>
                    </Form>

                </Jumbotron>



            </div>
        )
    };
}