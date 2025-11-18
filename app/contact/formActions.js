"use server";
export async function submitForm(formData) {
    console.log(formData);
    let formdata = new FormData();
    formdata.append("JSONString", JSON.stringify(formData));
    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    const postContactFormResponse = await fetch("https://venturedukulmanirana-api.edmingle.com/nuSource/api/v1/contactus", requestOptions)
        .then(response => {
            return response.text();
        }).then(result => {
            console.log("Contact form submitted result:", JSON.parse(result));
            return JSON.parse(result);
        }).catch(error => {
            console.log("Contact form submitted error:", error);
            return error;
        });

    if (postContactFormResponse) {
        return postContactFormResponse || { message: "Thank you for contacting us we will revert you shortly", code: 200 };
    } else {
        return { message: "There was an error submitting the form. Please try again later.", code: 500 };
    }
}