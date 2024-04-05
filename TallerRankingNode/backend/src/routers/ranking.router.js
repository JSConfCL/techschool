import express from 'express';
import { getRanking, addRecord, reset } from '../controllers/ranking.controller.js';
import { authToken, generateToken, login } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getRanking);
router.post('/', addRecord);
router.delete('/', authToken, reset);

router.post('/login', login, (req, res) => {
    const token = generateToken({ user: req.user, role: "admin" });
    res.send({ token });
});

export default router;
