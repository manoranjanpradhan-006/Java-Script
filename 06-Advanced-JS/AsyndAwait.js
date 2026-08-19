function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chinu", url: "https://google.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data ...");
    const userData = await fetchUserData();
    console.log("User data fetched succesfully");

    console.log("UserData", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
