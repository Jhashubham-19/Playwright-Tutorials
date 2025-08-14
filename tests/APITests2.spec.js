import {expect , test} from "@playwright/test";

var userId;
var email_Id;

test("Get user", async ({request}) => {
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    const resp= await response.json();
    email_Id= resp.data[0].email;
    console.log("Email ID is: ", email_Id);
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
});

test("Create user", async ({request}) => {
    const response = await request.post("https://jsonplaceholder.typicode.com/posts", 
        {
        data:  {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
            headers: {
                "Accept": "application/json"
            }
    });
    console.log(await response.json())
    expect(response.status()).toBe(201)
    expect(response.ok()).toBeTruthy()
    const res = await response.json();
    userId= res.userId;  
    console.log("User ID is: ", userId);
});