export const apiCheck = async (pic1: string, pic2: string, pic3:string): Promise<string> => {
    let credentials = {
        pic1,
        pic2,
        pic3
    }
    try {
        console.log(pic1);
        console.log(pic2);
        console.log(pic3);
        const response = await fetch('http://ec2-54-167-249-169.compute-1.amazonaws.com:8080/user/compare', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.text()
           
            return body
        } else if(response.status === 400){
            return "wrong input, make sure you use face picture"
        } else {
            return "Something Went Wrong"
        }
    } catch (e) {
        console.log(e);
        return "Something Went Wrong"
    }
}