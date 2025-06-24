import { Router, Request, Response } from 'express';
import { CategoryRepositoryInMemory } from '../../repositories/category-repository-in-memory';

const router = Router();
const categoryRepo = new CategoryRepositoryInMemory();

router.post('/', async (req: Request<{},{},{name: string, icon: string}>, res: Response) => {
  const { name, icon } = req.body;
});

router.get('/', async (req: Request, res: Response) => {
  return res.json(await categoryRepo.findAll());
});

router.post('/', async (req: Request, res: Response) => {
  const { name, icon } = req.body;
  const category = await categoryRepo.create({ name, icon });
  return res.status(201).json(category);
});

export default router;
