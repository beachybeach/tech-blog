const router = require("express").Router();
// eslint-disable-next-line no-undef
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  const comment = await Comment.findAll();
});

router.post("/", async (req, res) => {
  const comment = await Comment.create();
});

router.delete("/", async (req, res) => {
  const comment = await Comment.destroy();
});
