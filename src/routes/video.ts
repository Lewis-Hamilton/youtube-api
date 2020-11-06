import {Router} from 'express';
import {VideoByIdController} from '../controllers/video/videoById.controller';
import {VideoBySearchController} from '../controllers/video/videoBySearch.controller';
import wrapAsync from '../middleware/async.middleware';
import {VideoListController} from '../controllers/video/videoList.controller';
import {VideoPostController} from '../controllers/video/videoPost.controller';

const router: Router = Router();

router.get('/', wrapAsync(VideoListController));

router.post('/upload', wrapAsync(VideoPostController));

router.get('/search', wrapAsync(VideoBySearchController));

router.get('/:id', wrapAsync(VideoByIdController));

export const VideoRouter: Router = router;
