const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const [postsResponse, photosResponse] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/photos"),
    ]);

    const posts = postsResponse.data;
    const photos = photosResponse.data;

    const combinedData = posts.map((post) => {
      // Find the photo with the same ID as the post
      const matchingPhoto = photos.find((photo) => photo.id === post.id);

      // Split the body text into parts using the newline character
      const [
        subheader = "",
        paragraph1 = "",
        paragraph2 = "",
        paragraph3 = "",
      ] = post.body.split("\n");

      // Return a new object combining the post with the matching photo's URL and thumbnail
      return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        subheader,
        paragraph1,
        paragraph2,
        paragraph3,
        photo: matchingPhoto ? matchingPhoto.url : null,
        thumbnail: matchingPhoto ? matchingPhoto.thumbnailUrl : null,
      };
    });

    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching or posting data:", error);
    res.status(500).json({ error: "Failed to fetch or post data" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});