import fs from "fs";

// Helper function to read data from the JSON file
export function getData() {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data as any);
}

// Helper function to write data to the JSON file
export function setData(data: any) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync("data.json", jsonData);
}

// Function to add a user to the users array
export function addUser(user: any) {
  const data = getData();
  data.users.push(user);
  setData(data);
}

// Function to get all users from the users array
export function getUsers() {
  const data = getData();
  return data.users;
}

// Function to get a specific user by ID from the users array
export function getUserById(userId: string) {
  const data = getData();
  console.log("helper data :>> ", data);
  const user = data.users.find((user: any) => user.id === userId);
  console.log("helper user :>> ", user);
  return user;
}
