import {Router} from 'express';
import {VideoByIdController} from '../controllers/video/videoById.controller';
import {VideoBySearchController} from '../controllers/video/videoBySearch.controller';
import wrapAsync from '../middleware/async.middleware';
import {VideoListController} from '../controllers/video/videoList.controller';
import {VideoPostController} from '../controllers/video/videoPost.controller';
import {ManualVideoPostController} from '../controllers/video/manualVideoPost.controller';
import {VideoDeleteByIdController} from '../controllers/video/videoDeleteById.controller';

const router: Router = Router();

router.get('/', wrapAsync(VideoListController));

router.post('/upload', wrapAsync(VideoPostController));

router.post('/upload/manual', wrapAsync(ManualVideoPostController));

router.get('/search', wrapAsync(VideoBySearchController));

router.delete('/:id', wrapAsync(VideoDeleteByIdController));

router.get('/:id', wrapAsync(VideoByIdController));

export const VideoRouter: Router = router;
