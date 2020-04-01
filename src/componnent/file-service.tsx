import service from "./service";

export class FileService {
    uploadFileToServer(data: any){
        //returns Promise object
        return service.getRestClient().post('/storage/uploadFile', data);
    }
}