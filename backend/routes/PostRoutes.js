const express = require("express");
const router = express.Router();
const {
  fetchAllRecipe,
  fetchOneRecipe,
  fetchAllRecipesOfUser,
} = require("../controller/FetchingControllers");
const { addRecipe } = require("../controller/AddControllers");
const { userAuth } = require("../middlewares/userauth");
const { addRecipe } = require("..");

router.get("/getAllPosts", fetchAllRecipe);
router.get("/user/getAllPosts", userAuth, fetchAllRecipesOfUser);
router.get("/searchPosts", fetchAllRecipe);
router.get("/getOnePosts/:id", fetchOneRecipe);
router.post("/addpost", userAuth, addRecipe);

module.exports = router;