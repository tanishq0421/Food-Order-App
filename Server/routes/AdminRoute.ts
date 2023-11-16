import { CreateVandor, GetVandors, GetVandorsById } from "../controllers/AdminController";

const router = express.Router();

router.post('/createVandor', CreateVandor);
router.get('/getVandors', GetVandors);
router.post('/getVandor/:id', GetVandorsById);